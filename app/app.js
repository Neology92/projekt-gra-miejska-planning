/* ============================================================================
   app.js — model najprostszy z możliwych: bez routingu URL, bez Service Workera.
   START = wybór NUMERU GRUPY (1-10); dalej flow danej grupy (Z1 = jej deszyfrownik).
   Ekrany przez podmianę #app; stan (grupa+etap+solved) w localStorage → odświeżenie
   wraca na właściwy ekran. Render wołany wprost.
   ============================================================================ */

const LS = 'torun1454';
const APP = document.getElementById('app');

/* dane opcjonalnych etapów F2B (po Z2), per id kroku → obiekt z *-data.js */
const OPTIONAL_DATA = {
  z4: Z4_DATA, z5: Z5_DATA, z6: Z6_DATA,
  z8: Z8_DATA, z9: Z9_DATA, z10: Z10_DATA,
};

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
  const faction = GROUP_META[group].faction;

  const s = el('section', 'screen step');
  s.appendChild(groupChip(group));
  s.appendChild(el('span', 'stage-tag', step.label));

  if (step.puzzle && step.puzzle.type === 'logic') {
    /* Z2 — treść per frakcja */
    const data = Z2_DATA[faction];
    s.appendChild(el('h2', 'stage-title', data.title));
    s.appendChild(propFrame(step.prop));
    s.appendChild(briefBody(data.scene));
    s.appendChild(slipBlock(data));
    if (isSolved(id)) s.appendChild(z2RevealPanel(data, group));
    else s.appendChild(logicPuzzle(step, data));
  } else if (OPTIONAL_DATA[id]) {
    /* Z4/Z5/Z6/Z8/Z9/Z10 — opcjonalne F2B (po Z2). Wspólny szkielet, różne bramki. */
    const data = OPTIONAL_DATA[id];
    s.appendChild(el('h2', 'stage-title', data.title));
    s.appendChild(propFrame(step.prop));
    s.appendChild(briefBody(data.scene));
    if (data.note) s.appendChild(noteBlock(data));
    if (isSolved(id)) s.appendChild(optionalRevealPanel(data));
    else s.appendChild(optionalPuzzle(step, data));
  } else {
    /* Z1 — symbol-sequence */
    s.appendChild(el('h2', 'stage-title', step.title));
    s.appendChild(propFrame(step.prop));
    s.appendChild(briefBody(step.brief));
    if (step.puzzle && step.puzzle.type === 'symbol-sequence' && !isSolved(id)) {
      s.appendChild(symbolPuzzle(step, z1PuzzleFor(group)));
    } else if (step.puzzle && isSolved(id)) {
      s.appendChild(clearedPanel(step));
    } else if (step.terminal) {
      s.appendChild(terminalPanel(step, group));
    }
  }

  const back = el('button', 'btn ghost', 'Start over (change group)');
  back.style.marginTop = '22px';
  back.onclick = () => { localStorage.setItem(LS, JSON.stringify({ solved: {} })); showGroupSelect(); };
  s.appendChild(back);

  APP.appendChild(s);
}

/* slip pośrednika (Z2) */
function slipBlock(data) {
  const d = el('div', 'slip');
  d.innerHTML = `<div class="slip-label">A scrap of paper — left for you</div>`
    + data.slip.map((p) => `<p class="msg">${p}</p>`).join('');
  return d;
}

/* roman brata (Z10) — pisany dokument, ten sam motyw wizualny co slip */
function noteBlock(data) {
  const d = el('div', 'slip');
  d.innerHTML = `<div class="slip-label">${data.noteLabel}</div>`
    + data.note.map((p) => `<p class="msg">${p}</p>`).join('');
  return d;
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

/* ===================== EKRAN: SUKCES ===================== */
function showSuccess(step) {
  const next = step.next ? STEPS[step.next] : null;
  clear();
  const d = el('section', 'screen done');
  d.innerHTML = `
    <div class="seal">✔</div>
    <h2>The chain holds</h2>
    <p class="narration">You named your four marks in order. Your contact awaits.</p>
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
    <p class="msg">This is the boundary of the proof-of-concept.</p>`);
}

