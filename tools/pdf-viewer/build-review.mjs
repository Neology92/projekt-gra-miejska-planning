// Generator podstrony /review/ dla recenzenta Piotra.
// Skanuje public/ (top-level), buduje widok flow przygody z etapami 0–7,
// grupami G1–G10, miniaturami PDF (pdf.js) i szarymi placeholderami dla
// brakujących plików.
//
// Uruchomienie: node tools/pdf-viewer/build-review.mjs
// Wynik: public/review/index.html + public/review/BRAKI.md
//
// Brak zależności npm — czysty Node.js.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GROUPS, ETAPY } from './review-flow.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'public');
const REVIEW_DIR = path.join(PUBLIC_DIR, 'review');

// 1. Skanuj public/ top-level (bez rekursji w podfolderach)
const existingFiles = new Set(
  fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })
    .filter(e => e.isFile())
    .map(e => e.name)
);

// 2. Rozwiń wzorce plików dla każdego etapu i grupy
function buildFilesPerGroup(etap) {
  const result = {};
  for (const [gid, g] of Object.entries(GROUPS)) {
    let filenames = [];
    if (etap.plikiWspolne) {
      filenames = etap.plikiWspolne;
    } else if (etap.plikiPerKolor) {
      filenames = etap.plikiPerKolor.map(p => p.replace('{kolor}', g.kolor));
    } else if (etap.plikiPerFrakcja) {
      filenames = (etap.plikiPerFrakcja[g.frakcja] || []).map(p => p.replace('{kolor}', g.kolor));
    } else if (etap.plikiPerGrupa) {
      filenames = etap.plikiPerGrupa[gid] || [];
    }
    if (!etap.plikiWspolne && !etap.plikiPerKolor && !etap.plikiPerFrakcja && !etap.plikiPerGrupa) {
      console.warn(`[build-review] buildFilesPerGroup: etap ${etap.id} — brak pola pliki*`);
    }
    result[gid] = filenames.map(fn => ({
      filename: fn,
      exists: existingFiles.has(fn),
      kind: /\.(mp3|wav|m4a)$/i.test(fn) ? 'audio' : 'pdf',
    }));
  }
  return result;
}

const etapyData = ETAPY.map(etap => ({
  ...etap,
  filesPerGroup: buildFilesPerGroup(etap),
}));

// 3. Generuj BRAKI.md
function buildBraki() {
  const today = new Date().toISOString().slice(0, 10);
  const lines = [
    `# BRAKI — pliki do wygenerowania (stan ${today})`,
    '',
    '> Ten plik jest generowany automatycznie przez `node tools/pdf-viewer/build-review.mjs`.',
    '> Zaktualizuj go po wygenerowaniu brakujących PDF-ów.',
    '',
  ];

  for (const etap of etapyData) {
    const missing = [];
    const seen = new Set();
    for (const [, files] of Object.entries(etap.filesPerGroup)) {
      for (const f of files) {
        if (!f.exists && !seen.has(f.filename)) {
          seen.add(f.filename);
          missing.push(f.filename);
        }
      }
    }
    if (missing.length === 0) continue;
    lines.push(`## Etap ${etap.nr} — ${etap.tytul}`);
    for (const fn of missing) lines.push(`- ${fn}`);
    lines.push('');
  }

  return lines.join('\n');
}

// 4. Osadzone dane JSON (bez filesPerGroup — to rekonstruujemy po stronie klienta z danych grup)
const htmlData = {
  groups: GROUPS,
  etapy: etapyData.map(e => ({
    id: e.id,
    nr: e.nr,
    tytul: e.tytul,
    typ: e.typ,
    opis: e.opis,
    doSprawdzenia: e.doSprawdzenia,
    doSprawdzeniaKZ: e.doSprawdzeniaKZ || null,
    hints: e.hints || null,
    filesPerGroup: e.filesPerGroup,
  })),
};

const dataJson = JSON.stringify(htmlData);

// 4b. Statyczna mapa notaPiotra per etap-id — wstrzykiwana do HTML jako stała,
//     NIE przez JSON → eliminuje ryzyko XSS z niezaufanego wejścia.
//     Źródłem jest review-flow.js (plik autorski w repo), nie dane zewnętrzne.
const NOTA_HTML_MAP = {};
for (const etap of ETAPY) {
  if (etap.notaPiotra) NOTA_HTML_MAP[etap.id] = etap.notaPiotra;
}
const notaHtmlMapJson = JSON.stringify(NOTA_HTML_MAP);

