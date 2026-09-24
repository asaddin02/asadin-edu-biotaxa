// localStorage can be unavailable (private mode, blocked site data). Every access is guarded.
export function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return fallback;
    return JSON.parse(raw) ?? fallback;
  } catch {
    return fallback;
  }
}

export function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    /* nothing to remove */
  }
}

export const KEYS = {
  lang: 'biotaxa-language',
  level: 'biotaxa-level',
  role: 'biotaxa-role',
  collection: 'biotaxa-collection',
  notes: 'biotaxa-notes',
  progress: 'biotaxa-progress',
  experiments: 'biotaxa-experiments',
  scope: 'biotaxa-scope',
  labState: 'biotaxa-lab-state',
};
