# Render print-ready PDFs from the HTML sources in ./src.
# Usage: pwsh -File render.ps1            (run from prototype/print/)
#        pwsh -File render.ps1 -Force     (override the staleness guard, see below)
# Requires Chrome or Edge (Windows 11 ships Edge). Honors @media print + @page A4.
#
# ── STALENESS GUARD (read before rendering) ───────────────────────────────────
# The player-facing PROSE is authored in markdown DRAFTS, not in these HTML files.
# The HTML in ./src is a hand-ported render layer; nothing auto-syncs draft -> HTML.
# Each ./src HTML that still holds OLD prose carries a `RENDER-BLOCK` marker line.
# This script scans for that marker and ABORTS before launching the browser, so a
# render can never silently emit a stale PDF. To clear a block: port the current
# draft prose into the HTML, then delete that file's RENDER-BLOCK line. Re-add the
# marker whenever you later revise a draft's prose but haven't re-ported it yet.
# `-Force` proceeds anyway (prints a loud banner + the list) — use only knowingly.
#
# ── DRAFT HOME (assumption, pending a separate move) ──────────────────────────
# Canonical envelope drafts are moving from  prototype/*-envelope-draft.md
#                                       to   puzzles/envelopes/  (Z-numbered names).
# That move is performed by a separate agent. This script does NOT resolve draft
# paths (the guard keys off the in-HTML marker, which survives the move), so the
# rename cannot break it. After the move, treat puzzles/envelopes/ as the source
# of truth when porting prose. See prototype/print/README.md and
# mechanics/koperty-mg.md (pinned assumptions block).
# ──────────────────────────────────────────────────────────────────────────────

param(
  [switch]$Force,
  # Team color for the per-prop edge-stamp (Polish name). Prototype default = czerwony (G1).
  # MVP: assemble-prototype-bundle.ps1 derives this from -Decoder Gn via the color table.
  [string]$Color = 'czerwony'
)

$ErrorActionPreference = 'Stop'
$here = $PSScriptRoot
$src  = Join-Path $here 'src'

# Final print-ready PDFs go to the repo-root `public/` folder (single home for
# deliverables to print, across prototype -> MVP). Created on demand.
$repoRoot = (Resolve-Path (Join-Path $here '..\..')).Path
$outDir   = Join-Path $repoRoot 'public'
$outDirMG = Join-Path $outDir 'prototyp-druk\mg-i-aktorzy'
New-Item -ItemType Directory -Force -Path $outDir, $outDirMG | Out-Null

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

# source file -> output pdf
# Names follow the canonical key [frakcja]-[NN][slot]-[Zx][-typ] (see envelopes/README.md §Systematyka nazw).
# Loose props now carry their envelope position: pergamin = 04b (loot of Z3 stage), cipher list = 06a
# (Z7 finale stage, handed BEFORE the finale note 06b). The MG key is excluded from the player stamp.
$jobs = @{
  'miasto-04b-Z3-pergamin.html' = 'miasto-04b-Z3-pergamin.pdf'
  'miasto-06a-Z7-list.html'     = 'miasto-06a-Z7-list.pdf'
  'mg-Z3Z7-klucz.html'          = 'mg-Z3Z7-klucz.pdf'
  # Envelope render layer — names match envelopes/<frakcja>-<poz>-<zadanie>.md (canon).
  'wspolne-1-Z1.html'         = 'wspolne-1-Z1.pdf'
  'miasto-2-Z2.html'          = 'miasto-2-Z2.pdf'
  'miasto-2-Z2-slip.html'     = 'miasto-2-Z2-slip.pdf'
  'miasto-3-Z3.html'          = 'miasto-3-Z3.pdf'
  'miasto-4-Z3b.html'         = 'miasto-4-Z3b.pdf'
  'miasto-5-Z4.html'          = 'miasto-5-Z4.pdf'
  'miasto-6-Z7.html'          = 'miasto-6-Z7.pdf'
}

# MG operational + actor materials → public/prototyp-druk/mg-i-aktorzy/
# No stamp injection (these are GM/actor-facing, not player-facing).
$jobsMG = @{
  'mg-group-cards.html'   = 'prototyp-druk\mg-i-aktorzy\mg-karty-grup.pdf'
  'mg-master-board.html'  = 'prototyp-druk\mg-i-aktorzy\mg-tablica-statusow.pdf'
  'mg-quick-hints.html'   = 'prototyp-druk\mg-i-aktorzy\mg-szybkie-podpowiedzi.pdf'
  'jordan-quick-ref.html' = 'prototyp-druk\mg-i-aktorzy\jordan-quick-ref.pdf'
  'albrecht-quick-ref.html' = 'prototyp-druk\mg-i-aktorzy\albrecht-quick-ref.pdf'
}

