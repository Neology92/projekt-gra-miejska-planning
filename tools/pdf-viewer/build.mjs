// Generator statycznej galerii PDF/obrazów dla `public/`.
// Skanuje public/ rekursywnie, kategoryzuje pliki i generuje samowystarczalny
// public/index.html (mobilny viewer z miniaturami pdf.js renderowanymi leniwie).
//
// Uruchamiany lokalnie przed `netlify deploy` ORAZ jako build command na Netlify
// (patrz netlify.toml). Brak zależności npm — czysty Node.
//
// Konwencja kategoryzacji wynika z nazw plików:
//   mg-* / */mg-tylko/* / *klucz* / *sprawdzenie*  -> sekcja MG (spoilery)
//   decoder-*                                       -> deszyfrowniki G1-G10
//   maps/ , map*                                    -> mapy
//   z11-*                                           -> tabele Z11 (finał KZ)
//   *.mp3 / *.wav                                   -> audio
//   prototyp-druk/gracz/*                           -> prototyp (druk gracza)
//   wspolne-*                                       -> start (wszyscy)
//   miasto-*                                        -> koperty (tor miasta)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'public');

const VIEWABLE = new Set(['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.mp3', '.wav', '.m4a']);
const SKIP_NAMES = new Set(['index.html', 'files.json']);

// --- definicje sekcji (kolejność = kolejność na stronie) -------------------
const SECTIONS = [
  { id: 'start',     label: 'Start — wszyscy',          hint: 'Wspólny punkt wyjścia (Z1).',                  spoiler: false },
  { id: 'koperty',   label: 'Koperty — tor miasta',     hint: 'Główny ciąg kopert i rekwizytów gracza.',      spoiler: false },
  { id: 'decoders',  label: 'Deszyfrowniki G1–G10',     hint: 'Karta deszyfrująca per grupa.',                spoiler: false },
  { id: 'maps',      label: 'Mapy',                     hint: 'Mapa terenu gry.',                             spoiler: false },
  { id: 'z11',       label: 'Z11 — tabele (finał KZ)',  hint: 'Tabela symboli + tabula recta.',               spoiler: false },
  { id: 'prototyp',  label: 'Prototyp do druku — gracz', hint: 'Zestaw druków testowej ścieżki.',             spoiler: false },
  { id: 'audio',     label: 'Audio',                    hint: 'Ścieżki dźwiękowe.',                           spoiler: false },
  { id: 'inne',      label: 'Inne',                     hint: 'Pozostałe pliki.',                             spoiler: false },
  { id: 'mg',        label: '🔒 MG / spoilery',          hint: 'Klucze odpowiedzi i materiały tylko dla Mistrza Gry. NIE pokazuj graczom.', spoiler: true },
];

function categorize(rel) {
  const lower = rel.toLowerCase().replace(/\\/g, '/');
  const base = path.basename(lower);
  if (base.startsWith('mg-') || lower.includes('/mg-tylko/') || base.includes('klucz') || base.includes('sprawdzenie')) return 'mg';
  if (lower.includes('decoder')) return 'decoders';
  if (lower.startsWith('maps/') || base.startsWith('map.') || base.startsWith('map-')) return 'maps';
  if (base.startsWith('z11')) return 'z11';
  if (/\.(mp3|wav|m4a)$/.test(lower)) return 'audio';
  if (lower.includes('prototyp-druk/gracz/')) return 'prototyp';
  if (base.startsWith('wspolne')) return 'start';
  if (base.startsWith('miasto')) return 'koperty';
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
    out.push({
      path: rel.replace(/\\/g, '/'),
      name: humanize(rel),
      cat: categorize(rel),
      kind: kind(ext),
      size: stat.size,
    });
  }
  return out;
}

const files = walk(PUBLIC_DIR).sort((a, b) => a.path.localeCompare(b.path, 'pl'));
const grouped = SECTIONS
  .map((s) => ({ ...s, items: files.filter((f) => f.cat === s.id) }))
  .filter((s) => s.items.length > 0);

