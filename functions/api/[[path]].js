// Cloudflare Pages Function: an edge cache in front of GBIF and iNaturalist for /api/*.
// It follows the same allow-list as server/server.mjs, so the app treats both proxies alike.
// Responses are cached per Cloudflare data centre. When an upstream refuses (rate limit, outage) the
// status is passed on and the app asks the source directly for a while (js/services/api.js).
// Optional environment variable: USER_AGENT (set it in the Cloudflare Pages project settings).
import { config } from '../../js/config.js';
import { DEFAULT_USER_AGENT, UPSTREAM, route } from '../../server/policy.mjs';

const JSON_TYPE = 'application/json; charset=utf-8';
const BROWSER_MAX_AGE = 300;

function json(status, data, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': JSON_TYPE,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...extra,
    },
  });
}

/** Browsers keep a response for a few minutes; the edge copy lives as long as the upstream TTL. */
function forBrowser(response, status) {
  const out = new Response(response.body, response);
  out.headers.set('Cache-Control', `public, max-age=${BROWSER_MAX_AGE}`);
  out.headers.set('X-Cache', status);
  return out;
}

export async function onRequest({ request, params, env, waitUntil }) {
  if (!['GET', 'HEAD'].includes(request.method))
    return json(405, { error: 'Method not allowed' }, { Allow: 'GET, HEAD' });
  const url = new URL(request.url);
  const apiPath = [].concat(params.path || []).join('/');
  if (apiPath === 'health') return json(200, { ok: true, proxy: true, edge: true, version: config.version });

  const { provider, path, error } = route(apiPath);
  if (error === 404) return json(404, { error: 'Unknown endpoint' });
  if (error === 403) return json(403, { error: 'Endpoint not allowed' });
  if (url.search.length > 2000) return json(414, { error: 'Query too long' });

  const cache = caches.default;
  const key = new Request(`${url.origin}${url.pathname}${url.search}`, { method: 'GET' });
  const hit = await cache.match(key);
  if (hit) return forBrowser(hit, 'HIT');

  let upstream;
  try {
    upstream = await fetch(`${UPSTREAM[provider].base}${path}${url.search}`, {
      headers: { 'User-Agent': env?.USER_AGENT || DEFAULT_USER_AGENT, Accept: 'application/json' },
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    return json(502, { error: 'Upstream unavailable' });
  }
  if (!upstream.ok) {
    const status = upstream.status >= 500 ? 502 : upstream.status;
    return json(
      status,
      { error: `Upstream answered ${upstream.status}` },
      status === 429 ? { 'Retry-After': '60' } : {}
    );
  }

  const ttl = Math.round(UPSTREAM[provider].ttl(path) / 1000);
  const response = new Response(await upstream.arrayBuffer(), {
    status: 200,
    headers: {
      'Content-Type': upstream.headers.get('content-type') || JSON_TYPE,
      'Cache-Control': `public, max-age=${ttl}`,
      'X-Content-Type-Options': 'nosniff',
    },
  });
  waitUntil(cache.put(key, response.clone()));
  return forBrowser(response, 'MISS');
}
