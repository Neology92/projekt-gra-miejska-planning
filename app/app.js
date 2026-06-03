/* ============================================================================
   app.js — silnik gry hybrydowej (POC: Z1 symbol-sequence + Z2 checkpoint).
   - Routing ŚCIEŻKOWY (History API): każdy etap = /zN, odświeżalny (Netlify
     _redirects + SW serwują index.html dla każdej ścieżki).
   - KODY DOSTĘPU per etap: wejście + recovery (apka padła / wyczyszczony storage
     / inne urządzenie → wpisz kod etapu i wracasz dokładnie tam).
   - Stan w localStorage → odporność na odświeżenie.
   - Bramka PREV Z1 = wybór 4 symboli (detali) w kolejności; apka waliduje,
     odsłania kod następnego etapu i przenosi dalej (bez udziału MG).
   ============================================================================ */

const LS_KEY = 'torun1454-v1';
const ROOT = document.getElementById('app');

/* ---------- stan ---------- */
function load() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
}
function save(patch) {
  const s = load();
  const next = {
    unlocked: Object.assign({}, s.unlocked, patch.unlocked),
    solved: Object.assign({}, s.solved, patch.solved),
  };
  try { localStorage.setItem(LS_KEY, JSON.stringify(next)); } catch (e) {}
  return next;
}
function isUnlocked(id) { return !!(load().unlocked || {})[id]; }
function isSolved(id) { return !!(load().solved || {})[id]; }
function unlock(id) { return save({ unlocked: { [id]: true } }); }
function markSolved(id) { return save({ solved: { [id]: true } }); }