const total = files.length;
const manifestJson = JSON.stringify(grouped);

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
  header {
    padding: 22px 18px 14px; border-bottom: 1px solid var(--border);
    background: linear-gradient(180deg, #241c15, #1a1410);
    position: sticky; top: 0; z-index: 5;
  }
  header h1 { margin: 0; font-size: 19px; letter-spacing: .3px; font-weight: 700; }
  header h1 .yr { color: var(--accent); }
  header p { margin: 4px 0 0; color: var(--muted); font-size: 13px; }
  main { padding: 8px 14px 48px; max-width: 1100px; margin: 0 auto; }
  section { margin-top: 26px; }
  .sec-head { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .sec-head h2 { margin: 0; font-size: 16px; font-weight: 700; }
  .sec-head .count { color: var(--muted); font-size: 12px; }
  .sec-hint { margin: 3px 0 12px; color: var(--muted); font-size: 13px; }
  .spoiler .sec-head h2 { color: var(--accent-2); }
  .spoiler { border: 1px solid var(--accent-2); border-radius: var(--radius); padding: 12px 14px 4px; background: rgba(138,51,36,.07); }
  .spoiler-toggle {
    cursor: pointer; user-select: none; color: var(--accent); font-size: 13px;
    background: var(--surface-2); border: 1px solid var(--border); border-radius: 999px;
    padding: 4px 12px; display: inline-block;
  }
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
  .meta .nm { font-size: 13px; font-weight: 600; line-height: 1.3; word-break: break-word; }
  .meta .sz { color: var(--muted); font-size: 11px; margin-top: 3px; }
  .audio-card { padding: 12px; }
  .audio-card .nm { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
  .audio-card audio { width: 100%; }
  footer { color: var(--muted); font-size: 12px; text-align: center; padding: 26px 14px; border-top: 1px solid var(--border); margin-top: 30px; }
  footer code { color: var(--accent); }
</style>
</head>
<body>
<header>
  <h1>Gra miejska — Toruń <span class="yr">1454</span></h1>
  <p>${total} materiałów · dotknij kafelek, by otworzyć PDF</p>
</header>
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

for (const sec of DATA) {
  const section = document.createElement('section');
  if (sec.spoiler) section.className = 'spoiler';
  const head = document.createElement('div');
  head.className = 'sec-head';
  head.innerHTML = '<h2>'+esc(sec.label)+'</h2><span class="count">'+sec.items.length+'</span>';
  section.appendChild(head);
  const hint = document.createElement('p');
  hint.className = 'sec-hint';
  hint.textContent = sec.hint;
  section.appendChild(hint);

  const grid = document.createElement('div');
  grid.className = 'grid';
  for (const f of sec.items) grid.appendChild(makeCard(f));

  if (sec.spoiler) {
    const toggle = document.createElement('span');
    toggle.className = 'spoiler-toggle';
    toggle.textContent = 'Pokaż materiały MG ('+sec.items.length+')';
    grid.style.display = 'none';
    toggle.onclick = () => { const open = grid.style.display === 'none'; grid.style.display = open ? 'grid' : 'none'; toggle.textContent = (open?'Ukryj':'Pokaż')+' materiały MG ('+sec.items.length+')'; };
    section.appendChild(toggle);
  }
  section.appendChild(grid);
  app.appendChild(section);
}

function makeCard(f) {
  if (f.kind === 'audio') {
    const div = document.createElement('div');
    div.className = 'card audio-card';
    div.innerHTML = '<div class="nm">'+esc(f.name)+'</div>';
    const a = document.createElement('audio'); a.controls = true; a.preload = 'none'; a.src = f.path;
    div.appendChild(a);
    return div;
  }
  const a = document.createElement('a');
  a.className = 'card'; a.href = f.path; a.target = '_blank'; a.rel = 'noopener';
  const thumb = document.createElement('div'); thumb.className = 'thumb';
  if (f.kind === 'image') {
    const img = document.createElement('img'); img.loading = 'lazy'; img.src = f.path; img.alt = f.name;
    thumb.appendChild(img);
  } else {
    thumb.innerHTML = '<span class="badge">PDF</span><span class="ph">PDF</span>';
    thumb.dataset.pdf = f.path; pdfQueue.push(thumb);
  }
  a.appendChild(thumb);
  const meta = document.createElement('div'); meta.className = 'meta';
  meta.innerHTML = '<div class="nm">'+esc(f.name)+'</div><div class="sz">'+fmtSize(f.size)+'</div>';
  a.appendChild(meta);
  return a;
}

// --- leniwe renderowanie miniatur PDF (1. strona) przez IntersectionObserver
const pdfQueue = [];
let pdfjs = null;
async function loadPdfjs() {
  if (pdfjs) return pdfjs;
  const v = '4.7.76';
  pdfjs = await import('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/'+v+'/pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/'+v+'/pdf.worker.min.mjs';
  return pdfjs;
}
async function renderThumb(el) {
  try {
    const lib = await loadPdfjs();
    const doc = await lib.getDocument(el.dataset.pdf).promise;
    const page = await doc.getPage(1);
    const scale = 0.6, vp = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = vp.width * ratio; canvas.height = vp.height * ratio;
    const ctx = canvas.getContext('2d'); ctx.scale(ratio, ratio);
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
    el.innerHTML = '<span class="badge">PDF</span>';
    el.appendChild(canvas);
    doc.destroy();
  } catch (e) { /* placeholder zostaje */ }
}
const io = new IntersectionObserver((entries) => {
  for (const en of entries) {
    if (en.isIntersecting) { io.unobserve(en.target); renderThumb(en.target); }
  }
}, { rootMargin: '300px' });
requestAnimationFrame(() => pdfQueue.forEach((el) => io.observe(el)));
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'index.html'), html, 'utf8');
console.log(`[pdf-viewer] index.html: ${total} plików, ${grouped.length} sekcji`);
for (const g of grouped) console.log(`  - ${g.label}: ${g.items.length}`);
