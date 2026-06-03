/* ============================================================================
   app.js — model najprostszy z możliwych: bez routingu URL, bez Service Workera.
   START = wybór NUMERU GRUPY (1-10); dalej flow danej grupy (Z1 = jej deszyfrownik).
   Ekrany przez podmianę #app; stan (grupa+etap+solved) w localStorage → odświeżenie
   wraca na właściwy ekran. Render wołany wprost.
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

/* ---------- helpers DOM ---------- */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
function clear() { APP.innerHTML = ''; try { window.scrollTo(0, 0); } catch (e) {} }
const factionName = (f) => (f === 'KZ' ? 'Krzyżacy (Teutonic Order)' : 'Mieszczanie (Townsmen)');

/* ===================== EKRAN: WYBÓR GRUPY ===================== */
function showGroupSelect() {
  clear();
  const g = el('section', 'screen gate');
  g.innerHTML = `
    <div class="crest">⚜</div>
    <h1>Toruń, 1454</h1>
    <p class="muted">Choose your group. Your number and colour are on your wristband.</p>
    <div class="groups" id="groups"></div>
    <button id="go" class="btn" disabled>Begin</button>
    <p class="demo-note">Each group walks its own trail (its own cipher card). Pick the one the Game Master gave you.</p>`;
  APP.appendChild(g);

  const grid = g.querySelector('#groups');
  let chosen = null;
  for (let n = 1; n <= 10; n++) {
    const m = GROUP_META[n];
    const b = el('button', 'group-swatch');
    b.type = 'button'; b.dataset.n = n;
    b.innerHTML = `<span class="dot" style="background:${m.hex}"></span><b>${n}</b><span class="cname">${m.name}</span>`;
    b.onclick = () => {
      chosen = n;
      grid.querySelectorAll('.group-swatch').forEach((x) => x.classList.toggle('on', x.dataset.n == String(n)));
      g.querySelector('#go').disabled = false;
    };
    grid.appendChild(b);
  }
  g.querySelector('#go').onclick = () => {
    if (!chosen) return;
    setSt({ group: chosen, stage: 'z1' });
    showStage('z1');
  };
}

/* ===================== EKRAN: ETAP ===================== */
function showStage(id) {
  const step = STEPS[id];
  const group = st().group;
  if (!step || !group) return showGroupSelect();
  setSt({ stage: id });
  clear();

  const s = el('section', 'screen step');
  s.appendChild(groupChip(group));
  s.appendChild(el('span', 'stage-tag', step.label));
  s.appendChild(el('h2', 'stage-title', step.title));
  if (step.prop) s.appendChild(propFrame(step.prop));
  s.appendChild(briefBody(step.brief));

  if (step.puzzle && !isSolved(id)) {
    if (step.puzzle.type === 'symbol-sequence') {
      s.appendChild(symbolPuzzle(step, z1PuzzleFor(group)));
    } else if (step.puzzle.type === 'code') {
      s.appendChild(codePuzzle(step));
    } else if (step.puzzle.type === 'observe') {
      s.appendChild(observePuzzle(step));
    }
  } else if (step.puzzle && isSolved(id)) {
    s.appendChild(clearedPanel(step));
  } else if (step.fork) {
    s.appendChild(forkPanel(step, group));
  } else if (step.terminal) {
    s.appendChild(terminalPanel(step, group));
  }

  const back = el('button', 'btn ghost', 'Start over (change group)');
  back.style.marginTop = '22px';
  back.onclick = () => { setSt({ group: null, stage: null, solved: {} }); localStorage.setItem(LS, JSON.stringify({ solved: {} })); showGroupSelect(); };
  s.appendChild(back);

  APP.appendChild(s);
}