/* ---------- kody ---------- */
const norm = (s) => (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
/** zwraca id etapu pasującego do wpisanego kodu, albo null (recovery z dowolnego etapu) */
function stepForCode(input) {
  const n = norm(input);
  if (!n) return null;
  return STEP_ORDER.find((id) => norm(STEPS[id].code) === n) || null;
}

/* ---------- routing (HASH) ----------
   Hash-based: każdy etap = #/zN. Serwer zawsze oddaje „/" (prawdziwy index.html),
   więc ODŚWIEŻENIE/deep-link/bookmark działa bez żadnego rewrite po stronie
   Netlify (path-routing wymagał SPA-fallbacku, który na tym deployu nie działał). */
function pathToId() {
  const seg = (location.hash || '').replace(/^#\/?/, '').replace(/\/+$/, '').toLowerCase();
  return STEPS[seg] ? seg : '';   // '' = landing
}
function navigate(path) {
  const target = '#' + path;       // path np. '/z1' lub '/'
  if (location.hash === target) render();   // ten sam hash nie odpali hashchange
  else location.hash = target;              // zmiana hash → hashchange → render
}
window.addEventListener('hashchange', render);

/* ---------- render główny ---------- */
function render() {
  const id = pathToId();
  ROOT.innerHTML = '';

  if (!id) return renderLanding();
  if (!isUnlocked(id)) return renderGate(id);
  return renderStep(STEPS[id]);
}

/* ---------- landing / brama startowa ---------- */
function furthestUnlocked() {
  let last = null;
  for (const id of STEP_ORDER) if (isUnlocked(id)) last = id;
  return last;
}

function renderLanding() {
  const resumeId = furthestUnlocked();
  const el = section('gate');
  el.innerHTML = `
    <div class="crest">⚜</div>
    <h1>Toruń, 1454</h1>
    <p class="muted">A sealed errand. Enter the code the Game Master gave you to begin.</p>
    <input id="code" class="code-input" type="text" inputmode="text"
           autocomplete="off" autocapitalize="characters" placeholder="ACCESS CODE">
    <button id="go" class="btn">Begin</button>
    <p id="fb" class="feedback"></p>
    ${resumeId ? `<button id="resume" class="btn ghost">Resume — ${STEPS[resumeId].label}</button>` : ''}
    <p class="demo-note">DEMO — GM code: <b>START-1454</b>. Each stage also has its own code, shown when you clear the previous one (use it to jump back if the app closes).</p>
  `;
  ROOT.appendChild(el);
  wireGate();
  if (resumeId) document.getElementById('resume').onclick = () => navigate('/' + resumeId);
}

/* ---------- brama recovery danego etapu ---------- */
function renderGate(id) {
  const step = STEPS[id];
  const el = section('gate');
  el.innerHTML = `
    <div class="crest">🔒</div>
    <h1>${step.label} — locked</h1>
    <p class="muted">Enter this stage’s access code to continue. ${id === 'z1' ? 'It is the code the Game Master gave you at the start.' : 'You wrote it down when you cleared the previous stage.'}</p>
    <input id="code" class="code-input" type="text" inputmode="text"
           autocomplete="off" autocapitalize="characters" placeholder="ACCESS CODE">
    <button id="go" class="btn">Unlock</button>
    <p id="fb" class="feedback"></p>
    <button id="home" class="btn ghost">Start over</button>
  `;
  ROOT.appendChild(el);
  wireGate(id);
  document.getElementById('home').onclick = () => navigate('/');
}

function wireGate(expectId) {
  const input = document.getElementById('code');
  const fb = document.getElementById('fb');
  const submit = () => {
    const matched = stepForCode(input.value);
    if (matched) {
      unlock(matched);
      navigate('/' + matched);
    } else {
      fb.textContent = 'That code opens nothing here. Ask the Game Master.';
      fb.className = 'feedback err';
    }
  };
  document.getElementById('go').onclick = submit;
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  input.focus();
}

/* ---------- render etapu ---------- */
function renderStep(step) {
  const el = section('step');

  // nagłówek
  const tag = document.createElement('span'); tag.className = 'stage-tag'; tag.textContent = step.label;
  const h = document.createElement('h2'); h.className = 'stage-title'; h.textContent = step.title;
  el.append(tag, h);

  // ramka rekwizytu (spec §C)
  el.appendChild(propFrame(step.prop));

  // narracja briefu
  el.appendChild(briefBody(step.brief));

  // bramka / terminal
  if (step.puzzle && step.puzzle.type === 'symbol-sequence' && !isSolved(step.id)) {
    el.appendChild(symbolPuzzle(step));
  } else if (step.puzzle && isSolved(step.id)) {
    el.appendChild(clearedPanel(step));
  } else if (step.terminal) {
    el.appendChild(terminalPanel(step));
  }

  ROOT.appendChild(el);
}

function propFrame(prop) {
  const d = document.createElement('div');
  d.className = 'prop-frame';
  d.innerHTML = `
    <span class="ph">Prop at this stage</span>
    <ul>
      <li><strong>What:</strong> ${prop.what}</li>
      <li><strong>From:</strong> ${prop.from}</li>
      <li><strong>Where:</strong> ${prop.where}</li>
    </ul>
    <p class="narration small">Don’t have it? Flag the Game Master before you go on.</p>`;
  return d;
}

function briefBody(blocks) {
  const wrap = document.createElement('div');
  blocks.forEach((b) => {
    if (b.reg === 'rule') { const hr = document.createElement('hr'); hr.className = 'rule'; wrap.appendChild(hr); return; }
    if (b.reg === 'list') {
      const ol = document.createElement('ol'); ol.className = 'brief-list';
      b.items.forEach((t) => { const li = document.createElement('li'); li.innerHTML = t; ol.appendChild(li); });
      wrap.appendChild(ol); return;
    }
    const p = document.createElement('p');
    p.className = { narration: 'narration', msg: 'msg', head: 'head', dateline: 'dateline' }[b.reg] || 'msg';
    p.innerHTML = b.html;
    wrap.appendChild(p);
  });
  return wrap;
}

/* ---------- zagadka: wybór symboli w kolejności ---------- */
function symbolPuzzle(step) {
  const { data, prompt } = step.puzzle;
  const wrap = document.createElement('div');
  wrap.className = 'solve';
  wrap.innerHTML = `<hr class="rule"><h3>Report your chain</h3><p class="msg">${prompt}</p>`;

  // pasek wybranej sekwencji
  const seq = document.createElement('div'); seq.className = 'seq'; seq.id = 'seq';
  wrap.appendChild(seq);

  // siatka 9 ikon
  const grid = document.createElement('div'); grid.className = 'grid';
  data.display.forEach((code) => {
    const tile = document.createElement('button');
    tile.className = 'tile'; tile.type = 'button'; tile.dataset.code = code;
    tile.innerHTML = `<img src="/icons/${data.icons[code]}" alt="trail symbol" draggable="false">
                      <span class="badge"></span>`;
    grid.appendChild(tile);
  });
  wrap.appendChild(grid);

  const actions = document.createElement('div'); actions.className = 'actions';
  actions.innerHTML = `<button id="confirm" class="btn" disabled>Confirm the chain</button>
                       <button id="clear" class="btn ghost">Clear</button>`;
  wrap.appendChild(actions);

  const fb = document.createElement('p'); fb.className = 'feedback'; fb.id = 'pfb';
  wrap.appendChild(fb);

  wrap.insertAdjacentHTML('beforeend',
    `<p class="demo-note">Faithful to the printed G1 cipher card (same 9 symbols). Canonical chain: piernik · gęś · szafa · wieża. Decoder source: tools/z1-decoder.</p>`);

  // stan wyboru
  let picked = [];
  const max = data.chain.length;

  function paint() {
    grid.querySelectorAll('.tile').forEach((t) => {
      const i = picked.indexOf(t.dataset.code);
      t.classList.toggle('on', i >= 0);
      t.querySelector('.badge').textContent = i >= 0 ? (i + 1) : '';
    });
    seq.innerHTML = picked.length
      ? picked.map((c, i) => `<span class="chip"><img src="/icons/${data.icons[c]}" alt=""><i>${i + 1}</i></span>`).join('')
      : '<span class="muted small">No symbols picked yet — tap them below in order.</span>';
    document.getElementById('confirm').disabled = picked.length !== max;
    fb.textContent = ''; fb.className = 'feedback';
  }

  grid.addEventListener('click', (e) => {
    const tile = e.target.closest('.tile'); if (!tile) return;
    const code = tile.dataset.code;
    const at = picked.indexOf(code);
    if (at >= 0) picked.splice(at, 1);          // odznacz
    else if (picked.length < max) picked.push(code);
    paint();
  });
  document.getElementById('clear').onclick = () => { picked = []; paint(); };
  document.getElementById('confirm').onclick = () => {
    const ok = picked.length === max && picked.every((c, i) => c === data.chain[i]);
    if (ok) {
      markSolved(step.id);
      if (step.next) unlock(step.next);
      renderSuccess(step);
    } else {
      fb.textContent = 'One of these marks is wrong, or out of order. Walk it back.';
      fb.className = 'feedback err';
    }
  };

  paint();
  return wrap;
}

/* ---------- sukces etapu: odsłona kodu następnego + przejście ---------- */
function renderSuccess(step) {
  const next = step.next ? STEPS[step.next] : null;
  const el = section('done');
  el.innerHTML = `
    <div class="seal">✔</div>
    <h2>The chain holds</h2>
    <p class="narration">You named your four marks in order. Your contact awaits.</p>
    ${next ? `
      <p class="msg">Next stage unlocked. <strong>Write this code down:</strong></p>
      <div class="nextcode">${next.code}</div>
      <p class="muted small">If the app closes or you refresh, reopen and enter this code to jump straight to ${next.label}.</p>
      <button id="continue" class="btn">Continue to ${next.label} →</button>
    ` : ''}
  `;
  ROOT.innerHTML = '';
  ROOT.appendChild(el);
  if (next) document.getElementById('continue').onclick = () => navigate('/' + step.next);
}

/* ---------- panel etapu już rozwiązanego (po powrocie na /z1) ---------- */
function clearedPanel(step) {
  const next = step.next ? STEPS[step.next] : null;
  const d = section('done');
  d.innerHTML = `
    <hr class="rule">
    <div class="seal small">✔</div>
    <p class="msg">You already cleared this stage.</p>
    ${next ? `<div class="nextcode">${next.code}</div>
      <button id="continue" class="btn">Continue to ${next.label} →</button>` : ''}`;
  if (next) setTimeout(() => { const b = d.querySelector('#continue'); if (b) b.onclick = () => navigate('/' + step.next); }, 0);
  return d;
}

/* ---------- panel terminalny (granica POC) ---------- */
function terminalPanel(step) {
  const d = document.createElement('div');
  d.className = 'done';
  d.innerHTML = `
    <hr class="rule">
    <p class="msg">This is the boundary of the proof-of-concept. The full Z2 puzzle (and the
    fork into the two factions) is the next phase.</p>
    <p class="muted small">Recovery code for this stage: <b>${step.code}</b> — refresh-safe; re-enter it any time.</p>
    <button id="home" class="btn ghost">Back to start</button>`;
  setTimeout(() => { const b = d.querySelector('#home'); if (b) b.onclick = () => navigate('/'); }, 0);
  return d;
}

/* ---------- util ---------- */
function section(cls) { const s = document.createElement('section'); s.className = 'screen ' + cls; return s; }

/* ---------- start ---------- */
window.addEventListener('DOMContentLoaded', () => {
  render();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
});
