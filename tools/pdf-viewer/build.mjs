// Generator statycznej galerii PDF/obrazów dla `public/`.
// Skanuje public/ rekursywnie, kategoryzuje pliki i generuje samowystarczalny
// public/index.html (mobilny viewer z miniaturami pdf.js renderowanymi leniwie).
//
// Uruchamiany lokalnie przed `netlify deploy` ORAZ jako build command na Netlify
// (patrz netlify.toml). Brak zależności npm — czysty Node.
//
// Konwencja kategoryzacji = PREFIKS-ADRESAT + token typu w nazwie (envelopes/README.md §Systematyka nazw):
//   archive/*                                  -> archiwum (zamrożone, pomijane w ZIP)
//   mg-* / *klucz* / *sprawdzenie*             -> MG (spoilery)
//   aktor-*                                    -> aktorzy (spoilery)
//   *-deszyfrownik*                            -> deszyfrowniki (per grupa)
//   *z11* / *-tabela-*                         -> tabele Z11 (finał KZ)
//   *mapa* / map*                              -> mapy
//   *.mp3 / *.wav                              -> audio
//   wspolne-*                                  -> start (wszyscy, Z1)
//   miasto-*                                   -> koperty tor miasta (TR)
//   krzyzacy-*                                 -> koperty tor krzyżacki (KZ)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'public');

const VIEWABLE = new Set(['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.mp3', '.wav', '.m4a']);
const SKIP_NAMES = new Set(['index.html', 'files.json']);

// --- definicje sekcji (kolejność = kolejność na stronie) -------------------
const SECTIONS = [
  { id: 'start',     label: 'Start — wszyscy',             hint: 'Wspólny punkt wyjścia (Z1) — brief, mapa, deszyfrownik per grupa.', spoiler: false },
  { id: 'koperty',   label: 'Koperty — tor miasta (TR)',   hint: 'Ciąg kopert i rekwizytów Tajnej Rady (G1–G5).', spoiler: false },
  { id: 'krzyzacy',  label: 'Koperty — tor krzyżacki (KZ)', hint: 'Ciąg kopert i rekwizytów Zakonu (G6–G10).',     spoiler: false },
  { id: 'decoders',  label: 'Deszyfrowniki',               hint: 'Karta deszyfrująca Z1 per grupa.',              spoiler: false },
  { id: 'maps',      label: 'Mapy',                        hint: 'Mapa terenu gry (per grupa do druku).',         spoiler: false },
  { id: 'z11',       label: 'Z11 — tabele (finał KZ)',     hint: 'Tabela symboli + tabula recta, per grupa.',     spoiler: false },
  { id: 'audio',     label: 'Audio',                       hint: 'Ścieżki dźwiękowe.',                            spoiler: false },
  { id: 'inne',      label: 'Inne',                        hint: 'Pozostałe pliki.',                              spoiler: false },
  { id: 'archive',   label: '🗄 Archiwum',                  hint: 'Stare/zarchiwizowane wersje. Pomijane w paczkach ZIP („Pobierz wszystko" / „Do druku").', spoiler: false },
  { id: 'aktorzy',   label: '🔒 Aktorzy (Jordan / Albrecht)', hint: 'Ściągawki dla aktorów. Spoilery — nie pokazuj graczom.', spoiler: true },
  { id: 'mg',        label: '🔒 MG / spoilery',             hint: 'Klucze odpowiedzi i materiały tylko dla Mistrza Gry. NIE pokazuj graczom.', spoiler: true },
];

