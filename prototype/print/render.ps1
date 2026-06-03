# Render print-ready PDFs from the HTML sources in ./src.
# Usage: pwsh -File render.ps1            (run from prototype/print/)
#        pwsh -File render.ps1 -Force     (override the staleness guard, see below)
# Requires Chrome or Edge (Windows 11 ships Edge). Honors @media print + @page A4.
#
# ── PER-GROUP OUTPUT (canon 2026-06-03, Oskar) ────────────────────────────────
# public/ holds ONE PDF per (document × group colour): [frakcja]-[kolor]-[nr][slot]-[Zx][-typ].pdf
# One HTML source → N renders (looped over the faction's colours), each with its own edge-stamp.
# A shared brief (e.g. miasto-3-Z3) therefore emits 5 byte-near-identical PDFs (5 TR groups),
# differing only by the faint stamp + the colour in the filename. Deliberate: 1 file ↔ 1 envelope,
# zero ambiguity at packing time. Source .html stays single (NOT split per colour).
# Canon: envelopes/README.md §Systematyka nazw. Colour budget for print: public/_INSTRUKCJA-DRUKU.md.
#
# ── STALENESS GUARD (read before rendering) ───────────────────────────────────
# The player-facing PROSE is authored in markdown DRAFTS, not in these HTML files.
# The HTML in ./src is a hand-ported render layer; nothing auto-syncs draft -> HTML.
# Each ./src HTML that still holds OLD prose carries a `RENDER-BLOCK` marker line.
# This script scans for that marker and ABORTS before launching the browser, so a
# render can never silently emit a stale PDF. To clear a block: port the current
# draft prose into the HTML, then delete that file's RENDER-BLOCK line.
# `-Force` proceeds anyway (prints a loud banner) — use only knowingly.
# ──────────────────────────────────────────────────────────────────────────────

param(
  [switch]$Force
)

$ErrorActionPreference = 'Stop'
$here = $PSScriptRoot
$src  = Join-Path $here 'src'

# Final print-ready PDFs go to the repo-root `public/` folder (FLAT — no subfolders).
$repoRoot = (Resolve-Path (Join-Path $here '..\..')).Path
$outDir   = Join-Path $repoRoot 'public'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# Locate a Chromium-based browser.
$candidates = @(
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "No Chrome/Edge found." }
Write-Host "Browser: $browser"

# Canonical ASCII colour sets (G1-G5 = TR, G6-G10 = KZ). Source of truth: envelopes/README.md.
$TR_COLORS  = @('czerwony','pomaranczowy','zolty','zielony','turkusowy')
$KZ_COLORS  = @('niebieski','fioletowy','bialy','brazowy','czarny')
$ALL_COLORS = $TR_COLORS + $KZ_COLORS