# Edge-stamp prefix per source (faction letter + 2-digit envelope nr). The color suffix is the -Color
# run param. Each player HTML carries a "__STAMP__" placeholder; we replace it with "<prefix>-<color>"
# in a temp copy before printing. Sources NOT listed here (mg-Z3Z7-klucz = GM-only) render unstamped.
$stampPrefix = @{
  'wspolne-1-Z1.html'           = 'w01'
  'miasto-2-Z2.html'            = 'm02'
  'miasto-2-Z2-slip.html'       = 'm02'
  'miasto-3-Z3.html'            = 'm03'
  'miasto-4-Z3b.html'           = 'm04'
  'miasto-04b-Z3-pergamin.html' = 'm04'
  'miasto-5-Z4.html'            = 'm05'
  'miasto-06a-Z7-list.html'     = 'm06'
  'miasto-6-Z7.html'            = 'm06'
}

# ── Staleness guard: refuse to render any source still carrying a RENDER-BLOCK marker.
$blocked = foreach ($in in $jobs.Keys) {
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

$tempFiles = @()
foreach ($in in $jobs.Keys) {
  $inPath  = Join-Path $src $in
  $outPath = Join-Path $outDir $jobs[$in]

  # Stamp injection: if this source has a prefix + still holds the __STAMP__ placeholder, render a
  # temp copy with "<prefix>-<color>" substituted. Keeps the source files color-agnostic (one set of
  # HTML, N colors at render time). Sources without a prefix (GM key) render straight from $inPath.
  $renderPath = $inPath
  if ($stampPrefix.ContainsKey($in)) {
    $html = Get-Content -Raw -LiteralPath $inPath
    if ($html -match '__STAMP__') {
      $stamp = "{0}-{1}" -f $stampPrefix[$in], $Color
      $tmp = Join-Path $src (".stamped-{0}" -f $in)
      ($html -replace '__STAMP__', $stamp) | Set-Content -NoNewline -LiteralPath $tmp -Encoding UTF8
      $renderPath = $tmp
      $tempFiles += $tmp
    }
  }

  $uri = ([System.Uri]$renderPath).AbsoluteUri
  # --no-sandbox: Chrome's own sandbox is blocked in restricted/sandboxed shells.
  # NO --user-data-dir on purpose: headless then uses an ephemeral throwaway profile
  #   and exits cleanly after writing the PDF. A custom user-data-dir triggers the
  #   fresh profile's GCM/sync registration, which keeps the process alive (hang).
  & $browser --headless --no-sandbox --disable-gpu --no-pdf-header-footer `
    --print-to-pdf="$outPath" $uri | Out-Null
  if (Test-Path $outPath) {
    "{0,-30} -> {1,8:N0} bytes" -f $jobs[$in], (Get-Item $outPath).Length
  } else {
    Write-Warning "FAILED: $($jobs[$in])"
  }
}

# Clean up temp stamped copies (leave the source HTML pristine with the __STAMP__ placeholder).
foreach ($t in $tempFiles) { if (Test-Path $t) { Remove-Item -LiteralPath $t -Force } }

# Render MG operational + actor materials (no stamp, no staleness guard — these are authored directly in HTML).
Write-Host ''
Write-Host 'Rendering MG/actor materials...' -ForegroundColor Cyan
foreach ($in in $jobsMG.Keys) {
  $inPath  = Join-Path $src $in
  if (-not (Test-Path $inPath)) { Write-Warning "MISSING source: $in"; continue }
  $outPath = Join-Path $outDir $jobsMG[$in]
  $uri = ([System.Uri]$inPath).AbsoluteUri
  & $browser --headless --no-sandbox --disable-gpu --no-pdf-header-footer `
    --print-to-pdf="$outPath" $uri | Out-Null
  if (Test-Path $outPath) {
    "{0,-40} -> {1,8:N0} bytes" -f $jobsMG[$in], (Get-Item $outPath).Length
  } else {
    Write-Warning "FAILED: $($jobsMG[$in])"
  }
}

Write-Host "Done."
