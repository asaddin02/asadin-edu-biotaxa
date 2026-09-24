export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ESCAPES[c]);

export function safeURL(value) {
  // new URL() resolves a missing or blank value against the page itself (…/undefined), so reject it first.
  if (value == null || !String(value).trim()) return '';
  try {
    const u = new URL(value, location.href);
    return ['https:', 'http:'].includes(u.protocol) ? u.href : '';
  } catch {
    return '';
  }
}

/** Strip markup from API text without executing it. */
export function plain(value) {
  const doc = new DOMParser().parseFromString(String(value || ''), 'text/html');
  return (doc.body.textContent || '').replace(/\s+\n/g, '\n').trim();
}

export function link(url, label, { cls = '', external = true } = {}) {
  const href = safeURL(url);
  if (!href) return esc(label);
  const target = external ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a${cls ? ` class="${cls}"` : ''} href="${esc(href)}"${target}>${esc(label)}${external ? ' <span aria-hidden="true">↗</span>' : ''}</a>`;
}

export function debounce(fn, ms = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

let toastTimer;
export function toast(message, { tone = 'info' } = {}) {
  const node = $('#toast');
  if (!node) return;
  node.textContent = message;
  node.dataset.tone = tone;
  node.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => node.classList.remove('show'), 3800);
}

export function download(filename, content, type = 'text/plain') {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = Object.assign(document.createElement('textarea'), { value: text });
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.append(area);
    area.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      /* copying is not supported here */
    }
    area.remove();
    return ok;
  }
}

/** Deterministic pseudo-random generator so that daily content is stable for everyone. */
export function seeded(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return (s >>> 0) / 4294967296;
  };
}

export function shuffle(list, random = Math.random) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const dayNumber = (date = new Date()) =>
  Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(2020, 0, 1)) / 864e5);

/** Encode JSON as URL-safe base64 (UTF-8 aware). */
export function encodeData(value) {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = '';
  bytes.forEach(b => (binary += String.fromCharCode(b)));
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
export function decodeData(text) {
  try {
    const base = String(text).replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(base + '==='.slice((base.length + 3) % 4));
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
}