# ── PLAYER jobs ───────────────────────────────────────────────────────────────
# Src   = HTML in ./src ; Name = output template ({c} -> colour) ; Stamp = edge-stamp prefix
# ([faction letter][NN]) ; Colors = which groups get this card.
# Output -> public/<Name with {c}>.pdf , stamp = "<Stamp>-<colour>".
$playerJobs = @(
  @{ Src='wspolne-1-Z1.html';           Name='wspolne-{c}-1-Z1';            Stamp='w01'; Colors=$ALL_COLORS }
  @{ Src='miasto-2-Z2.html';            Name='miasto-{c}-2-Z2';             Stamp='m02'; Colors=$TR_COLORS }
  @{ Src='miasto-2-Z2-slip.html';       Name='miasto-{c}-2-Z2-slip';        Stamp='m02'; Colors=$TR_COLORS }
  @{ Src='miasto-3-Z3.html';            Name='miasto-{c}-3-Z3';             Stamp='m03'; Colors=$TR_COLORS }
  @{ Src='miasto-4-Z3b.html';           Name='miasto-{c}-4-Z3b';            Stamp='m04'; Colors=$TR_COLORS }
  @{ Src='miasto-04b-Z3-pergamin.html'; Name='miasto-{c}-04b-Z3-pergamin';  Stamp='m04'; Colors=$TR_COLORS }
  @{ Src='miasto-5-Z4.html';            Name='miasto-{c}-5-Z4';             Stamp='m05'; Colors=@('czerwony') }            # opt A: G1
  @{ Src='miasto-5-Z5.html';            Name='miasto-{c}-5-Z5';             Stamp='m05'; Colors=@('pomaranczowy','zolty') } # opt B: G2,G3
  @{ Src='miasto-6-Z7.html';            Name='miasto-{c}-6-Z7';             Stamp='m06'; Colors=$TR_COLORS }
  @{ Src='miasto-06a-Z7-list.html';     Name='miasto-{c}-06a-Z7-list';      Stamp='m06'; Colors=$TR_COLORS }
  @{ Src='krzyzacy-2-Z2.html';           Name='krzyzacy-{c}-2-Z2';            Stamp='k02'; Colors=$KZ_COLORS }
  @{ Src='krzyzacy-2-Z2-slip.html';     Name='krzyzacy-{c}-2-Z2-slip';      Stamp='k02'; Colors=$KZ_COLORS }
  @{ Src='krzyzacy-3-Z3Z.html';         Name='krzyzacy-{c}-3-Z3Z';          Stamp='k03'; Colors=$KZ_COLORS }
  @{ Src='krzyzacy-4-Z8.html';          Name='krzyzacy-{c}-4-Z8';           Stamp='k04'; Colors=@('niebieski','fioletowy') } # opt A: G6,G7
  @{ Src='krzyzacy-4-Z9.html';          Name='krzyzacy-{c}-4-Z9';           Stamp='k04'; Colors=@('bialy') }                # opt B: G8
  @{ Src='krzyzacy-4-Z10.html';         Name='krzyzacy-{c}-4-Z10';          Stamp='k04'; Colors=@('brazowy','czarny') }     # opt C: G9,G10
  @{ Src='krzyzacy-5-Z11.html';         Name='krzyzacy-{c}-5-Z11';          Stamp='k05'; Colors=$KZ_COLORS }
  # Shared piernik station props — ONE source serves BOTH Z5 (TR G2,G3) and Z9 (KZ G8) -> two destinations.
  @{ Src='z5z9-przepis.html';           Name='miasto-{c}-5-Z5-przepis';     Stamp='m05'; Colors=@('pomaranczowy','zolty') }
  @{ Src='z5z9-przepis.html';           Name='krzyzacy-{c}-4-Z9-przepis';   Stamp='k04'; Colors=@('bialy') }
  @{ Src='z5z9-rozpiska.html';          Name='miasto-{c}-5-Z5-rozpiska';    Stamp='m05'; Colors=@('pomaranczowy','zolty') }
  @{ Src='z5z9-rozpiska.html';          Name='krzyzacy-{c}-4-Z9-rozpiska';  Stamp='k04'; Colors=@('bialy') }
)

# ── MG / ACTOR jobs ───────────────────────────────────────────────────────────
# No colour, no stamp (not player-facing). Audience prefix in the name (mg- / aktor-). -> public/ root.
$mgJobs = [ordered]@{
  'mg-Z3Z7-klucz.html'      = 'mg-Z3Z7-klucz.pdf'
  'mg-Z5Z9-klucz.html'      = 'mg-Z5Z9-klucz.pdf'
  'mg-group-cards.html'     = 'mg-karty-grup.pdf'
  'mg-master-board.html'    = 'mg-tablica-statusow.pdf'
  'mg-quick-hints.html'     = 'mg-szybkie-podpowiedzi.pdf'
  'jordan-quick-ref.html'   = 'aktor-jordan-quick-ref.pdf'
  'albrecht-quick-ref.html' = 'aktor-albrecht-quick-ref.pdf'
}