// 5. Intro HTML — zaufana stała (statyczna treść autorska, nie dane zewnętrzne)
const INTRO_HTML = `
<h2>O czym jest gra</h2>
<p><strong>Toruń, 3–8 lutego 1454.</strong> Karnawał. W tle: <em>Tajna Rada Związku Pruskiego</em> planuje bunt — 6 II 1454 mieszczanie toruńscy wyprą krzyżaków z zamku. Gracze wchodzą w to jako kurierzy, nie wiedząc po czyjej są stronie.</p>
<p><strong>Format:</strong> 10 grup × ~4 osoby. G1–G5 = Tajna Rada (TR, mieszczanie). G6–G10 = Krzyżacy. Podział niejawny na starcie — każdy myśli że jest po prostu kurierem.</p>
<p><strong>Finał:</strong> o 21:00 (dziewiąte bicie dzwonu) pod ruinami zamku — aktorska scenka: Bażyński (Piotr) vs Albrecht (Zosia). Grupy już wcześniej dostarczyły list wybranej stronie. Wynik = zliczenie listów.</p>
<p><strong>Wymowa moralna:</strong> TR wygrywają historycznie, ale gra ich pokazuje jako stronę „złą" — zwycięstwo buntu to świat zmieniający się na gorsze.</p>

<h2>Twoje role, Piotrze</h2>
<ul>
  <li><strong>Jordan, kucharz</strong> (Faza 2A, Piccolo): handler grupy TR; test zaufania; wręcza kopertę K3. Dla KZ: cel infiltracji — obserwują kolor szaty + chochlę.</li>
  <li><strong>Jan Bażyński / Hans von Baysen</strong> (Finał): ten sam aktor co Jordan — to <em>jest</em> plot twist dla TR. Ty grasz obie role; fakt, że to ta sama osoba, wzmacnia reveal fizycznie.</li>
</ul>
<p>Test wejścia do Jordana: gracz mówi imię „Jordan" + <em>„kupiłeś dziś rano miecz"</em> → wpuszcza ich. Kulej (foreshadow „kulawy bazyliszek").</p>

<h2>Jak czytać koperty</h2>
<ul>
  <li><em>Kursywa</em> = narracja z głów kurierów (2. os. „you") — immersja.</li>
  <li>Roman = słowa świata (dokumenty, cytaty NPC).</li>
  <li><strong>Ramka „↪ TO THE GAME MASTER"</strong> = meta-logistyka (gdzie iść po rozwiązaniu). To świadomie poza fikcją.</li>
</ul>

<h2>Świadome naginki historyczne (nie flaguj jako błędów)</h2>
<ul>
  <li><strong>Jordan = Bażyński</strong> — legenda XIX-wieczna + postać historyczna sklejone. Celowy plot twist.</li>
  <li><strong>Kalimba</strong> — instrument afrykański, anachronizm. Opis fabularny mówi „fujarka/psałterion". Rekwizyt fizyczny celowo zostawiony.</li>
  <li><strong>„Piccolo"</strong> — współczesna nazwa. Może być zastąpiona „U Jordana" / „Gospoda Pod Chochlą".</li>
  <li><strong>„Dziewiąte bicie" / dzwon</strong> — NIE „Tuba Dei" (dopiero 1500). OK mówić „dzwon ratuszowy".</li>
  <li><strong>Szyfr Cezara (Z7/Z11)</strong> — nie anachronizm; szyfry podstawieniowe były w XV w. w użyciu.</li>
</ul>

<h2>Jak zreviewować</h2>
<p>Wybierz grupę chipem (zacznij od G1=Czerwony = prototypowa ścieżka TR). Przejdź etapy 0–7. Per etap: PDF-y otwierają się w nowej karcie. Zaznacz checkbox po review etapu. Uwagi zapisuj osobno i prześlij Oskarowi.</p>
<p>⚠ KZ (G6–G10): wiele plików brakuje (szare kafle „do wygenerowania") — tor KZ jest częściowo szkieletem.</p>

<h2>🖨 Druk: kolor czy B&W?</h2>
<p>Per każdy materiał zaznacz w uwagach: <strong>kolor</strong> (wyraźnie zyska) / <strong>B&W</strong> (wystarczy) / <strong>nie wiem</strong>. Sugestia startowa — oceń czy się zgadzasz:</p>
<ul>
  <li><strong>List z pieczęcią (E0)</strong> — proponuję <em>kolor</em>: pieczęć lakowa + stylistyka manuskryptu, gracze noszą go przez całą grę.</li>
  <li><strong>Mapa Z1</strong> — glify monochromatyczne, ale kolor grupy na deszyfrownik-u ułatwia identyfikację.</li>
  <li><strong>Koperty / pergamin Z3</strong> — oceń czy ciepły ton grafiki wymaga koloru czy B&W działa równie dobrze.</li>
  <li><strong>Szyfrogram Z7 / tabele Z11</strong> — prawdopodobnie B&W, ale oceń kontrast typograficzny.</li>
</ul>
<p><em>Zasada kciuka:</em> jeśli gracz trzyma materiał w ręku dłużej niż ~10 sekund → rozważ kolor.</p>
`;