/* ===================== ZAGADKI OPCJONALNE (Z4–Z10) ===================== */
/* Dispatcher widżetu bramki po typie zagadki kroku. */
function optionalPuzzle(step, data) {
  switch (step.puzzle.type) {
    case 'beast-select': return beastPuzzle(step, data);
    case 'code-entry':   return codePuzzle(step, data);
    case 'pick-one':     return pickOnePuzzle(step, data);
    case 'assign':       return assignPuzzle(step, data);
    default:             return el('div');
  }
}

/* wspólny panel/ekran sukcesu opcjonalnych (granica POC) */
function optionalRevealPanel(data) {
  return el('div', 'done', `<hr class="rule"><div class="seal small">✔</div>
    <p class="msg">${data.reveal.head}</p>
    <p class="msg">${data.reveal.body}</p>
    <p class="muted small">(Boundary of the proof-of-concept — the finale lives off the app.)</p>`);
}
function showSuccessOptional(data) {
  clear();
  const d = el('section', 'screen done');
  d.innerHTML = `<div class="seal">✔</div><h2>${data.successTitle || 'Done'}</h2>
    <p class="msg">${data.reveal.head}</p>
    <p class="msg">${data.reveal.body}</p>
    <p class="muted small">(Boundary of the proof-of-concept — the finale lives off the app.)</p>
    <button id="back" class="btn ghost">Back to start</button>`;
  APP.appendChild(d);
  d.querySelector('#back').onclick = () => { localStorage.setItem(LS, JSON.stringify({ solved: {} })); showGroupSelect(); };
}

/* --- Z4/Z8: kod liczbowy (kalimba). Poprawnie = data.puzzle.code (621454). --- */
function codePuzzle(step, data) {
  const p = data.puzzle;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>${p.lead}</h3><p class="msg">${p.intro}</p>`;

  const inRow = el('div', 'actions');
  inRow.innerHTML = `<input id="code" class="code-input" inputmode="numeric" autocomplete="off"
    maxlength="${p.code.length}" aria-label="six numbers" placeholder="${'•'.repeat(p.code.length)}">`;
  wrap.appendChild(inRow);

  const actions = el('div', 'actions');
  actions.innerHTML = `<button id="confirm" class="btn" disabled>${p.confirm || 'Confirm'}</button>`;
  wrap.appendChild(actions);

  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  if (p.hint) wrap.appendChild(el('p', 'demo-note', p.hint));

  const input = inRow.querySelector('#code');
  const confirmBtn = actions.querySelector('#confirm');
  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '').slice(0, p.code.length);
    confirmBtn.disabled = input.value.length !== p.code.length;
    fb.textContent = ''; fb.className = 'feedback';
  });
  confirmBtn.onclick = () => {
    if (input.value === p.code) { setSt({ solved: { [step.id]: true } }); showSuccessOptional(data); }
    else { fb.textContent = p.err || 'That is not the number.'; fb.className = 'feedback err'; }
  };
  return wrap;
}

/* --- Z6: wybór jednego z kilku (miasto-nadawca bez pary = Chełmno). --- */
function pickOnePuzzle(step, data) {
  const p = data.puzzle;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>${p.lead}</h3><p class="msg">${p.intro}</p>`;

  const list = el('div', 'pick-list');
  p.options.forEach((o) => {
    const t = el('button', 'pick-opt');
    t.type = 'button'; t.dataset.v = o;
    t.textContent = o;
    list.appendChild(t);
  });
  wrap.appendChild(list);

  const actions = el('div', 'actions');
  actions.innerHTML = `<button id="confirm" class="btn" disabled>${p.confirm || 'Confirm'}</button>`;
  wrap.appendChild(actions);

  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  if (p.hint) wrap.appendChild(el('p', 'demo-note', p.hint));

  let chosen = null;
  const confirmBtn = actions.querySelector('#confirm');
  list.addEventListener('click', (e) => {
    const t = e.target.closest('.pick-opt'); if (!t) return;
    chosen = t.dataset.v;
    list.querySelectorAll('.pick-opt').forEach((x) => x.classList.toggle('on', x.dataset.v === chosen));
    confirmBtn.disabled = false; fb.textContent = ''; fb.className = 'feedback';
  });
  confirmBtn.onclick = () => {
    if (chosen === p.answer) { setSt({ solved: { [step.id]: true } }); showSuccessOptional(data); }
    else { fb.textContent = p.err || 'Not that one.'; fb.className = 'feedback err'; }
  };
  return wrap;
}