function categorize(rel) {
  const lower = rel.toLowerCase().replace(/\\/g, '/');
  const base = path.basename(lower);
  // archive/ ma pierwszeństwo — stare pliki nie mogą wyciekać do innych sekcji
  if (lower.startsWith('archive/')) return 'archive';
  // adresaci-spoilery (prefiks nazwy)
  if (base.startsWith('aktor-')) return 'aktorzy';
  if (base.startsWith('mg-') || lower.includes('/mg-tylko/') || base.includes('klucz') || base.includes('sprawdzenie')) return 'mg';
  // typ (token w nazwie) — przed prefiksem frakcji, bo z11/mapa/deszyfrownik mają prefiks gracza
  if (base.includes('deszyfrownik')) return 'decoders';
  if (base.includes('z11') || base.includes('-tabela-')) return 'z11';
  if (base.includes('mapa') || base.startsWith('map.') || base.startsWith('map-')) return 'maps';
  if (/\.(mp3|wav|m4a)$/.test(lower)) return 'audio';
  // frakcja gracza (prefiks)
  if (base.startsWith('wspolne')) return 'start';
  if (base.startsWith('miasto')) return 'koperty';
  if (base.startsWith('krzyzacy')) return 'krzyzacy';
  return 'inne';
}

// Ludzka etykieta z nazwy pliku (bez rozszerzenia, podkreślenia/myślniki -> spacje).
function humanize(rel) {
  const base = path.basename(rel).replace(/\.[^.]+$/, '');
  return base.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function kind(ext) {
  if (ext === '.pdf') return 'pdf';
  if (['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'].includes(ext)) return 'image';
  if (['.mp3', '.wav', '.m4a'].includes(ext)) return 'audio';
  return 'file';
}

function walk(dir, base = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) { out.push(...walk(path.join(dir, entry.name), rel)); continue; }
    if (SKIP_NAMES.has(entry.name)) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (!VIEWABLE.has(ext)) continue;
    const stat = fs.statSync(path.join(dir, entry.name));
    const relPath = rel.replace(/\\/g, '/');
    out.push({
      path: relPath,
      name: humanize(rel),
      cat: categorize(rel),
      kind: kind(ext),
      size: stat.size,
      archived: relPath.toLowerCase().startsWith('archive/'),
    });
  }
  return out;
}

const files = walk(PUBLIC_DIR).sort((a, b) => a.path.localeCompare(b.path, 'pl'));
const grouped = SECTIONS
  .map((s) => ({ ...s, items: files.filter((f) => f.cat === s.id) }))
  .filter((s) => s.items.length > 0);

const total = files.length;
const hasAudio = files.some((f) => f.kind === 'audio');
const manifestJson = JSON.stringify(grouped);
const audioChip = hasAudio ? '<button class="chip" data-type="audio">Audio</button>' : '';