# ── Staleness guard: refuse to render any player source still carrying a RENDER-BLOCK marker.
$uniqueSrc = $playerJobs.Src | Select-Object -Unique
$blocked = foreach ($in in $uniqueSrc) {
  $inPath = Join-Path $src $in
  if (-not (Test-Path $inPath)) { continue }
  $marker = Select-String -Path $inPath -SimpleMatch -Pattern 'RENDER-BLOCK' -List
  if ($marker) {
    [pscustomobject]@{ File = $in; Reason = ($marker.Line -replace '^\s*<!--\s*', '' -replace '\s*-->\s*$', '') }
  }
}
if ($blocked) {
  Write-Host ''
  Write-Host '  ============================================================' -ForegroundColor Yellow
  Write-Host '   STALE RENDER SOURCES — prose not yet ported from drafts' -ForegroundColor Yellow
  Write-Host '  ============================================================' -ForegroundColor Yellow
  foreach ($b in $blocked) {
    Write-Host ("   - {0}" -f $b.File) -ForegroundColor Yellow
    Write-Host ("       {0}" -f $b.Reason) -ForegroundColor DarkGray
  }
  Write-Host ''
  if (-not $Force) {
    throw "Render aborted: $($blocked.Count) source(s) still hold a RENDER-BLOCK marker. " +
          "Port the current draft prose into each HTML and delete its marker line, " +
          "or re-run with -Force to render the stale text knowingly."
  }
  Write-Host '  -Force set: rendering STALE sources anyway. Output PDFs will NOT match the drafts.' -ForegroundColor Red
  Write-Host ''
}

function Invoke-ChromePdf {
  param([string]$Uri, [string]$OutPath)
  # --no-sandbox: Chrome's own sandbox is blocked in restricted shells.
  # NO --user-data-dir on purpose (Chrome 147 headless hangs on a fresh profile's sync registration).
  & $browser --headless --no-sandbox --disable-gpu --no-pdf-header-footer `
    --print-to-pdf="$OutPath" $Uri | Out-Null
}

# ── Render player jobs (per colour, stamp-injected) ───────────────────────────
$tempFiles = @()
$nPlayer = 0
Write-Host ''
Write-Host 'Rendering player cards (per group colour)...' -ForegroundColor Cyan
foreach ($job in $playerJobs) {
  $inPath = Join-Path $src $job.Src
  if (-not (Test-Path $inPath)) { Write-Warning "MISSING source: $($job.Src)"; continue }
  $html = Get-Content -Raw -LiteralPath $inPath
  foreach ($color in $job.Colors) {
    $outName = $job.Name -replace '\{c\}', $color
    $outPath = Join-Path $outDir ($outName + '.pdf')
    $renderPath = $inPath
    if ($html -match '__STAMP__') {
      $stamp = "{0}-{1}" -f $job.Stamp, $color
      $tmp = Join-Path $src (".stamped-{0}-{1}" -f $color, $job.Src)
      ($html -replace '__STAMP__', $stamp) | Set-Content -NoNewline -LiteralPath $tmp -Encoding UTF8
      $renderPath = $tmp
      $tempFiles += $tmp
    } else {
      Write-Warning "no __STAMP__ in $($job.Src) -> $outName rendered unstamped"
    }
    Invoke-ChromePdf -Uri ([System.Uri]$renderPath).AbsoluteUri -OutPath $outPath
    if (Test-Path $outPath) {
      $nPlayer++
      "{0,-34} -> {1,8:N0} bytes" -f ($outName + '.pdf'), (Get-Item $outPath).Length
    } else {
      Write-Warning "FAILED: $outName.pdf"
    }
  }
}
foreach ($t in $tempFiles) { if (Test-Path $t) { Remove-Item -LiteralPath $t -Force } }

# ── Render MG / actor materials (no stamp) ────────────────────────────────────
Write-Host ''
Write-Host 'Rendering MG / actor materials...' -ForegroundColor Cyan
$nMg = 0
foreach ($in in $mgJobs.Keys) {
  $inPath = Join-Path $src $in
  if (-not (Test-Path $inPath)) { Write-Warning "MISSING source: $in"; continue }
  $outPath = Join-Path $outDir $mgJobs[$in]
  Invoke-ChromePdf -Uri ([System.Uri]$inPath).AbsoluteUri -OutPath $outPath
  if (Test-Path $outPath) {
    $nMg++
    "{0,-34} -> {1,8:N0} bytes" -f $mgJobs[$in], (Get-Item $outPath).Length
  } else {
    Write-Warning "FAILED: $($mgJobs[$in])"
  }
}

Write-Host ''
Write-Host ("Done. {0} player PDF(s) + {1} MG/actor PDF(s) -> {2}" -f $nPlayer, $nMg, $outDir) -ForegroundColor Green