/* --- Z5/Z9: rozpiska — każdy słój (A–G) → składnik. Poprawnie = data.puzzle.solution. --- */
function assignPuzzle(step, data) {
  const p = data.puzzle;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>${p.lead}</h3><p class="msg">${p.intro}</p>`;
  wrap.appendChild(el('p', 'msg', `<strong>${p.recipeLabel || 'On the recipe'}:</strong> ${p.options.join(' · ')}`));

  const form = el('div', 'assign');
  p.rows.forEach((L) => {
    const r = el('div', 'assign-row');
    r.innerHTML = `<div class="who">${p.rowLabel || 'Jar'} ${L}</div>`
      + selectHtml('ing', L, p.itemLabel || 'Holds', p.options);
    form.appendChild(r);
  });
  wrap.appendChild(form);

  const btn = el('button', 'btn', p.confirm || 'Confirm the sheet'); wrap.appendChild(btn);
  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  if (p.hint) wrap.appendChild(el('p', 'demo-note', p.hint));

  btn.onclick = () => {
    let ok = true;
    p.rows.forEach((L) => {
      const v = form.querySelector('select[data-kind="ing"][data-who="' + L + '"]').value;
      if (v !== p.solution[L]) ok = false;
    });
    if (ok) { setSt({ solved: { [step.id]: true } }); showSuccessOptional(data); }
    else { fb.textContent = p.err || 'That does not come out right.'; fb.className = 'feedback err'; }
  };
  return wrap;
}

/* ===================== ZAGADKA: bestie na ścianie (Z10) ===================== */
/* Wybór ZBIORU liter (kolejność bez znaczenia). Poprawnie = dokładnie answer (A/B/E). */
function beastPuzzle(step, data) {
  const p = data.puzzle;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>${p.lead}</h3><p class="msg">${p.intro}</p>`;

  const grid = el('div', 'grid letters');
  p.letters.forEach((L) => {
    const t = el('button', 'tile letter');
    t.type = 'button'; t.dataset.l = L;
    t.innerHTML = `<span class="lt">${L}</span><span class="badge">✓</span>`;
    grid.appendChild(t);
  });
  wrap.appendChild(grid);

  const actions = el('div', 'actions');
  actions.innerHTML = `<button id="confirm" class="btn" disabled>Bring back their names</button>
                       <button id="clearpick" class="btn ghost">Clear</button>`;
  wrap.appendChild(actions);

  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  wrap.appendChild(el('p', 'demo-note', 'Match the leaf in your hand against the painted wall. Mark only the beasts that truly stand on it — no more, no fewer.'));

  let picked = [];
  const confirmBtn = actions.querySelector('#confirm');

  function paint() {
    grid.querySelectorAll('.tile').forEach((t) => {
      t.classList.toggle('on', picked.indexOf(t.dataset.l) >= 0);
    });
    confirmBtn.disabled = picked.length === 0;
    fb.textContent = ''; fb.className = 'feedback';
  }

  grid.addEventListener('click', (e) => {
    const t = e.target.closest('.tile'); if (!t) return;
    const L = t.dataset.l;
    const at = picked.indexOf(L);
    if (at >= 0) picked.splice(at, 1); else picked.push(L);
    paint();
  });
  actions.querySelector('#clearpick').onclick = () => { picked = []; paint(); };
  confirmBtn.onclick = () => {
    const want = p.answer.slice().sort().join('');
    const got = picked.slice().sort().join('');
    if (got === want) { setSt({ solved: { [step.id]: true } }); showSuccessOptional(data); }
    else { fb.textContent = 'A townsman’s eye, not a brother’s. Some of these never stood on that wall — or you have missed one. Read it again.'; fb.className = 'feedback err'; }
  };

  paint();
  return wrap;
}