const html = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#1a1410">
<title>Gra miejska — Toruń 1454 · materiały</title>
<style>
  :root {
    --bg: #1a1410; --surface: #241c15; --surface-2: #2e2419;
    --border: #443422; --text: #f2e9da; --muted: #b8a888;
    --accent: #c8a24a; --accent-2: #8a3324; --radius: 14px;
  }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0; background: var(--bg); color: var(--text);
    font: 16px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  /* topbar */
  .topbar {
    position: sticky; top: 0; z-index: 20;
    background: linear-gradient(180deg, #261d15, #1c150f); border-bottom: 1px solid var(--border);
  }
  .topbar-row { display: flex; align-items: center; gap: 12px; padding: 11px 14px 9px; max-width: 1100px; margin: 0 auto; }
  .menu-btn {
    flex: none; width: 44px; height: 44px; border-radius: 11px; cursor: pointer;
    background: var(--surface-2); border: 1px solid var(--border); color: var(--text);
    font-size: 20px; line-height: 1; display: grid; place-items: center;
  }
  .menu-btn:active { transform: scale(.93); }
  .topbar h1 { margin: 0; font-size: 16px; font-weight: 700; line-height: 1.15; }
  .topbar h1 .yr { color: var(--accent); }
  .topbar .sub { color: var(--muted); font-size: 12px; margin-top: 1px; }
  .search-row { padding: 0 14px 9px; max-width: 1100px; margin: 0 auto; }
  .search {
    width: 100%; font-size: 16px; padding: 11px 14px; border-radius: 11px;
    background: var(--surface); border: 1px solid var(--border); color: var(--text);
    -webkit-appearance: none;
  }
  .search::placeholder { color: var(--muted); }
  .search:focus { outline: none; border-color: var(--accent); }
  /* toolbar: przełącznik widoku + filtr typu */
  .toolbar { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; padding: 0 14px 11px; max-width: 1100px; margin: 0 auto; }
  .seg { display: inline-flex; background: var(--surface); border: 1px solid var(--border); border-radius: 999px; padding: 3px; }
  .seg-btn {
    border: 0; background: transparent; color: var(--muted); cursor: pointer;
    font-size: 13px; font-weight: 600; padding: 7px 14px; border-radius: 999px; line-height: 1;
  }
  .seg-btn.active { background: var(--accent); color: #1a1410; }
  .chips { display: inline-flex; gap: 6px; flex-wrap: wrap; }
  .chip {
    border: 1px solid var(--border); background: var(--surface); color: var(--muted); cursor: pointer;
    font-size: 13px; padding: 7px 12px; border-radius: 999px; line-height: 1;
  }
  .chip.active { border-color: var(--accent); color: var(--accent); background: var(--surface-2); }
  /* pasek pobierania (nie sticky) */
  .dlbar {
    max-width: 1100px; margin: 0 auto; padding: 14px;
    display: flex; gap: 10px; flex-wrap: wrap; align-items: center;
  }
  .dl-btn {
    border: 1px solid var(--accent); background: var(--surface-2); color: var(--accent); cursor: pointer;
    font-size: 14px; font-weight: 600; padding: 11px 16px; border-radius: 11px; line-height: 1;
  }
  .dl-btn:active { transform: scale(.97); }
  .dl-btn:disabled { opacity: .55; cursor: default; }
  .dl-status { color: var(--muted); font-size: 12px; flex: 1 1 100%; min-height: 16px; word-break: break-word; }
  /* drawer */
  .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,.55); opacity: 0; pointer-events: none; transition: opacity .2s; z-index: 30; }
  .backdrop.open { opacity: 1; pointer-events: auto; }
  .drawer {
    position: fixed; top: 0; left: 0; bottom: 0; width: min(80vw, 320px); z-index: 31;
    background: var(--surface); border-right: 1px solid var(--border);
    transform: translateX(-100%); transition: transform .22s ease; overflow-y: auto;
    padding: max(18px, env(safe-area-inset-top)) 0 24px;
  }
  .drawer.open { transform: none; }
  .drawer h2 { margin: 4px 18px 10px; font-size: 12px; letter-spacing: .6px; text-transform: uppercase; color: var(--muted); }
  .drawer a {
    display: flex; justify-content: space-between; gap: 10px; align-items: center;
    padding: 13px 18px; color: var(--text); text-decoration: none; font-size: 15px;
    border-left: 3px solid transparent;
  }
  .drawer a:active { background: var(--surface-2); border-left-color: var(--accent); }
  .drawer a .c { color: var(--muted); font-size: 13px; }
  .drawer a.spoiler-link { color: var(--accent-2); }
  main { padding: 8px 14px 48px; max-width: 1100px; margin: 0 auto; }
  section { margin-top: 26px; scroll-margin-top: 176px; }
  .hidden { display: none !important; }
  .empty { color: var(--muted); text-align: center; padding: 48px 14px; font-size: 14px; }
  .sec-head { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .sec-head h2 { margin: 0; font-size: 16px; font-weight: 700; }
  .sec-head .count { color: var(--muted); font-size: 12px; }
  .sec-hint { margin: 3px 0 12px; color: var(--muted); font-size: 13px; }
  .spoiler .sec-head h2 { color: var(--accent-2); }
  .spoiler { border: 1px solid var(--accent-2); border-radius: var(--radius); padding: 12px 14px 4px; background: rgba(138,51,36,.07); }
  .spoiler-toggle {
    cursor: pointer; user-select: none; color: var(--accent); font-size: 13px;
    background: var(--surface-2); border: 1px solid var(--border); border-radius: 999px;
    padding: 6px 14px; display: inline-block; margin-bottom: 12px;
  }
  .spoiler.collapsed .grid { display: none; }
  /* przy aktywnym szukaniu pokaż dopasowania także w zwiniętej sekcji MG */
  body.searching .spoiler.collapsed .grid { display: grid; }
  body.searching .spoiler-toggle { display: none; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }
  .card {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    overflow: hidden; text-decoration: none; color: inherit; display: flex; flex-direction: column;
    transition: transform .12s ease, border-color .12s ease;
  }
  .card:active { transform: scale(.97); }
  .card:hover { border-color: var(--accent); }
  .thumb {
    aspect-ratio: 1 / 1.3; background: var(--surface-2); display: grid; place-items: center;
    position: relative; overflow: hidden;
  }
  .thumb img, .thumb canvas { width: 100%; height: 100%; object-fit: cover; display: block; }
  .thumb .ph { color: var(--muted); font-size: 12px; text-align: center; padding: 8px; }
  .thumb .badge {
    position: absolute; top: 6px; left: 6px; font-size: 10px; font-weight: 700; letter-spacing: .5px;
    background: rgba(0,0,0,.55); color: var(--accent); padding: 2px 7px; border-radius: 6px; text-transform: uppercase;
  }
  .meta { padding: 9px 11px 11px; }
  .meta .nm { font-size: 13px; font-weight: 600; line-height: 1.3; word-break: break-word; color: inherit; text-decoration: none; }
  a.nm:hover { color: var(--accent); }
  .meta .sz { color: var(--muted); font-size: 11px; margin-top: 3px; }
  .dl {
    display: inline-grid; place-items: center; width: 34px; height: 34px; flex: none;
    border: 1px solid var(--border); border-radius: 9px; background: var(--surface-2);
    color: var(--accent); text-decoration: none; font-size: 16px; line-height: 1;
  }
  .dl:active { transform: scale(.92); }
  .audio-card { padding: 12px; }
  .audio-card .nm { font-size: 14px; font-weight: 600; margin-bottom: 8px; display: block; }
  .audio-card audio { width: 100%; }
  /* --- tryb LISTY (bez podglądów): kafelki → kompaktowe wiersze --- */
  body.mode-list .grid { grid-template-columns: 1fr; gap: 8px; }
  body.mode-list .thumb { display: none; }
  body.mode-list .card { flex-direction: row; align-items: center; }
  body.mode-list .meta { flex: 1; display: flex; align-items: center; gap: 12px; padding: 11px 12px; min-width: 0; }
  body.mode-list .meta .nm { flex: 1; min-width: 0; font-size: 14px; }
  body.mode-list .meta .sz { margin-top: 0; flex: none; }
  body.mode-list .audio-card { flex-direction: row; }
  body.mode-list .audio-card audio { width: auto; max-width: 240px; flex: 1; }
  footer { color: var(--muted); font-size: 12px; text-align: center; padding: 26px 14px; border-top: 1px solid var(--border); margin-top: 30px; }
  footer code { color: var(--accent); }
</style>
</head>
<body>
<div class="backdrop" id="backdrop"></div>
<nav class="drawer" id="drawer" aria-label="Sekcje">
  <h2>Sekcje</h2>
  <div id="drawer-links"></div>
</nav>
<div class="topbar">
  <div class="topbar-row">
    <button class="menu-btn" id="menu-btn" aria-label="Otwórz menu sekcji" aria-controls="drawer">☰</button>
    <div>
      <h1>Toruń <span class="yr">1454</span> · materiały</h1>
      <div class="sub">${total} plików</div>
    </div>
  </div>
  <div class="search-row">
    <input class="search" id="search" type="search" inputmode="search" autocomplete="off" placeholder="Szukaj pliku…" aria-label="Szukaj pliku">
  </div>
  <div class="toolbar">
    <div class="seg" role="group" aria-label="Widok">
      <button class="seg-btn active" data-mode="gallery">Galeria</button>
      <button class="seg-btn" data-mode="list">Lista</button>
    </div>
    <div class="chips" id="type-chips" role="group" aria-label="Filtr typu">
      <button class="chip active" data-type="all">Wszystko</button>
      <button class="chip" data-type="pdf">PDF</button>
      <button class="chip" data-type="image">Grafiki</button>
      ${audioChip}
    </div>
  </div>
</div>
<div class="dlbar">
  <button class="dl-btn" id="dl-all">⬇ Pobierz wszystko (ZIP)</button>
  <button class="dl-btn" id="dl-print">⬇ Do druku — PDF (ZIP)</button>
  <span class="dl-status" id="dl-status">Paczki ZIP pomijają sekcję Archiwum (stare wersje).</span>
</div>
<main id="app"></main>
<footer>
  Auto-generowane z <code>public/</code> · podgląd mobilny<br>
  Aby udostępnić graczom — najpierw usuń sekcję „MG / spoilery".
</footer>

<script type="module">
const DATA = ${manifestJson};

function fmtSize(b){ if(b<1024)return b+' B'; if(b<1048576)return (b/1024).toFixed(0)+' KB'; return (b/1048576).toFixed(1)+' MB'; }
function esc(s){ return s.replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

const app = document.getElementById('app');
const drawerLinks = document.getElementById('drawer-links');
const pdfQueue = [];   // miniatury PDF do leniwego, sekwencyjnego renderu
const sections = [];   // rejestr sekcji do nawigacji i wyszukiwania

for (const sec of DATA) {
  const section = document.createElement('section');
  section.id = 'sec-' + sec.id;
  section.className = sec.spoiler ? 'spoiler collapsed' : '';

  const head = document.createElement('div');
  head.className = 'sec-head';
  head.innerHTML = '<h2>'+esc(sec.label)+'</h2><span class="count">'+sec.items.length+'</span>';
  section.appendChild(head);

  const hint = document.createElement('p');
  hint.className = 'sec-hint';
  hint.textContent = sec.hint;
  section.appendChild(hint);

  if (sec.spoiler) {
    const toggle = document.createElement('span');
    toggle.className = 'spoiler-toggle';
    const label = () => (section.classList.contains('collapsed') ? 'Pokaż' : 'Ukryj') + ' materiały MG (' + sec.items.length + ')';
    toggle.textContent = label();
    toggle.onclick = () => { section.classList.toggle('collapsed'); toggle.textContent = label(); };
    section.appendChild(toggle);
  }

  const grid = document.createElement('div');
  grid.className = 'grid';
  const cards = [];
  for (const f of sec.items) {
    const card = makeCard(f);
    cards.push({ el: card, hay: (f.name + ' ' + f.path).toLowerCase(), kind: f.kind });
    grid.appendChild(card);
  }
  section.appendChild(grid);
  app.appendChild(section);
  sections.push({ el: section, cards });

  const link = document.createElement('a');
  link.href = '#sec-' + sec.id;
  if (sec.spoiler) link.className = 'spoiler-link';
  link.innerHTML = '<span>'+esc(sec.label)+'</span><span class="c">'+sec.items.length+'</span>';
  link.addEventListener('click', closeDrawer);
  drawerLinks.appendChild(link);
}

const emptyMsg = document.createElement('div');
emptyMsg.className = 'empty hidden';
emptyMsg.textContent = 'Brak plików pasujących do wyszukiwania.';
app.appendChild(emptyMsg);

// --- hamburger / drawer ---
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('backdrop');
function openDrawer() { drawer.classList.add('open'); backdrop.classList.add('open'); }
function closeDrawer() { drawer.classList.remove('open'); backdrop.classList.remove('open'); }
document.getElementById('menu-btn').addEventListener('click', openDrawer);
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });

// --- filtrowanie (szukanie po nazwie/ścieżce + filtr typu), ukrywa puste sekcje ---
const search = document.getElementById('search');
let typeFilter = 'all';   // 'all' | 'pdf' | 'image' | 'audio'
function applyFilter() {
  const q = search.value.trim().toLowerCase();
  document.body.classList.toggle('searching', q.length > 0);
  let anyVisible = false;
  for (const s of sections) {
    let visible = 0;
    for (const c of s.cards) {
      const matchQ = !q || c.hay.includes(q);
      const matchT = typeFilter === 'all' || c.kind === typeFilter;
      const show = matchQ && matchT;
      c.el.classList.toggle('hidden', !show);
      if (show) visible++;
    }
    s.el.classList.toggle('hidden', visible === 0);
    if (visible > 0) anyVisible = true;
  }
  emptyMsg.classList.toggle('hidden', anyVisible);
}
search.addEventListener('input', applyFilter);

// --- przełącznik widoku Galeria / Lista (czysty CSS przez klasę body) ---
for (const btn of document.querySelectorAll('.seg-btn')) {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.seg-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    document.body.classList.toggle('mode-list', btn.dataset.mode === 'list');
  });
}

// --- filtr typu (chipy) ---
for (const chip of document.querySelectorAll('#type-chips .chip')) {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#type-chips .chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    typeFilter = chip.dataset.type;
    applyFilter();
  });
}

