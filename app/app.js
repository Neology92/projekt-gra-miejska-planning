/* ============================================================================
   app.js — NAJBANALNIEJSZY model (bez routingu URL, bez Service Workera).
   Jedna strona; ekrany przełączane przez podmianę zawartości #app. Stan w
   localStorage → odświeżenie wraca na właściwy ekran. Render wołany WPROST
   (żadnych hashchange/popstate/pushState — to były źródła blank-screenów).

   Przepływ:  landing (kod) → etap (brief + zagadka) → sukces (kod następnego)
              → następny etap …  Kod etapu = wejście + recovery (z landingu).
   ============================================================================ */

const LS = 'torun1454';
const APP = document.getElementById('app');

/* ---------- stan ---------- */
function st() { try { return JSON.parse(localStorage.getItem(LS)) || {}; } catch (e) { return {}; } }
function setSt(patch) {
  const s = Object.assign({ solved: {} }, st());
  Object.assign(s, patch);
  if (patch.solved) s.solved = Object.assign({}, s.solved, patch.solved);
  try { localStorage.setItem(LS, JSON.stringify(s)); } catch (e) {}
  return s;
}
function isSolved(id) { return !!(st().solved || {})[id]; }

/* ---------- kody ---------- */
const norm = (s) => (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
function codeToStage(input) {
  const n = norm(input);
  if (!n) return null;
  return STEP_ORDER.find((id) => norm(STEPS[id].code) === n) || null;
}

/* ---------- helpers DOM ---------- */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
function clear() { APP.innerHTML = ''; window.scrollTo(0, 0); }

/* ============================ EKRAN: LANDING ============================ */
function showLanding() {
  clear();
  const g = el('section', 'screen gate');
  g.innerHTML = `
    <div class="crest">⚜</div>
    <h1>Toruń, 1454</h1>
    <p class="muted">A sealed errand. Enter the code the Game Master gave you to begin.</p>
    <input id="code" class="code-input" type="text" inputmode="text"
           autocomplete="off" autocapitalize="characters" placeholder="ACCESS CODE">
    <button id="go" class="btn">Begin</button>
    <p id="fb" class="feedback"></p>
    <p class="demo-note">DEMO — GM code: <b>START-1454</b>. Each stage also has its own code (shown when you clear the previous one) — type it here to jump back if needed.</p>`;
  APP.appendChild(g);

  const input = g.querySelector('#code');
  const fb = g.querySelector('#fb');
  const submit = () => {
    const stage = codeToStage(input.value);
    if (stage) { setSt({ stage }); showStage(stage); }
    else { fb.textContent = 'That code opens nothing here. Ask the Game Master.'; fb.className = 'feedback err'; }
  };
  g.querySelector('#go').onclick = submit;
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  try { input.focus(); } catch (e) {}
}

/* ============================ EKRAN: ETAP ============================ */
function showStage(id) {
  const step = STEPS[id];
  if (!step) return showLanding();
  setSt({ stage: id });
  clear();

  const s = el('section', 'screen step');
  s.appendChild(el('span', 'stage-tag', step.label));
  s.appendChild(el('h2', 'stage-title', step.title));
  s.appendChild(propFrame(step.prop));
  s.appendChild(briefBody(step.brief));

  if (step.puzzle && step.puzzle.type === 'symbol-sequence' && !isSolved(id)) {
    s.appendChild(symbolPuzzle(step));
  } else if (step.puzzle && isSolved(id)) {
    s.appendChild(clearedPanel(step));
  } else if (step.terminal) {
    s.appendChild(terminalPanel(step));
  }

  // zawsze: drobny link powrotu do startu (na wypadek pomyłki)
  const back = el('button', 'btn ghost', 'Start over');
  back.style.marginTop = '22px';
  back.onclick = () => { setSt({ stage: null }); showLanding(); };
  s.appendChild(back);

  APP.appendChild(s);
}

function propFrame(prop) {
  return el('div', 'prop-frame', `
    <span class="ph">Prop at this stage</span>
    <ul>
      <li><strong>What:</strong> ${prop.what}</li>
      <li><strong>From:</strong> ${prop.from}</li>
      <li><strong>Where:</strong> ${prop.where}</li>
    </ul>
    <p class="narration small">Don’t have it? Flag the Game Master before you go on.</p>`);
}

function briefBody(blocks) {
  const wrap = el('div');
  blocks.forEach((b) => {
    if (b.reg === 'rule') { wrap.appendChild(el('hr', 'rule')); return; }
    if (b.reg === 'list') {
      const ol = el('ol', 'brief-list');
      b.items.forEach((t) => ol.appendChild(el('li', null, t)));
      wrap.appendChild(ol); return;
    }
    const cls = { narration: 'narration', msg: 'msg', head: 'head', dateline: 'dateline' }[b.reg] || 'msg';
    wrap.appendChild(el('p', cls, b.html));
  });
  return wrap;
}

/* ===================== ZAGADKA: wybór symboli w kolejności ===================== */
function symbolPuzzle(step) {
  const data = step.puzzle.data;
  const max = data.chain.length;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>Report your chain</h3><p class="msg">${step.puzzle.prompt}</p>`;

  const seq = el('div', 'seq'); wrap.appendChild(seq);

  const grid = el('div', 'grid');
  data.display.forEach((code) => {
    const t = el('button', 'tile');
    t.type = 'button'; t.dataset.code = code;
    t.innerHTML = `<img src="icons/${data.icons[code]}" alt="trail symbol" draggable="false"><span class="badge"></span>`;
    grid.appendChild(t);
  });
  wrap.appendChild(grid);

  const actions = el('div', 'actions');
  actions.innerHTML = `<button id="confirm" class="btn" disabled>Confirm the chain</button>
                       <button id="clearpick" class="btn ghost">Clear</button>`;
  wrap.appendChild(actions);

  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  wrap.appendChild(el('p', 'demo-note',
    'Same 9 symbols as your printed G1 cipher card. Tap the four you found, in order.'));

  let picked = [];
  const confirmBtn = actions.querySelector('#confirm');

  function paint() {
    grid.querySelectorAll('.tile').forEach((t) => {
      const i = picked.indexOf(t.dataset.code);
      t.classList.toggle('on', i >= 0);
      t.querySelector('.badge').textContent = i >= 0 ? (i + 1) : '';
    });
    seq.innerHTML = picked.length
      ? picked.map((c, i) => `<span class="chip"><img src="icons/${data.icons[c]}" alt=""><i>${i + 1}</i></span>`).join('')
      : '<span class="muted small">No symbols picked yet — tap them below in order.</span>';
    confirmBtn.disabled = picked.length !== max;
    fb.textContent = ''; fb.className = 'feedback';
  }

  grid.addEventListener('click', (e) => {
    const t = e.target.closest('.tile'); if (!t) return;
    const code = t.dataset.code;
    const at = picked.indexOf(code);
    if (at >= 0) picked.splice(at, 1);
    else if (picked.length < max) picked.push(code);
    paint();
  });
  actions.querySelector('#clearpick').onclick = () => { picked = []; paint(); };
  confirmBtn.onclick = () => {
    const ok = picked.length === max && picked.every((c, i) => c === data.chain[i]);
    if (ok) { setSt({ solved: { [step.id]: true } }); showSuccess(step); }
    else { fb.textContent = 'One of these marks is wrong, or out of order. Walk it back.'; fb.className = 'feedback err'; }
  };

  paint();
  return wrap;
}

/* ===================== EKRAN: SUKCES (kod następnego etapu) ===================== */
function showSuccess(step) {
  const next = step.next ? STEPS[step.next] : null;
  clear();
  const d = el('section', 'screen done');
  d.innerHTML = `
    <div class="seal">✔</div>
    <h2>The chain holds</h2>
    <p class="narration">You named your four marks in order. Your contact awaits.</p>
    ${next ? `
      <p class="msg">Next stage unlocked. <strong>Write this code down:</strong></p>
      <div class="nextcode">${next.code}</div>
      <p class="muted small">If the app closes, reopen and type this code to come back here.</p>
      <button id="cont" class="btn">Continue to ${next.label} →</button>` : ''}`;
  APP.appendChild(d);
  if (next) d.querySelector('#cont').onclick = () => { setSt({ stage: next.id }); showStage(next.id); };
}

/* panel etapu już rozwiązanego (po powrocie) */
function clearedPanel(step) {
  const next = step.next ? STEPS[step.next] : null;
  const d = el('div', 'done');
  d.innerHTML = `<hr class="rule"><div class="seal small">✔</div>
    <p class="msg">You already cleared this stage.</p>
    ${next ? `<div class="nextcode">${next.code}</div>
      <button class="btn" id="cont2">Continue to ${next.label} →</button>` : ''}`;
  if (next) { const b = d.querySelector('#cont2'); if (b) b.onclick = () => { setSt({ stage: next.id }); showStage(next.id); }; }
  return d;
}

/* panel terminalny (granica POC) */
function terminalPanel(step) {
  return el('div', 'done', `<hr class="rule">
    <p class="msg">This is the boundary of the proof-of-concept. The full Z2 puzzle
    (and the fork into the two factions) is the next phase.</p>
    <p class="muted small">Recovery code for this stage: <b>${step.code}</b></p>`);
}

/* ============================ START ============================ */
(function () {
  const s = st();
  if (s.stage && STEPS[s.stage]) showStage(s.stage);
  else showLanding();
})();