function groupChip(group) {
  const m = GROUP_META[group];
  const dark = ['#FFFFFF', '#FFE119', '#42D4F4'].indexOf(m.hex) >= 0;  // jasne tła → ciemny tekst
  const d = el('div', 'group-chip');
  d.innerHTML = `<span class="dot" style="background:${m.hex}"></span> Group ${group} · ${m.name}`;
  return d;
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
function symbolPuzzle(step, data) {
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
  wrap.appendChild(el('p', 'demo-note', 'Same symbols as your printed cipher card. Tap the four you found, in order.'));

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

/* ===================== BRAMKA: kod liczbowy (liczba wyciągnięta od aktora) ===================== */
function codePuzzle(step) {
  const p = step.puzzle;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>${p.heading || 'Enter the code'}</h3><p class="msg">${p.prompt}</p>`;

  const input = el('input', 'code-input');
  input.type = 'text';
  input.setAttribute('inputmode', 'numeric');
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('aria-label', p.heading || 'code');
  if (p.placeholder) input.placeholder = p.placeholder;
  wrap.appendChild(input);

  const go = el('button', 'btn', 'Confirm');
  go.id = 'codego'; go.disabled = true;
  wrap.appendChild(go);

  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  if (p.note) wrap.appendChild(el('p', 'demo-note', p.note));

  const norm = (v) => String(v == null ? '' : v).trim().replace(/\s+/g, '').toLowerCase();
  function refresh() {
    go.disabled = norm(input.value).length === 0;
    fb.textContent = ''; fb.className = 'feedback';
  }
  input.addEventListener('input', refresh);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !go.disabled) { e.preventDefault(); go.click(); } });
  go.onclick = () => {
    if (norm(input.value) === norm(p.answer)) {
      setSt({ solved: { [step.id]: true } });
      showSuccess(step);
    } else {
      fb.textContent = p.errMsg || 'That is not the number. Try again.';
      fb.className = 'feedback err';
    }
  };

  refresh();
  return wrap;
}

/* ===================== BRAMKA: obserwacja (kilka pól, każde z accept-listą) ===================== */
function observePuzzle(step) {
  const p = step.puzzle;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>${p.heading || 'What did you see?'}</h3><p class="msg">${p.prompt}</p>`;

  const norm = (v) => String(v == null ? '' : v).trim().replace(/\s+/g, ' ').toLowerCase();
  const rows = [];
  p.fields.forEach((f, i) => {
    const lab = el('label', 'field-label', f.label);
    lab.setAttribute('for', 'obs' + i);
    const inp = el('input', 'code-input');
    inp.type = 'text'; inp.id = 'obs' + i;
    inp.setAttribute('autocomplete', 'off');
    inp.setAttribute('aria-label', f.label);
    if (f.placeholder) inp.placeholder = f.placeholder;
    wrap.appendChild(lab); wrap.appendChild(inp);
    rows.push({ inp, accept: (f.accept || []).map(norm) });
  });

  const go = el('button', 'btn', 'Confirm'); go.disabled = true; wrap.appendChild(go);
  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  if (p.note) wrap.appendChild(el('p', 'demo-note', p.note));

  function refresh() {
    go.disabled = !rows.every((r) => norm(r.inp.value).length > 0);
    fb.textContent = ''; fb.className = 'feedback';
  }
  rows.forEach((r) => {
    r.inp.addEventListener('input', refresh);
    r.inp.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !go.disabled) { e.preventDefault(); go.click(); } });
  });
  go.onclick = () => {
    const ok = rows.every((r) => r.accept.indexOf(norm(r.inp.value)) >= 0);
    if (ok) { setSt({ solved: { [step.id]: true } }); showSuccess(step); }
    else { fb.textContent = p.errMsg || 'Not quite. Look again.'; fb.className = 'feedback err'; }
  };

  refresh();
  return wrap;
}

/* ===================== EKRAN: SUKCES ===================== */
function showSuccess(step) {
  const next = step.next ? STEPS[step.next] : null;
  const sc = step.success || { seal: '✔', title: 'The chain holds', text: 'You named your four marks in order. Your contact awaits.' };
  clear();
  const d = el('section', 'screen done');
  d.innerHTML = `
    <div class="seal">${sc.seal || '✔'}</div>
    <h2>${sc.title}</h2>
    <p class="narration">${sc.text}</p>
    ${next ? `<button id="cont" class="btn">Continue to ${next.label} →</button>` : ''}`;
  APP.appendChild(d);
  if (next) d.querySelector('#cont').onclick = () => showStage(next.id);
}

function clearedPanel(step) {
  const next = step.next ? STEPS[step.next] : null;
  const d = el('div', 'done');
  d.innerHTML = `<hr class="rule"><div class="seal small">✔</div>
    <p class="msg">You already cleared this stage.</p>
    ${next ? `<button class="btn" id="cont2">Continue to ${next.label} →</button>` : ''}`;
  if (next) { const b = d.querySelector('#cont2'); if (b) b.onclick = () => showStage(next.id); }
  return d;
}

function terminalPanel(step, group) {
  const fac = factionName(GROUP_META[group].faction);
  return el('div', 'done', `<hr class="rule">
    <p class="msg">From here your road runs with the <strong>${fac}</strong>.</p>
    <p class="msg">This is the boundary of the proof-of-concept — the full Z2 puzzle and the
    rest of your group’s flow are the next phase.</p>`);
}

/* rozejście wg frakcji (Z2): TR → dalej (Z3); KZ → granica POC (Z3Z = next phase) */
function forkPanel(step, group) {
  const fac = GROUP_META[group].faction;
  const nextId = step.fork ? step.fork[fac] : null;
  const d = el('div', 'done');
  if (nextId && STEPS[nextId]) {
    d.innerHTML = `<hr class="rule"><p class="msg">From here your road runs with the <strong>${factionName(fac)}</strong>.</p>`;
    const b = el('button', 'btn', `Continue to ${STEPS[nextId].label} →`);
    b.onclick = () => showStage(nextId);
    d.appendChild(b);
  } else {
    d.innerHTML = `<hr class="rule">
      <p class="msg">From here your road runs with the <strong>${factionName(fac)}</strong>.</p>
      <p class="msg">This is the boundary of the proof-of-concept — the rest of your group’s flow is the next phase.</p>`;
  }
  return d;
}

/* ===================== START ===================== */
(function () {
  const s = st();
  if (s.group && s.stage && STEPS[s.stage]) showStage(s.stage);
  else showGroupSelect();
})();