// link pobierania (atrybut download — same-origin wymusza pobranie mimo nagłówka inline)
function dlLink(f) {
  const dl = document.createElement('a');
  dl.className = 'dl'; dl.href = f.path; dl.download = f.path.split('/').pop();
  dl.title = 'Pobierz'; dl.setAttribute('aria-label', 'Pobierz ' + f.name); dl.textContent = '⬇';
  return dl;
}

function makeCard(f) {
  if (f.kind === 'audio') {
    const div = document.createElement('div');
    div.className = 'card audio-card'; div.dataset.kind = 'audio';
    div.innerHTML = '<div class="nm">'+esc(f.name)+'</div>';
    const a = document.createElement('audio'); a.controls = true; a.preload = 'none'; a.src = f.path;
    div.appendChild(a);
    div.appendChild(dlLink(f));
    return div;
  }
  const card = document.createElement('div');
  card.className = 'card'; card.dataset.kind = f.kind;
  // miniatura = link-podgląd (otwiera w nowej karcie)
  const thumb = document.createElement('a');
  thumb.className = 'thumb'; thumb.href = f.path; thumb.target = '_blank'; thumb.rel = 'noopener';
  if (f.kind === 'image') {
    const img = document.createElement('img'); img.loading = 'lazy'; img.src = f.path; img.alt = f.name;
    thumb.appendChild(img);
  } else {
    thumb.innerHTML = '<span class="badge">PDF</span><span class="ph">PDF</span>';
    thumb.dataset.pdf = f.path; pdfQueue.push(thumb);
  }
  card.appendChild(thumb);
  const meta = document.createElement('div'); meta.className = 'meta';
  const nm = document.createElement('a');
  nm.className = 'nm'; nm.href = f.path; nm.target = '_blank'; nm.rel = 'noopener'; nm.textContent = f.name;
  const sz = document.createElement('div'); sz.className = 'sz'; sz.textContent = fmtSize(f.size);
  meta.appendChild(nm); meta.appendChild(sz); meta.appendChild(dlLink(f));
  card.appendChild(meta);
  return card;
}

