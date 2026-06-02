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

param([switch]$Force)

$ErrorActionPreference = 'Stop'
$here = $PSScriptRoot
$src  = Join-Path $here 'src'

# Final print-ready PDFs go to the repo-root `public/` folder (single home for
# deliverables to print, across prototype -> MVP). Created on demand.
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

# source file -> output pdf
$jobs = @{
  'z3-pergamin-lista-tr.html' = 'z3-pergamin-lista-tr.pdf'
  'z7-przechwycony-list.html' = 'z7-przechwycony-list.pdf'
  'z3-z7-klucz-mg.html'       = 'z3-z7-klucz-mg.pdf'
  # Envelope render layer — names match envelopes/<frakcja>-<poz>-<zadanie>.md (canon).
  'wspolne-1-Z1.html'         = 'wspolne-1-Z1.pdf'
  'miasto-2-Z2.html'          = 'miasto-2-Z2.pdf'
  'miasto-2-Z2-slip.html'     = 'miasto-2-Z2-slip.pdf'
  'miasto-3-Z3.html'          = 'miasto-3-Z3.pdf'
  'miasto-4-Z3b.html'         = 'miasto-4-Z3b.pdf'
  'miasto-5-Z4.html'          = 'miasto-5-Z4.pdf'
  'miasto-6-Z7.html'          = 'miasto-6-Z7.pdf'
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

foreach ($in in $jobs.Keys) {
  $inPath  = Join-Path $src $in
  $outPath = Join-Path $outDir $jobs[$in]
  $uri = ([System.Uri]$inPath).AbsoluteUri
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

Write-Host "Done."
