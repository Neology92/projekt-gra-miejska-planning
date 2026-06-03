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
  const tagLabel = step.type === 'optional' ? OPTIONAL[GROUP_OPTIONAL[group]].label : step.label;
  s.appendChild(el('span', 'stage-tag', tagLabel));

  if (step.type === 'finale') {
    /* Z7 / Z11 — finałowy szyfr */
    finaleStage(s, FINALE[faction]);
  } else if (step.type === 'optional') {
    /* Z4–Z10 — opcjonalna zagadka per grupa */
    optionalStage(s, OPTIONAL[GROUP_OPTIONAL[group]], step);
  } else if (step.type === 'actor-brief') {
    /* Z3 — scena handlera (nośnik briefu), treść per frakcja */
    actorBrief(s, Z3_DATA[faction], step);
  } else if (step.puzzle && step.puzzle.type === 'logic') {
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

/* ===================== Z3 — scena handlera (nośnik briefu) ===================== */
function actorBrief(s, data, step) {
  s.appendChild(el('h2', 'stage-title', data.title));
  s.appendChild(propFrame(data.prop));
  s.appendChild(briefBody(data.sceneOpen));

  // pisany rozkaz handlera (Jordan/Albrecht)
  const order = el('div', 'order');
  order.appendChild(el('div', 'order-title', data.orderTitle));
  order.appendChild(briefBody(data.order));
  s.appendChild(order);

  s.appendChild(briefBody(data.sceneClose));

  const onward = (parent) => {
    parent.appendChild(mgNote(data.mg));
    if (step && step.next) {
      const c = el('button', 'btn', 'Continue to your task →');
      c.onclick = () => showStage(step.next);
      parent.appendChild(c);
    }
  };

  if (data.theft) {
    // TR: twist kradzieży ukryty za przyciskiem (zachowuje beat „olśnienia")
    const btn = el('button', 'btn', data.theftButton);
    s.appendChild(btn);
    const slot = el('div'); s.appendChild(slot);
    btn.onclick = () => {
      btn.remove();
      slot.appendChild(el('hr', 'rule'));
      slot.appendChild(briefBody(data.theft));
      onward(slot);
      if (slot.scrollIntoView) slot.scrollIntoView({ behavior: 'smooth' });
    };
  } else {
    onward(s);
  }
}

function mgNote(text) {
  const d = el('div', 'mg-note');
  d.innerHTML = `<span class="mg-label">↪ Game Master</span> ${text}`;
  return d;
}

/* ===================== OPCJONALNA (Z4–Z10) ===================== */
function optScrap(lines) {
  const d = el('div', 'slip');
  d.innerHTML = `<div class="slip-label">written, in another hand</div>`
    + lines.map((p) => `<p class="msg">${p}</p>`).join('');
  return d;
}

function mapMark(glyph, caption) {
  const d = el('div', 'map-mark');
  d.innerHTML = `<svg viewBox="0 0 32 32" width="80" height="80" aria-label="map mark">${glyph}</svg>`
    + `<div class="map-mark-cap">${caption}</div>`;
  return d;
}

function optionalStage(s, opt, step) {
  s.appendChild(el('h2', 'stage-title', opt.title));
  s.appendChild(propFrame(opt.prop));
  s.appendChild(briefBody(opt.scene));
  if (opt.scrap) s.appendChild(optScrap(opt.scrap));
  if (opt.sceneAfter && opt.sceneAfter.length) s.appendChild(briefBody(opt.sceneAfter));
  if (opt.mapGlyph) s.appendChild(mapMark(opt.mapGlyph, opt.mapGlyphCaption));

  if (isSolved('opt')) { s.appendChild(optClearedPanel(opt)); return; }

  const byType = { code: optCode, assign: optAssign, 'choose-one': optChooseOne, 'choose-many': optChooseMany };
  const render = byType[opt.puzzle.type];
  if (render) s.appendChild(render(opt));
}

function optSolved(opt) { markSolved('opt'); showOptSuccess(opt); }

/* kalimba — audio + 6 cyfr */
function optCode(opt) {
  const p = opt.puzzle;
  const w = el('div', 'solve');
  w.innerHTML = `<hr class="rule"><h3>The tune</h3><p class="msg">${p.prompt}</p>`;
  const audio = el('audio'); audio.controls = true; audio.src = p.audio; audio.preload = 'none';
  audio.style.width = '100%'; audio.style.margin = '8px 0';
  w.appendChild(audio);
  const inp = el('input'); inp.type = 'text'; inp.inputMode = 'numeric';
  inp.className = 'code-input'; inp.maxLength = p.length; inp.placeholder = 'SIX NUMBERS'; inp.autocomplete = 'off';
  w.appendChild(inp);
  const btn = el('button', 'btn', 'Confirm'); w.appendChild(btn);
  const fb = el('p', 'feedback'); w.appendChild(fb);
  const submit = () => {
    const v = (inp.value || '').replace(/[^0-9]/g, '');
    if (v === p.answer) optSolved(opt);
    else { fb.textContent = 'That is not the tune. Listen again, and play it note for note.'; fb.className = 'feedback err'; }
  };
  btn.onclick = submit;
  inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  return w;
}

/* sensoryczna — przepis + 7 słojów A–G → nazwa */
function optAssign(opt) {
  const p = opt.puzzle;
  const w = el('div', 'solve');
  w.innerHTML = `<hr class="rule"><h3>Name the jars</h3><p class="msg">${p.prompt}</p>`;
  const rule = el('div', 'order');
  rule.appendChild(el('div', 'order-title', 'The rule for Toruń piernik'));
  rule.appendChild(briefBody(p.recipe.map((t) => ({ reg: 'msg', html: t }))));
  w.appendChild(rule);
  if (p.hint) w.appendChild(el('p', 'narration small', p.hint));

  const form = el('div', 'assign');
  p.rows.forEach((jar) => {
    const row = el('div', 'assign-row');
    row.innerHTML = `<div class="who">Jar ${jar}</div>`
      + `<label class="sel"><span>holds</span><select data-jar="${jar}"><option value="">—</option>`
      + p.options.map((o) => `<option value="${o}">${o}</option>`).join('')
      + `</select></label>`;
    form.appendChild(row);
  });
  w.appendChild(form);
  const btn = el('button', 'btn', 'Confirm'); w.appendChild(btn);
  const fb = el('p', 'feedback'); w.appendChild(fb);
  btn.onclick = () => {
    let ok = true;
    p.rows.forEach((jar) => {
      const v = form.querySelector('select[data-jar="' + jar + '"]').value;
      if (v !== p.solution[jar]) ok = false;
    });
    if (ok) optSolved(opt);
    else { fb.textContent = 'The baker shakes his head — that batch would not come out right. Weigh and smell them again.'; fb.className = 'feedback err'; }
  };
  return w;
}

/* herby — wybór jednego nadawcy */
function optChooseOne(opt) {
  const p = opt.puzzle;
  const w = el('div', 'solve');
  w.innerHTML = `<hr class="rule"><h3>The silent road</h3><p class="msg">${p.prompt}</p>`;
  const picks = el('div', 'picks'); let chosen = null;
  p.options.forEach((o) => {
    const b = el('button', 'pick'); b.type = 'button'; b.textContent = o;
    b.onclick = () => { chosen = o; picks.querySelectorAll('.pick').forEach((x) => x.classList.toggle('on', x.textContent === o)); };
    picks.appendChild(b);
  });
  w.appendChild(picks);
  const btn = el('button', 'btn', 'Confirm'); w.appendChild(btn);
  const fb = el('p', 'feedback'); w.appendChild(fb);
  btn.onclick = () => {
    if (chosen === p.answer) optSolved(opt);
    else { fb.textContent = 'That envoy’s sister answered. Walk the shields again — match like to like.'; fb.className = 'feedback err'; }
  };
  return w;
}

/* polichromie — wybór wielu (zbiór) */
function optChooseMany(opt) {
  const p = opt.puzzle;
  const w = el('div', 'solve');
  w.innerHTML = `<hr class="rule"><h3>Read the wall</h3><p class="msg">${p.prompt}</p>`;
  const picks = el('div', 'picks'); const sel = new Set();
  p.options.forEach((o) => {
    const b = el('button', 'pick'); b.type = 'button'; b.textContent = o;
    b.onclick = () => { if (sel.has(o)) sel.delete(o); else sel.add(o); b.classList.toggle('on', sel.has(o)); };
    picks.appendChild(b);
  });
  w.appendChild(picks);
  const btn = el('button', 'btn', 'Confirm'); w.appendChild(btn);
  const fb = el('p', 'feedback'); w.appendChild(fb);
  btn.onclick = () => {
    const want = p.answer.slice().sort().join('');
    const got = [...sel].sort().join('');
    if (got === want) optSolved(opt);
    else { fb.textContent = 'A townsman’s reading. Some you marked were never there — and one that is, you missed.'; fb.className = 'feedback err'; }
  };
  return w;
}

function optClearedPanel(opt) {
  return el('div', 'done', `<hr class="rule"><div class="seal small">✔</div>
    <p class="msg">You already cleared this task.</p>${mgNoteHTML(opt.mg)}`);
}
function mgNoteHTML(text) { return `<div class="mg-note"><span class="mg-label">↪ Game Master</span> ${text}</div>`; }

function showOptSuccess(opt) {
  clear();
  const d = el('section', 'screen done');
  d.innerHTML = `<div class="seal">✔</div><h2>Done as asked</h2>
    ${mgNoteHTML(opt.mg)}
    <p class="msg">In return, the Game Master puts a coded scrap into your hand — what was waiting on your answer.</p>
    <button id="cont" class="btn">Continue to the finale →</button>`;
  APP.appendChild(d);
  d.querySelector('#cont').onclick = () => showStage('fin');
}

/* ===================== FINAŁ (Z7 / Z11) ===================== */
function finaleStage(s, data) {
  s.appendChild(el('h2', 'stage-title', data.title));
  s.appendChild(propFrame(data.prop));

  if (isSolved('fin')) { finaleReveal(s, data); return; }

  s.appendChild(briefBody(data.intro));

  // szyfrogram (przechwycona dyspozycja) — monospace
  const c = el('div', 'cipher');
  if (data.cipher.header) {
    c.appendChild(el('div', 'cipher-label', 'The motto, at its head'));
    c.appendChild(el('div', 'cipher-line', data.cipher.header));
    c.appendChild(el('div', 'cipher-label', 'The message'));
  }
  c.appendChild(el('div', 'cipher-line', data.cipher.body));
  s.appendChild(c);

  const w = el('div', 'solve');
  w.appendChild(el('p', 'msg', data.prompt));
  const inp = el('input'); inp.type = 'text'; inp.className = 'plain-input';
  inp.placeholder = 'THE DECODED MESSAGE'; inp.autocomplete = 'off'; inp.autocapitalize = 'characters';
  w.appendChild(inp);
  const btn = el('button', 'btn', 'Read it'); w.appendChild(btn);
  const fb = el('p', 'feedback'); w.appendChild(fb);
  const submit = () => {
    const v = (inp.value || '').toUpperCase().replace(/[^A-Z]/g, '');
    if (v === data.answer) { markSolved('fin'); showFinaleReveal(data); }
    else { fb.textContent = 'That comes out as nonsense. Check your shift — or the row you read.'; fb.className = 'feedback err'; }
  };
  btn.onclick = submit;
  inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  s.appendChild(w);
}

function finaleReveal(s, data) {
  s.appendChild(briefBody(data.reveal));
  s.appendChild(mgNote(data.endNote));
}

function showFinaleReveal(data) {
  clear();
  const d = el('section', 'screen step');
  d.appendChild(el('div', 'seal', '✔'));
  d.appendChild(briefBody(data.reveal));
  d.appendChild(mgNote(data.endNote));
  const back = el('button', 'btn ghost', 'Play again');
  back.style.marginTop = '22px';
  back.onclick = () => { localStorage.setItem(LS, JSON.stringify({ solved: {} })); showGroupSelect(); };
  d.appendChild(back);
  APP.appendChild(d);
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
    const cls = { narration: 'narration', msg: 'msg', head: 'head', dateline: 'dateline', sign: 'sign' }[b.reg] || 'msg';
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
  if (p.products) {
    // places carry "what is made there" — needed to read the clues (envelope miasto-2-Z2)
    wrap.appendChild(el('p', 'msg', `<strong>Where they work, and what is made there:</strong>`));
    const ul = el('ul', 'brief-list');
    p.places.forEach((pl) => ul.appendChild(el('li', null, `${pl} — ${p.products[pl]}`)));
    wrap.appendChild(ul);
  } else {
    wrap.appendChild(el('p', 'msg', `<strong>${p.placeLabel}:</strong> ${p.places.join(' · ')}`));
  }
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

/* HTML reveal Z2 — gracz ma na mapie tylko zakodowane glify → pokazujemy glif celu
   (z tools/map-gen/map-data.js), żeby mógł go odnaleźć na wydruku. */
function z2RevealHTML(data) {
  const r = data.reveal;
  return `<p class="msg">${r.head}</p>`
    + `<div class="map-mark"><svg viewBox="0 0 32 32" width="80" height="80" aria-label="map mark">${r.glyph}</svg>`
    + `<div class="map-mark-cap">${r.glyphCaption}</div></div>`
    + `<p class="msg">${r.body}</p>`;
}

function z2RevealPanel(data) {
  const d = el('div', 'done', `<hr class="rule"><div class="seal small">✔</div>
    ${z2RevealHTML(data)}
    <button class="btn" id="cont2">Continue to Z3 →</button>`);
  const b = d.querySelector('#cont2'); if (b) b.onclick = () => showStage('z3');
  return d;
}

function showSuccessZ2(data) {
  clear();
  const d = el('section', 'screen done');
  d.innerHTML = `<div class="seal">✔</div><h2>The pieces fit</h2>
    ${z2RevealHTML(data)}
    <button id="cont" class="btn">Continue to Z3 →</button>`;
  APP.appendChild(d);
  d.querySelector('#cont').onclick = () => showStage('z3');
}

/* ===================== START ===================== */
(function () {
  const s = st();
  if (s.group && s.stage && STEPS[s.stage]) showStage(s.stage);
  else showGroupSelect();
})();
