/* ============================================================================
   app.js — silnik POC hybrydy (etap Z1). Czysty JS, bez zależności.
   Cykl etapu (mechanics/hybryda-online.md):
     [gate] kod wejścia (MG/AKTOR/PREV)
        → [brief] narracja online + ramka rekwizytu (spec §C)
        → walidacja wyjścia (PREV: apka liczy / AKTOR|MG: kod z zewnątrz)
        → [done] odblokowanie meta-kartki (spec §D) + kod/krok następny
   Stan trzymany w localStorage → odporność na odświeżenie / utratę sieci w terenie.
   ============================================================================ */

const STAGE = STAGES[0]; // POC: Z1
const LS_KEY = 'hybryda-poc:' + STAGE.id;

/* --- normalizacja odpowiedzi: lower, bez diakrytyków, bez interpunkcji --- */
function norm(s){
  return (s || '')
    .toLowerCase()
    .replace(/ł/g, 'l')                  // ł nie rozkłada się w NFD — mapuj ręcznie
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // usuń znaki łączące (ą,ó,ż,ś…)
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchStep(input, step){
  const n = norm(input);
  if(!n) return false;
  if(n === norm(step.canonical)) return true;
  return step.aliases.some(a => norm(a) === n);
}

/* --- persystencja stanu --- */
function loadState(){
  try{ return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveState(patch){
  const s = Object.assign(loadState(), patch);
  try{ localStorage.setItem(LS_KEY, JSON.stringify(s)); }catch(e){}
  return s;
}

/* --- router ekranów --- */
function show(id){
  document.querySelectorAll('.screen').forEach(el => el.classList.toggle('active', el.id === id));
  window.scrollTo(0, 0);
}

/* ===================== BRAMA KODU ===================== */
function initGate(){
  const input = document.getElementById('gate-code');
  const fb = document.getElementById('gate-feedback');
  document.getElementById('gate-go').addEventListener('click', () => {
    const ok = STAGE.enter.codes.some(c => norm(c) === norm(input.value));
    if(ok){
      saveState({ entered:true });
      renderBrief();
      show('screen-brief');
    } else {
      fb.textContent = 'That code opens nothing here. Ask the Game Master.';
      fb.className = 'feedback err';
    }
  });
  input.addEventListener('keydown', e => { if(e.key === 'Enter') document.getElementById('gate-go').click(); });
}

/* ===================== BRIEF + RAMKA REKWIZYTU ===================== */
function renderBrief(){
  document.getElementById('brief-tag').textContent = STAGE.id;
  document.getElementById('brief-title').textContent = STAGE.title;

  // narracja
  const body = document.getElementById('brief-body');
  body.innerHTML = '';
  STAGE.brief.forEach(b => {
    if(b.reg === 'rule'){ body.appendChild(document.createElement('hr')).className = 'rule'; return; }
    if(b.reg === 'list'){
      const ol = document.createElement('ol'); ol.className = 'brief-list';
      b.items.forEach(t => { const li = document.createElement('li'); li.innerHTML = t; ol.appendChild(li); });
      body.appendChild(ol); return;
    }
    const p = document.createElement('p');
    p.className = ({ narration:'narration', msg:'msg', head:'head', dateline:'dateline' })[b.reg] || 'msg';
    if(b.reg === 'head' || b.reg === 'dateline') p.classList.add(b.reg);
    p.innerHTML = b.html;
    body.appendChild(p);
  });

  // ramka rekwizytu (spec §C) — fail-safe „masz to mieć"
  const prop = STAGE.prop;
  document.getElementById('prop-body').innerHTML =
    `<ul>
       <li><strong>What:</strong> ${prop.what}</li>
       <li><strong>From:</strong> ${prop.from}</li>
       <li><strong>Where:</strong> ${prop.where}</li>
     </ul>
     <p class="narration" style="margin:.4em 0 0;font-size:.92rem;">Don’t have it? Flag the Game Master before you go on.</p>`;

  // walidacja wyjścia
  renderSolve();
  renderMetaCard();
}

/* ===================== WALIDACJA PREV (4 miejsca) ===================== */
function renderSolve(){
  const wrap = document.getElementById('solve-fields');
  wrap.innerHTML = '';
  document.getElementById('solve-prompt').textContent = STAGE.exit.prompt;
  STAGE.exit.steps.forEach((_, i) => {
    const row = document.createElement('div'); row.className = 'chain-input';
    row.innerHTML = `<span class="n">${i+1}.</span>
      <input type="text" autocomplete="off" autocapitalize="words"
             data-i="${i}" placeholder="place ${i+1}">`;
    wrap.appendChild(row);
  });

  document.getElementById('solve-check').addEventListener('click', checkChain);
}

function checkChain(){
  const inputs = [...document.querySelectorAll('#solve-fields input')];
  const fb = document.getElementById('solve-feedback');
  let allOk = true;
  inputs.forEach((inp, i) => {
    const ok = matchStep(inp.value, STAGE.exit.steps[i]);
    inp.classList.toggle('ok', ok);
    inp.classList.toggle('bad', !ok && inp.value.trim() !== '');
    if(!ok) allOk = false;
  });
  if(allOk){
    fb.textContent = 'The chain holds. Your road runs on.';
    fb.className = 'feedback ok';
    saveState({ solved:true });
    unlockMeta();
    setTimeout(showDone, 700);
  } else {
    fb.textContent = 'One of these marks is wrong, or out of order. Walk it back.';
    fb.className = 'feedback err';
  }
}

/* ===================== META-CARD (bramkowanie spoilerowe §D) ===================== */
function renderMetaCard(){
  const card = document.getElementById('meta-card');
  document.getElementById('meta-title').textContent = STAGE.metaCard.title;
  document.getElementById('meta-body').textContent = STAGE.metaCard.body;
  const solved = loadState().solved;
  card.classList.toggle('locked', !solved);
  document.getElementById('meta-lock-note').style.display = solved ? 'none' : 'flex';
}
function unlockMeta(){
  const card = document.getElementById('meta-card');
  card.classList.remove('locked');
  document.getElementById('meta-lock-note').style.display = 'none';
}

/* ===================== EKRAN UKOŃCZENIA ===================== */
function showDone(){
  document.getElementById('done-next').textContent = STAGE.next.note;
  show('screen-done');
}

/* ===================== START ===================== */
window.addEventListener('DOMContentLoaded', () => {
  initGate();
  // wznowienie: jeśli gracz już wszedł na etap, pokaż brief od razu
  const st = loadState();
  if(st.entered){ renderBrief(); show('screen-brief'); }
  else show('screen-gate');

  // reset (przydatne przy demie / re-testach)
  document.getElementById('reset').addEventListener('click', () => {
    localStorage.removeItem(LS_KEY); location.reload();
  });

  // PWA / offline (spec §D) — rejestrujemy SW tylko po http(s), nie po file://
  if('serviceWorker' in navigator && location.protocol.startsWith('http')){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
});
