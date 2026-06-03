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
    if (isSolved(id)) s.appendChild(z2RevealPanel(data));
    else s.appendChild(logicPuzzle(step, data));
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
    if (ok) { setSt({ solved: { [step.id]: true } }); showSuccessZ2(data); }
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

function z2RevealPanel(data) {
  return el('div', 'done', `<hr class="rule"><div class="seal small">✔</div>
    <p class="msg">${data.reveal.head}</p>
    <p class="msg">${data.reveal.body}</p>
    <p class="muted small">Go find them — they carry your way onward. (Boundary of the proof-of-concept.)</p>`);
}

function showSuccessZ2(data) {
  clear();
  const d = el('section', 'screen done');
  d.innerHTML = `<div class="seal">✔</div><h2>The pieces fit</h2>
    <p class="msg">${data.reveal.head}</p>
    <p class="msg">${data.reveal.body}</p>
    <p class="muted small">Go find them — they carry your way onward. (Boundary of the proof-of-concept.)</p>
    <button id="back" class="btn ghost">Back to start</button>`;
  APP.appendChild(d);
  d.querySelector('#back').onclick = () => { localStorage.setItem(LS, JSON.stringify({ solved: {} })); showGroupSelect(); };
}

/* ===================== START ===================== */
(function () {
  const s = st();
  if (s.group && s.stage && STEPS[s.stage]) showStage(s.stage);
  else showGroupSelect();
})();
