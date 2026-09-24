import { test, expect } from '@playwright/test';
import { spawn } from 'node:child_process';

const PORT = 18766;
const base = `http://127.0.0.1:${PORT}`;
const servers = [];

// One worker runs this file, so no two workers race for the same ports.
test.describe.configure({ mode: 'serial' });

async function start(port, env = {}) {
  const child = spawn(process.execPath, ['server/server.mjs'], {
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', ...env },
    stdio: 'ignore',
  });
  servers.push(child);
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(`http://127.0.0.1:${port}/api/health`)).ok) return;
    } catch {
      /* not ready yet */
    }
    await new Promise(r => setTimeout(r, 100));
  }
  throw new Error('server did not start');
}

test.beforeAll(() => start(PORT));
test.afterAll(() => servers.forEach(child => child.kill()));

test('health endpoint announces the proxy', async ({ request }) => {
  const res = await request.get(`${base}/api/health`);
  expect(res.ok()).toBe(true);
  expect(await res.json()).toMatchObject({ ok: true, proxy: true });
});

test('pages carry security headers and compress text', async ({ request }) => {
  const res = await request.get(`${base}/`, { headers: { 'Accept-Encoding': 'br' } });
  const h = res.headers();
  expect(h['content-security-policy']).toContain("frame-ancestors 'none'");
  expect(h['x-content-type-options']).toBe('nosniff');
  expect(h['referrer-policy']).toBe('strict-origin-when-cross-origin');
  expect(h['cache-control']).toBe('no-cache');
  const js = await request.get(`${base}/js/data/species.js`, { headers: { 'Accept-Encoding': 'br' } });
  expect(js.headers()['content-encoding']).toBe('br');
  const etag = js.headers().etag;
  const again = await request.get(`${base}/js/data/species.js`, { headers: { 'If-None-Match': etag } });
  expect(again.status()).toBe(304);
});

test('only public files are served', async ({ request }) => {
  for (const path of [
    '/package.json',
    '/server/server.mjs',
    '/.git/config',
    '/tests/helpers.js',
    '/js/../package.json',
    '/assets/%2e%2e/package.json',
  ]) {
    const res = await request.get(`${base}${path}`);
    expect(res.status(), path).toBeGreaterThanOrEqual(403);
  }
  expect((await request.get(`${base}/sw.js`)).headers()['service-worker-allowed']).toBe('/');
});

test('the proxy only forwards known read-only endpoints', async ({ request }) => {
  expect((await request.get(`${base}/api/inat/v1/users/me`)).status()).toBe(403);
  expect((await request.get(`${base}/api/gbif/v1/occurrence/download/request`)).status()).toBe(403);
  expect((await request.get(`${base}/api/unknown`)).status()).toBe(404);
  expect((await request.post(`${base}/api/health`)).status()).toBe(405);
});

test('the per-client limit ignores X-Forwarded-For unless a proxy is trusted', async ({ request }) => {
  // Allowed requests reach GBIF; their outcome does not matter, only whether the limit answers 429.
  const path = '/api/gbif/v1/species/5219416';
  await start(18767, { CLIENT_LIMIT_PER_MIN: '1' });
  const direct = 'http://127.0.0.1:18767';
  expect((await request.get(`${direct}${path}`)).status()).not.toBe(429);
  const spoofed = await request.get(`${direct}${path}`, { headers: { 'X-Forwarded-For': '203.0.113.9' } });
  expect(spoofed.status()).toBe(429);

  await start(18768, { CLIENT_LIMIT_PER_MIN: '1', TRUST_PROXY: '1' });
  const proxied = 'http://127.0.0.1:18768';
  const via = xff => request.get(`${proxied}${path}`, { headers: { 'X-Forwarded-For': xff } });
  expect((await via('198.51.100.1, 10.0.0.1')).status()).not.toBe(429);
  expect((await via('198.51.100.1, 10.0.0.2')).status()).not.toBe(429);
  // Only the entry added by the trusted proxy counts; a forged entry to its left changes nothing.
  expect((await via('203.0.113.7, 10.0.0.1')).status()).toBe(429);
});