// 6. Generuj HTML
const html = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#1a1410">
<title>Toruń 1454 · Review</title>
<style>
  :root {
    --bg: #1a1410; --surface: #241c15; --surface-2: #2e2419;
    --border: #443422; --text: #f2e9da; --muted: #b8a888;
    --accent: #c8a24a; --accent-2: #8a3324; --radius: 14px;
    --tr-color: #c8a24a; --kz-color: #7ec8e3;
  }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body {
    margin: 0; background: var(--bg); color: var(--text);
    font: 16px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding-bottom: env(safe-area-inset-bottom);
  }
  /* topbar */
  .topbar {
    position: sticky; top: 0; z-index: 20;
    background: linear-gradient(180deg, #261d15, #1c150f); border-bottom: 1px solid var(--border);
  }
  .topbar-inner {
    display: flex; align-items: center; gap: 12px; padding: 12px 16px;
    max-width: 1100px; margin: 0 auto; flex-wrap: wrap;
  }
  .back-link {
    color: var(--muted); text-decoration: none; font-size: 14px;
    border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px;
    flex: none;
  }
  .back-link:hover { color: var(--accent); border-color: var(--accent); }
  .topbar h1 { margin: 0; font-size: 16px; font-weight: 700; flex: 1; min-width: 0; }
  .topbar h1 .yr { color: var(--accent); }
  .topbar .sub { color: var(--muted); font-size: 12px; }
  /* intro */
  details#intro {
    max-width: 1100px; margin: 18px auto 0; padding: 0 16px;
  }
  details#intro summary {
    cursor: pointer; font-weight: 700; font-size: 15px; color: var(--accent);
    padding: 10px 0; list-style: none; user-select: none;
  }
  details#intro summary::before { content: "▶ "; font-size: 12px; }
  details#intro[open] summary::before { content: "▼ "; }
  .intro-content {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 18px 20px; margin-top: 8px;
  }
  .intro-content h2 { margin: 16px 0 6px; font-size: 14px; text-transform: uppercase; letter-spacing: .5px; color: var(--accent); }
  .intro-content h2:first-child { margin-top: 0; }
  .intro-content p, .intro-content li { font-size: 14px; color: var(--muted); margin: 0 0 6px; }
  .intro-content ul { padding-left: 18px; margin: 0 0 8px; }
  .intro-content strong { color: var(--text); }
  .intro-content em { color: var(--text); font-style: italic; }
  /* color-groups — poziomy scroll z podgrupami kolorystycznymi */
  .color-groups-row {
    display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px;
    scrollbar-width: thin; scrollbar-color: var(--border) transparent;
  }
  .color-group { flex: none; min-width: 130px; max-width: 155px; }
  .color-group-hdr {
    display: flex; align-items: center; gap: 5px; margin-bottom: 7px;
    font-size: 11px; white-space: nowrap;
  }
  .cdot {
    width: 11px; height: 11px; border-radius: 50%; flex: none;
    border: 1px solid rgba(255,255,255,.22);
  }
  .cgid { font-weight: 700; color: var(--text); }
  .ckol { color: var(--muted); font-weight: 400; }
  /* etapy */
  main#etapy {
    max-width: 1100px; margin: 20px auto 60px; padding: 0 16px;
    display: flex; flex-direction: column; gap: 20px;
  }
  .etap {
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
    padding: 18px 20px;
  }
  .etap-head {
    display: flex; align-items: flex-start; gap: 14px; margin-bottom: 10px;
  }
  .etap-nr {
    flex: none; width: 38px; height: 38px; border-radius: 50%;
    background: var(--surface-2); border: 2px solid var(--border);
    display: grid; place-items: center; font-size: 16px; font-weight: 800; color: var(--accent);
  }
  .etap-meta { flex: 1; min-width: 0; }
  .etap-meta h2 { margin: 0 0 4px; font-size: 16px; font-weight: 700; }
  .check-label {
    flex: none; display: flex; align-items: center; gap: 6px;
    font-size: 13px; color: var(--muted); cursor: pointer; margin-top: 4px;
    white-space: nowrap;
  }
  .check-label input { cursor: pointer; accent-color: var(--accent); width: 16px; height: 16px; }
  .etap.done { border-color: #3a5c2a; background: color-mix(in srgb, #3a5c2a 12%, var(--surface)); }
  .etap.done .etap-nr { border-color: #5a9c3a; color: #8fcc5a; }
  .etap-opis { color: var(--muted); font-size: 14px; margin: 0 0 12px; }
  /* badges */
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .4px; padding: 2px 7px; border-radius: 6px; text-transform: uppercase; vertical-align: middle; }
  .badge-wspolny { background: #2a3a24; color: #8fcc5a; border: 1px solid #3a5c2a; }
  .badge-fork { background: #1e2a3a; color: #7ec8e3; border: 1px solid #2a4a5a; }
  .badge-fork-g { background: #3a2020; color: #e38080; border: 1px solid #5a3030; }
  /* sprawdzenia */
  .sprawdzenia {
    background: var(--surface-2); border: 1px solid var(--border); border-radius: 10px;
    padding: 10px 14px; margin-bottom: 14px;
  }
  .sprawdzenia summary {
    cursor: pointer; font-size: 13px; font-weight: 600; color: var(--muted); list-style: none;
    user-select: none;
  }
  .sprawdzenia summary::before { content: "▶ "; font-size: 10px; }
  .sprawdzenia[open] summary::before { content: "▼ "; }
  .sprawdzenia ul { margin: 8px 0 0; padding-left: 18px; }
  .sprawdzenia li { font-size: 13px; color: var(--muted); margin-bottom: 4px; }
  /* podpowiedzi „show a hint" (player-facing EN) */
  .hints-box {
    background: color-mix(in srgb, var(--accent) 9%, var(--surface-2));
    border: 1px solid color-mix(in srgb, var(--accent) 38%, var(--border));
    border-radius: 10px; padding: 12px 14px; margin-bottom: 14px;
  }
  .hints-title {
    font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .4px;
    color: var(--accent); margin-bottom: 10px;
  }
  .hint-group { margin-bottom: 12px; }
  .hint-group:last-child { margin-bottom: 0; }
  .hint-group-label {
    font-size: 12px; font-weight: 700; color: var(--text); margin-bottom: 6px;
  }
  .hint-tiers { display: flex; flex-direction: column; gap: 6px; margin-bottom: 8px; }
  .hint-tier {
    background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
    padding: 8px 11px; font-size: 13px; color: var(--text); line-height: 1.5;
  }
  .hint-cap {
    display: inline-block; font-size: 10px; font-weight: 800; letter-spacing: .5px;
    text-transform: uppercase; color: var(--accent); margin-right: 7px; vertical-align: 1px;
  }
  .hint-txt { color: var(--muted); }
  .hint-btn {
    appearance: none; cursor: pointer; font: inherit; font-size: 13px; font-weight: 600;
    color: var(--bg); background: var(--accent); border: none; border-radius: 8px;
    padding: 7px 14px; transition: filter .12s;
  }
  .hint-btn:hover { filter: brightness(1.08); }
  .hint-btn:disabled { cursor: default; background: var(--surface); color: var(--muted); border: 1px solid var(--border); }
  /* fork layout */
  .fork-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 700px) { .fork-wrap { grid-template-columns: 1fr; } }
  .fork-tr, .fork-kz {
    background: var(--surface-2); border: 1px solid var(--border); border-radius: 10px; padding: 12px 14px;
  }
  .fork-tr { border-color: #443322; }
  .fork-kz { border-color: #22334a; }
  .fork-label {
    font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px;
    margin-bottom: 10px;
  }
  .fork-tr .fork-label { color: var(--tr-color); }
  .fork-kz .fork-label { color: var(--kz-color); }
  /* pliki grid */
  .pliki-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
  .file-card {
    background: var(--surface-2); border: 1px solid var(--border); border-radius: 10px;
    overflow: hidden; display: flex; flex-direction: column; transition: border-color .12s;
  }
  .file-card:hover { border-color: var(--accent); }
  .file-card.missing { opacity: .65; }
  .thumb {
    aspect-ratio: 1 / 1.3; background: #1e1710; display: grid; place-items: center;
    position: relative; overflow: hidden; text-decoration: none;
  }
  .thumb canvas, .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .thumb .ph { color: var(--muted); font-size: 11px; text-align: center; padding: 8px; }
  .thumb .badge { position: absolute; top: 5px; left: 5px; }
  .missing-thumb {
    aspect-ratio: 1 / 1.3; background: #1a1a1a; display: grid; place-items: center;
  }
  .missing-thumb .ph { font-size: 24px; color: #444; }
  .card-meta { padding: 8px 10px 10px; }
  .card-meta .nm {
    font-size: 11px; font-weight: 600; line-height: 1.3; word-break: break-all;
    color: var(--text); text-decoration: none; display: block;
  }
  .card-meta a.nm:hover { color: var(--accent); }
  .card-meta .muted { color: var(--muted); }
  .missing-label { display: block; font-size: 10px; color: #666; margin-top: 2px; }
  /* audio card */
  .audio-card { flex-direction: row !important; align-items: center; padding: 10px 12px; gap: 10px; }
  .audio-card .card-meta { padding: 0; flex: 1; min-width: 0; }
  .audio-card .nm { font-size: 12px; margin-bottom: 4px; }
  .audio-card audio { width: 100%; max-width: 260px; }
  /* nota piotra */
  .nota-piotra {
    background: #1a2230; border: 1.5px solid #2a4a6a; border-radius: 10px;
    padding: 14px 18px; margin-bottom: 14px;
  }
  .nota-piotra h3 { font-size: 13px; color: #7ec8e3; font-weight: 700; margin: 0 0 10px; letter-spacing: .3px; }
  .nota-piotra p { font-size: 13px; color: var(--muted); margin: 0 0 8px; line-height: 1.55; }
  .nota-piotra p:last-child { margin-bottom: 0; }
  .nota-piotra strong { color: var(--text); }
  .nota-piotra em { color: #c8d8e8; font-style: italic; }
  .nota-piotra ul { padding-left: 18px; margin: 6px 0 8px; }
  .nota-piotra li { font-size: 13px; color: var(--muted); margin-bottom: 4px; }
  .nota-piotra .warn-inline { color: #e38080; font-weight: 700; }
  /* etap vuoto */
  .etap-empty { color: #555; font-size: 13px; padding: 8px 0; }
  footer {
    color: var(--muted); font-size: 12px; text-align: center;
    padding: 26px 14px; border-top: 1px solid var(--border); margin-top: 10px;
  }
  footer code { color: var(--accent); }
</style>
</head>
<body>

<div class="topbar">
  <div class="topbar-inner">
    <a href="../" class="back-link">← Galeria</a>
    <div>
      <h1>Toruń <span class="yr">1454</span> · Review</h1>
      <div class="sub">Przygoda dla Piotra — wszystkie ścieżki rozłożone</div>
    </div>
  </div>
</div>

<details id="intro" open>
  <summary>Wprowadzenie dla Piotra</summary>
  <div class="intro-content">${INTRO_HTML}</div>
</details>

<main id="etapy">
  <!-- generowane przez JS -->
</main>

<footer>
  Auto-generowane przez <code>build-review.mjs</code><br>
  Podstrona review — nie linkuj graczom.
</footer>

<script type="module">
const DATA = ${dataJson};
// Trusted static HTML per etap-id — wstrzyknięte z pliku autorskiego build-time,
// nie z JSON/inputu użytkownika. Używaj tylko innerHTML z tej mapy.
const NOTA_HTML = ${notaHtmlMapJson};

function esc(s){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

const BADGE_HTML = {
  'wspolny':            '<span class="badge badge-wspolny">WSPÓLNY</span>',
  'wspolny-warianty':   '<span class="badge badge-wspolny">WSPÓLNY · warianty per kolor</span>',
  'fork-frakcja':       '<span class="badge badge-fork">FORK · TR / KZ</span>',
  'fork-frakcja-grupa': '<span class="badge badge-fork-g">FORK · per grupa</span>',
};

const TR_GROUPS = ['G1','G2','G3','G4','G5'];
const KZ_GROUPS = ['G6','G7','G8','G9','G10'];

// --- PDF thumbnails ---
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
    el.innerHTML = '<span class="badge badge-wspolny" style="font-size:9px;padding:1px 5px;position:absolute;top:5px;left:5px">PDF</span>';
    el.appendChild(canvas);
    page.cleanup();
  } catch (e) { /* placeholder zostaje */ }
  finally { if (doc) { try { await doc.destroy(); } catch(e){} } }
}
const pdfPending = [];
let pumping = false;
async function pump() {
  if (pumping) return; pumping = true;
  while (pdfPending.length) {
    const el = pdfPending.shift();
    if (el.isConnected) await renderThumb(el);
  }
  pumping = false;
}
const io = new IntersectionObserver((entries) => {
  for (const en of entries) {
    if (en.isIntersecting) { io.unobserve(en.target); pdfPending.push(en.target); pump(); }
  }
}, { rootMargin: '200px' });

// --- Build file card ---
function makeFileCard(f) {
  const card = document.createElement('div');
  if (f.kind === 'audio') {
    card.className = 'file-card audio-card';
    const meta = document.createElement('div'); meta.className = 'card-meta';
    const nm = document.createElement('span'); nm.className = 'nm'; nm.textContent = f.filename.replace(/\.[^.]+$/, '');
    const audio = document.createElement('audio'); audio.controls = true; audio.preload = 'none'; audio.src = '../' + f.filename;
    meta.appendChild(nm); meta.appendChild(audio);
    card.appendChild(meta);
    return card;
  }
  if (!f.exists) {
    card.className = 'file-card missing';
    const mt = document.createElement('div'); mt.className = 'missing-thumb';
    mt.innerHTML = '<span class="ph">&#9744;</span>';
    const meta = document.createElement('div'); meta.className = 'card-meta';
    const nm = document.createElement('span'); nm.className = 'nm muted'; nm.textContent = f.filename;
    const lbl = document.createElement('span'); lbl.className = 'missing-label'; lbl.textContent = 'do wygenerowania';
    meta.appendChild(nm); meta.appendChild(lbl);
    card.appendChild(mt); card.appendChild(meta);
    return card;
  }
  // existing PDF
  card.className = 'file-card';
  const thumb = document.createElement('a');
  thumb.className = 'thumb'; thumb.href = '../' + f.filename; thumb.target = '_blank'; thumb.rel = 'noopener';
  thumb.innerHTML = '<span class="badge badge-wspolny" style="font-size:9px;padding:1px 5px;position:absolute;top:5px;left:5px">PDF</span><span class="ph">PDF</span>';
  thumb.dataset.pdf = '../' + f.filename;
  io.observe(thumb);
  const meta = document.createElement('div'); meta.className = 'card-meta';
  const nm = document.createElement('a'); nm.className = 'nm'; nm.href = '../' + f.filename; nm.target = '_blank'; nm.rel = 'noopener';
  nm.textContent = f.filename.replace(/\.[^.]+$/, '');
  meta.appendChild(nm);
  card.appendChild(thumb); card.appendChild(meta);
  return card;
}

// --- Podpowiedzi „show a hint" (player-facing) ---
// Progresywne odsłanianie: pierwszy klik = Hint 1, kolejne = następne poziomy.
// Tekst tylko przez textContent (bez innerHTML) → bezpieczne wobec danych z JSON.
function makeHintGroup(grp) {
  const wrap = document.createElement('div'); wrap.className = 'hint-group';
  if (grp.label) {
    const lbl = document.createElement('div'); lbl.className = 'hint-group-label'; lbl.textContent = grp.label;
    wrap.appendChild(lbl);
  }
  const revealed = document.createElement('div'); revealed.className = 'hint-tiers';
  wrap.appendChild(revealed);
  const tiers = grp.tiers || [];
  let shown = 0;
  const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'hint-btn';
  function refresh() {
    if (shown >= tiers.length) { btn.textContent = tiers.length ? 'No more hints' : 'No hints'; btn.disabled = true; }
    else btn.textContent = shown === 0 ? 'Show a hint' : ('Show next hint (' + (shown + 1) + '/' + tiers.length + ')');
  }
  btn.addEventListener('click', () => {
    if (shown >= tiers.length) return;
    const t = document.createElement('div'); t.className = 'hint-tier';
    const cap = document.createElement('span'); cap.className = 'hint-cap'; cap.textContent = 'Hint ' + (shown + 1);
    const txt = document.createElement('span'); txt.className = 'hint-txt'; txt.textContent = tiers[shown];
    t.appendChild(cap); t.appendChild(txt); revealed.appendChild(t);
    shown++; refresh();
  });
  refresh();
  wrap.appendChild(btn);
  return wrap;
}

function makeHintsBox(hints) {
  const box = document.createElement('div'); box.className = 'hints-box';
  const title = document.createElement('div'); title.className = 'hints-title';
  title.textContent = 'Podpowiedzi dla graczy (EN)';
  box.appendChild(title);
  for (const grp of hints) box.appendChild(makeHintGroup(grp));
  return box;
}

function makePlikGrid(files) {
  if (!files || files.length === 0) {
    const d = document.createElement('p'); d.className = 'etap-empty'; d.textContent = '— brak plików dla tego etapu —';
    return d;
  }
  const grid = document.createElement('div'); grid.className = 'pliki-grid';
  for (const f of files) grid.appendChild(makeFileCard(f));
  return grid;
}

// --- Render etapy ---
function renderEtapy() {
  const main = document.getElementById('etapy');
  main.innerHTML = '';

  for (const etap of DATA.etapy) {
    const done = localStorage.getItem('review-etap-' + etap.id) === '1';
    const section = document.createElement('section');
    section.className = 'etap' + (done ? ' done' : '');
    section.id = 'etap-' + etap.id;

    // Head
    const head = document.createElement('div'); head.className = 'etap-head';
    const nr = document.createElement('span'); nr.className = 'etap-nr'; nr.textContent = etap.nr;
    const meta = document.createElement('div'); meta.className = 'etap-meta';
    meta.innerHTML = '<h2>' + esc(etap.tytul) + '</h2>' + (BADGE_HTML[etap.typ] || '');
    const checkLbl = document.createElement('label'); checkLbl.className = 'check-label';
    const chk = document.createElement('input'); chk.type = 'checkbox'; chk.className = 'etap-check';
    chk.dataset.etap = etap.id; chk.checked = done;
    chk.addEventListener('change', () => {
      localStorage.setItem('review-etap-' + etap.id, chk.checked ? '1' : '0');
      section.classList.toggle('done', chk.checked);
    });
    checkLbl.appendChild(chk);
    checkLbl.appendChild(document.createTextNode(' zreviewowane'));
    head.appendChild(nr); head.appendChild(meta); head.appendChild(checkLbl);
    section.appendChild(head);

    // Opis
    const opis = document.createElement('p'); opis.className = 'etap-opis'; opis.textContent = etap.opis;
    section.appendChild(opis);

    // Nota Piotra — trusted static HTML z NOTA_HTML (wstrzyknięte build-time z repo, nie JSON input)
    if (NOTA_HTML[etap.id]) {
      const nota = document.createElement('div'); nota.className = 'nota-piotra';
      nota.innerHTML = NOTA_HTML[etap.id];
      section.appendChild(nota);
    }

    // Do sprawdzenia
    const checks = etap.doSprawdzenia || [];
    // If fork-frakcja, show both TR and KZ sprawdzenia
    const checksKZ = etap.doSprawdzeniaKZ || null;
    const allChecks = checksKZ ? checks.concat(['— KZ —', ...checksKZ]) : checks;
    if (allChecks.length > 0) {
      const det = document.createElement('details'); det.className = 'sprawdzenia';
      const sum = document.createElement('summary'); sum.textContent = 'Do sprawdzenia (' + (checks.length + (checksKZ ? checksKZ.length : 0)) + ')';
      det.appendChild(sum);
      const ul = document.createElement('ul');
      for (const item of allChecks) {
        const li = document.createElement('li'); li.textContent = item; ul.appendChild(li);
      }
      det.appendChild(ul);
      section.appendChild(det);
    }

    // Podpowiedzi „show a hint" — tylko etapy-zagadki je mają (E1–E5)
    if (Array.isArray(etap.hints) && etap.hints.length > 0) {
      section.appendChild(makeHintsBox(etap.hints));
    }

    // Pliki — zawsze pokazuj wszystkie warianty kolorystyczne
    if (etap.typ === 'fork-frakcja' || etap.typ === 'fork-frakcja-grupa') {
      const wrap = document.createElement('div'); wrap.className = 'fork-wrap';
      const trDiv = document.createElement('div'); trDiv.className = 'fork-tr';
      const trLbl = document.createElement('div'); trLbl.className = 'fork-label'; trLbl.textContent = 'Tor TR — mieszczanie (G1–G5)';
      trDiv.appendChild(trLbl);
      trDiv.appendChild(makeColorGroupsRow(TR_GROUPS, etap));
      const kzDiv = document.createElement('div'); kzDiv.className = 'fork-kz';
      const kzLbl = document.createElement('div'); kzLbl.className = 'fork-label'; kzLbl.textContent = 'Tor KZ — krzyżacy (G6–G10)';
      kzDiv.appendChild(kzLbl);
      kzDiv.appendChild(makeColorGroupsRow(KZ_GROUPS, etap));
      wrap.appendChild(trDiv); wrap.appendChild(kzDiv);
      section.appendChild(wrap);
    } else if (etap.typ === 'wspolny-warianty') {
      // Wszystkie 10 kolorów obok siebie
      section.appendChild(makeColorGroupsRow([...TR_GROUPS, ...KZ_GROUPS], etap));
    } else {
      // wspolny — pliki identyczne dla wszystkich; G1 jako reprezentatywny
      section.appendChild(makePlikGrid(etap.filesPerGroup['G1'] || []));
    }

    main.appendChild(section);
  }
}

// Poziomy rząd podgrup kolorystycznych (każda = nagłówek z kropką + stos kart)
function makeColorGroupsRow(groupIds, etap) {
  const row = document.createElement('div');
  row.className = 'color-groups-row';
  for (const gid of groupIds) {
    const g = DATA.groups[gid];
    const col = document.createElement('div');
    col.className = 'color-group';
    const hdr = document.createElement('div');
    hdr.className = 'color-group-hdr';
    hdr.innerHTML =
      '<span class="cdot" style="background:' + esc(g.hex) + '"></span>' +
      '<span class="cgid">' + esc(gid) + '</span>' +
      '<span class="ckol">' + esc(g.kolor) + '</span>';
    col.appendChild(hdr);
    const files = etap.filesPerGroup[gid] || [];
    for (const f of files) col.appendChild(makeFileCard(f));
    if (files.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'etap-empty';
      empty.textContent = '—';
      col.appendChild(empty);
    }
    row.appendChild(col);
  }
  return row;
}

renderEtapy();
</script>
</body>
</html>
`;

// 8. Zapis plików
if (!fs.existsSync(REVIEW_DIR)) fs.mkdirSync(REVIEW_DIR, { recursive: true });

fs.writeFileSync(path.join(REVIEW_DIR, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(REVIEW_DIR, 'BRAKI.md'), buildBraki(), 'utf8');

// 9. Raport
const missing = [];
for (const etap of etapyData) {
  const seen = new Set();
  for (const [, files] of Object.entries(etap.filesPerGroup)) {
    for (const f of files) {
      if (!f.exists && !seen.has(f.filename)) {
        seen.add(f.filename);
        missing.push({ etap: etap.id, filename: f.filename });
      }
    }
  }
}
const existCount = etapyData.flatMap(e =>
  Object.values(e.filesPerGroup).flat()
).filter((f, i, a) => f.exists && a.findIndex(x => x.filename === f.filename) === i).length;

console.log(`[build-review] public/review/index.html — OK`);
console.log(`[build-review] public/review/BRAKI.md — ${missing.length} brakujących plików`);
console.log(`[build-review] ${existCount} istniejących plików (unikalne)`);
if (missing.length > 0) {
  console.log(`\nBrakujące pliki (${missing.length}):`);
  for (const m of missing) console.log(`  [${m.etap}] ${m.filename}`);
}