/* ===================== ZAGADKA: dedukcja logiczna (Z2) ===================== */
function logicPuzzle(step, data) {
  const p = data.puzzle;
  const wrap = el('div', 'solve');
  wrap.innerHTML = `<hr class="rule"><h3>${p.lead}</h3><p class="msg">${p.intro}</p>`;
  wrap.appendChild(el('p', 'msg', `<strong>The three:</strong> ${p.people.join(' · ')}`));
  wrap.appendChild(el('p', 'msg', `<strong>${p.placeLabel}:</strong> ${p.places.join(' · ')}`));
  wrap.appendChild(el('p', 'msg', `<strong>${p.itemLabel}:</strong> ${p.items.join(' · ')}`));
  const ol = el('ol', 'brief-list');
  p.clues.forEach((c) => ol.appendChild(el('li', null, c)));
  wrap.appendChild(ol);
  wrap.appendChild(el('p', 'msg', '<em>Only one of those marks is on your map. That is the door you go to — and no other.</em>'));

  // przypisania: każda osoba dostaje miejsce + przedmiot (natywne select)
  const form = el('div', 'assign');
  p.people.forEach((person) => {
    const row = el('div', 'assign-row');
    row.innerHTML = `<div class="who">${person}</div>`
      + selectHtml('place', person, p.placeLabel, p.places)
      + selectHtml('item', person, p.itemLabel, p.items);
    form.appendChild(row);
  });
  wrap.appendChild(form);

  const btn = el('button', 'btn', 'Confirm'); wrap.appendChild(btn);
  const fb = el('p', 'feedback'); wrap.appendChild(fb);
  wrap.appendChild(el('p', 'demo-note', 'Work it out from the three things you overheard, then place all three.'));

  btn.onclick = () => {
    let ok = true;
    p.people.forEach((person) => {
      const pl = form.querySelector('select[data-kind="place"][data-who="' + person + '"]').value;
      const it = form.querySelector('select[data-kind="item"][data-who="' + person + '"]').value;
      if (pl !== p.solution[person].place || it !== p.solution[person].item) ok = false;
    });
    if (ok) { setSt({ solved: { [step.id]: true } }); showSuccessZ2(data, st().group); }
    else { fb.textContent = 'That doesn’t hold together. Re-read the three things you overheard.'; fb.className = 'feedback err'; }
  };
  return wrap;
}

function selectHtml(kind, who, label, opts) {
  return `<label class="sel"><span>${label}</span>`
    + `<select data-kind="${kind}" data-who="${who}"><option value="">—</option>`
    + opts.map((o) => `<option value="${o}">${o}</option>`).join('')
    + `</select></label>`;
}

function z2RevealPanel(data, group) {
  const opt = optionalStepFor(group);
  const d = el('div', 'done');
  d.innerHTML = `<hr class="rule"><div class="seal small">✔</div>
    <p class="msg">${data.reveal.head}</p>
    <p class="msg">${data.reveal.body}</p>
    ${opt
      ? `<button class="btn" id="cont2">Continue to ${STEPS[opt].label} →</button>`
      : `<p class="muted small">Go find them — they carry your way onward. (Boundary of the proof-of-concept.)</p>`}`;
  if (opt) { const b = d.querySelector('#cont2'); if (b) b.onclick = () => showStage(opt); }
  return d;
}

function showSuccessZ2(data, group) {
  clear();
  const opt = optionalStepFor(group);
  const d = el('section', 'screen done');
  d.innerHTML = `<div class="seal">✔</div><h2>The pieces fit</h2>
    <p class="msg">${data.reveal.head}</p>
    <p class="msg">${data.reveal.body}</p>
    ${opt
      ? `<p class="muted small">You named your man and his word — but there is more asked of the Order’s own.</p>
         <button id="cont" class="btn">Continue to ${STEPS[opt].label} →</button>`
      : `<p class="muted small">Go find them — they carry your way onward. (Boundary of the proof-of-concept.)</p>`}
    <button id="back" class="btn ghost">Back to start</button>`;
  APP.appendChild(d);
  if (opt) d.querySelector('#cont').onclick = () => showStage(opt);
  d.querySelector('#back').onclick = () => { localStorage.setItem(LS, JSON.stringify({ solved: {} })); showGroupSelect(); };
}

/* ===================== START ===================== */
(function () {
  const s = st();
  if (s.group && s.stage && STEPS[s.stage]) showStage(s.stage);
  else showGroupSelect();
})();