// --- pobieranie ZIP (JSZip ładowany leniwie z CDN, pakowanie po stronie klienta) ---
// "Pobierz wszystko" = cały public/ bez archive/. "Do druku" = wszystkie PDF-y bez archive/.
// compression STORE: PDF/PNG są już skompresowane -> pakowanie bez CPU; fetch sekwencyjny,
// pojedynczy błąd pliku nie przerywa całej paczki (tolerancja per-plik).
const ALL_ITEMS = [];
for (const sec of DATA) for (const it of sec.items) ALL_ITEMS.push(it);
const ZIP_ALL = ALL_ITEMS.filter((f) => !f.archived);
const ZIP_PRINT = ALL_ITEMS.filter((f) => !f.archived && f.kind === 'pdf');

const dlStatus = document.getElementById('dl-status');
let jszipPromise = null;
function loadJSZip() {
  if (jszipPromise) return jszipPromise;
  jszipPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    s.onload = () => resolve(window.JSZip);
    s.onerror = () => reject(new Error('Nie udało się wczytać JSZip (sprawdź internet)'));
    document.head.appendChild(s);
  });
  return jszipPromise;
}
async function buildZip(items, zipName, btn) {
  if (!items.length) { dlStatus.textContent = 'Brak plików do spakowania.'; return; }
  const buttons = document.querySelectorAll('.dl-btn');
  buttons.forEach((b) => { b.disabled = true; });
  let ok = 0, fail = 0;
  try {
    const JSZip = await loadJSZip();
    const zip = new JSZip();
    for (let i = 0; i < items.length; i++) {
      const f = items[i];
      dlStatus.textContent = 'Pobieranie ' + (i + 1) + '/' + items.length + '… ' + f.path;
      try {
        const resp = await fetch(f.path);
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        zip.file(f.path, await resp.arrayBuffer());
        ok++;
      } catch (e) { fail++; }
    }
    dlStatus.textContent = 'Tworzenie pliku ZIP…';
    const blob = await zip.generateAsync({ type: 'blob', compression: 'STORE' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = zipName; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    dlStatus.textContent = 'Gotowe: ' + zipName + ' — ' + ok + ' plików' + (fail ? (', ' + fail + ' pominięto (błąd)') : '') + '.';
  } catch (e) {
    dlStatus.textContent = 'Błąd: ' + e.message;
  } finally {
    buttons.forEach((b) => { b.disabled = false; });
  }
}
document.getElementById('dl-all').addEventListener('click', (e) => buildZip(ZIP_ALL, 'torun-1454-wszystko.zip', e.currentTarget));
document.getElementById('dl-print').addEventListener('click', (e) => buildZip(ZIP_PRINT, 'torun-1454-do-druku.zip', e.currentTarget));

// --- leniwe, BOUNDED i SEKWENCYJNE renderowanie miniatur PDF (1. strona) ---
// Wcześniej ~38 dużych canvasów + równoległe ładowanie całych PDF-ów przepełniało
// pamięć na telefonie -> przeglądarka ubijała i przeładowywała kartę. Teraz:
//  * miniatura ograniczona do THUMB_W px (małe canvasy),
//  * jednowątkowa kolejka -> naraz w pamięci tylko jeden dokument, zwalniany po renderze.
const THUMB_W = 220;
let pdfjs = null;
async function loadPdfjs() {
  if (pdfjs) return pdfjs;
  const v = '4.7.76';
  pdfjs = await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/'+v+'/pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/'+v+'/pdf.worker.min.mjs';
  return pdfjs;
}
async function renderThumb(el) {
  let doc = null;
  try {
    const lib = await loadPdfjs();
    doc = await lib.getDocument({ url: el.dataset.pdf, disableAutoFetch: true }).promise;
    const page = await doc.getPage(1);
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    const scale = (THUMB_W / page.getViewport({ scale: 1 }).width) * ratio;
    const vp = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(vp.width); canvas.height = Math.round(vp.height);
    const ctx = canvas.getContext('2d', { alpha: false });
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
    el.innerHTML = '<span class="badge">PDF</span>';
    el.appendChild(canvas);
    page.cleanup();
  } catch (e) { /* placeholder zostaje */ }
  finally { if (doc) { try { await doc.destroy(); } catch (e) {} } }
}
// jednowątkowa kolejka — naraz w pamięci tylko jeden dokument PDF
const pending = [];
let pumping = false;
async function pump() {
  if (pumping) return; pumping = true;
  while (pending.length) {
    const el = pending.shift();
    if (el.isConnected) await renderThumb(el);
  }
  pumping = false;
}
const io = new IntersectionObserver((entries) => {
  for (const en of entries) {
    if (en.isIntersecting) { io.unobserve(en.target); pending.push(en.target); pump(); }
  }
}, { rootMargin: '150px' });
requestAnimationFrame(() => pdfQueue.forEach((el) => io.observe(el)));
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'index.html'), html, 'utf8');
console.log(`[pdf-viewer] index.html: ${total} plików, ${grouped.length} sekcji`);
for (const g of grouped) console.log(`  - ${g.label}: ${g.items.length}`);
