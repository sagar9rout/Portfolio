// ─────────────────────────────────────────────────────────────
// LAB DATA (kept for the future /labs archive — the homepage now shows the Field Notes panel).
// Add new labs by appending to the array.
// Only add challenges you have actually completed.
// ─────────────────────────────────────────────────────────────
export const GITHUB_URL = 'https://github.com/sagar9rout';

// Destination of the Security Field Notes panel on the homepage.
export const FIELD_NOTES_URL = 'https://github.com/sagar9rout/ronin-security-field-notes';

// Where "VIEW ALL LABS" points. Change to a labs repo / future /labs page later.
export const LABS_ARCHIVE_URL = GITHUB_URL;

// How many labs appear on the homepage. Everything else stays in the archive.
export const SHOWCASE_LIMIT = 6;

// featured: false  -> kept in the data but hidden from the homepage showcase
export const handsOnLabs = [
  { platform: 'picoCTF', name: 'Binary Digits',       category: 'Forensics', difficulty: 'Easy', event: 'picoCTF 2026',              featured: true },
  { platform: 'picoCTF', name: 'Riddle Registry',     category: 'Forensics', difficulty: 'Easy', event: 'picoMini by CMU-Africa',    featured: true },
  { platform: 'picoCTF', name: 'Hidden in plainsight', category: 'Forensics', difficulty: 'Easy', event: 'picoMini by CMU-Africa',    featured: true },
];

// Larger practice tracks (not individual challenges)
export const practiceTracks = [
  { platform: 'TryHackMe', name: 'Advent of Cyber 2025', detail: '24 cybersecurity challenges' },
];