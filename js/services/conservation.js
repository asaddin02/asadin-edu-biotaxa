// IUCN Red List categories explained in plain words.
import { pick } from '../core/prefs.js';

// iNaturalist stores IUCN categories as numbers.
const BY_NUMBER = { 0: 'NE', 5: 'DD', 10: 'LC', 20: 'NT', 30: 'VU', 40: 'EN', 50: 'CR', 60: 'EW', 70: 'EX' };
const BY_TEXT = {
  'not evaluated': 'NE',
  'data deficient': 'DD',
  'least concern': 'LC',
  'near threatened': 'NT',
  vulnerable: 'VU',
  endangered: 'EN',
  'critically endangered': 'CR',
  'extinct in the wild': 'EW',
  extinct: 'EX',
};

export const CATEGORIES = {
  EX: {
    tone: 'black',
    icon: '⚫',
    name: ['Punah', 'Extinct'],
    kid: ['Sudah tidak ada lagi di bumi.', 'No longer lives anywhere on Earth.'],
  },
  EW: {
    tone: 'black',
    icon: '⚫',
    name: ['Punah di alam liar', 'Extinct in the wild'],
    kid: ['Hanya tersisa di penangkaran atau kebun raya.', 'Survives only in captivity or cultivation.'],
  },
  CR: {
    tone: 'red',
    icon: '🔴',
    name: ['Kritis', 'Critically endangered'],
    kid: [
      'Sangat terancam punah. Perlu dijaga sekarang juga!',
      'At extremely high risk of extinction. It needs protection now!',
    ],
  },
  EN: {
    tone: 'orange',
    icon: '🟠',
    name: ['Genting', 'Endangered'],
    kid: [
      'Terancam punah. Jumlahnya terus berkurang.',
      'At very high risk of extinction. Its numbers are falling.',
    ],
  },
  VU: {
    tone: 'yellow',
    icon: '🟡',
    name: ['Rentan', 'Vulnerable'],
    kid: ['Berisiko terancam punah bila tidak dijaga.', 'At risk of becoming endangered without protection.'],
  },
  NT: {
    tone: 'lime',
    icon: '🟢',
    name: ['Hampir terancam', 'Near threatened'],
    kid: ['Belum terancam, tetapi mulai perlu diperhatikan.', 'Not threatened yet, but worth watching.'],
  },
  LC: {
    tone: 'green',
    icon: '🟢',
    name: ['Risiko rendah', 'Least concern'],
    kid: ['Masih banyak di alam saat ini.', 'Still common in the wild today.'],
  },
  DD: {
    tone: 'grey',
    icon: '⚪',
    name: ['Kurang data', 'Data deficient'],
    kid: ['Ilmuwan belum punya cukup data.', 'Scientists do not have enough data yet.'],
  },
  NE: {
    tone: 'grey',
    icon: '⚪',
    name: ['Belum dievaluasi', 'Not evaluated'],
    kid: ['Belum pernah dinilai.', 'Has not been assessed yet.'],
  },
};

export function iucnCode(status) {
  if (!status) return null;
  if (status.iucn != null && BY_NUMBER[status.iucn]) return BY_NUMBER[status.iucn];
  const raw = String(status.status || '').trim();
  if (CATEGORIES[raw.toUpperCase()]) return raw.toUpperCase();
  return BY_TEXT[String(status.status_name || raw).toLowerCase()] || null;
}

/** Returns a display object, or null when the status is not an IUCN category. */
export function describeStatus(status) {
  const code = iucnCode(status);
  if (!code) return null;
  const c = CATEGORIES[code];
  const place = status.place?.display_name || status.place?.name || '';
  return {
    code,
    tone: c.tone,
    icon: c.icon,
    name: pick(c.name),
    kid: pick(c.kid),
    authority: status.authority || 'IUCN Red List',
    place,
  };
}
