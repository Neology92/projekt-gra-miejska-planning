# Assemble the full prototype print bundle into one folder: public/prototyp-druk/
# Renders fresh PDFs (via render.ps1), then collects them into ordered, print-ready subfolders.
#
# Usage: pwsh -File assemble-prototype-bundle.ps1            (decoder G1 by default)
#        pwsh -File assemble-prototype-bundle.ps1 -Decoder G3
#        pwsh -File assemble-prototype-bundle.ps1 -SkipRender   (reuse existing public/*.pdf)
#
# Output layout (so Oskar prints the whole folder; Pati gets only gracz/ + the checklist):
#   public/prototyp-druk/
#     SPRAWDZENIE-PATI.md     <- spoiler-free checklist (separate write step, not this script)
#     gracz/   01_..07_       <- player-facing props, numbered in play order
#     mg-tylko/               <- GM-only: answer key (SPOILER — never give to a tester)

param(
  [string]$Decoder = 'G1',
  [switch]$SkipRender
)

$ErrorActionPreference = 'Stop'
$here     = $PSScriptRoot
$repoRoot = (Resolve-Path (Join-Path $here '..\..')).Path
$public   = Join-Path $repoRoot 'public'
$bundle   = Join-Path $public  'prototyp-druk'
$gracz    = Join-Path $bundle  'gracz'
$mgOnly   = Join-Path $bundle  'mg-tylko'

# 1 — fresh render of all envelope/prop PDFs into public/ (honours the staleness guard).
if (-not $SkipRender) {
  Write-Host "Rendering source PDFs (render.ps1)..." -ForegroundColor Cyan
  & (Join-Path $here 'render.ps1')
  if ($LASTEXITCODE) { throw "render.ps1 failed (exit $LASTEXITCODE) — bundle aborted." }
}

# 2 — clean + recreate the bundle folders (idempotent).
if (Test-Path $bundle) { Remove-Item $bundle -Recurse -Force }
New-Item -ItemType Directory -Force -Path $gracz, $mgOnly | Out-Null

# 3 — player-facing props, numbered in PLAY ORDER (step = open order).
# Neutral target names ON PURPOSE: filenames must not spoil a puzzle's answer (no "Jordan",
# "flisak" etc. that would give away a solution before the tester reaches it). Source names
# follow the envelopes/<frakcja>-<poz>-<zadanie> convention (renamed 2026-06-02).
$decoderPdf = Join-Path $public ("decoders\decoder-{0}.pdf" -f $Decoder)
$playerMap = [ordered]@{
  'wspolne-1-Z1.pdf'         = '01a_koperta.pdf'
  'maps\map.pdf'             = '01b_mapa.pdf'
  'miasto-2-Z2.pdf'          = '02a_koperta.pdf'
  'miasto-2-Z2-slip.pdf'     = '02b_kartka.pdf'
  'miasto-3-Z3.pdf'          = '03_koperta.pdf'
  'miasto-4-Z3b.pdf'         = '04a_koperta.pdf'
  'z3-pergamin-lista-tr.pdf' = '04b_pergamin.pdf'
  'miasto-5-Z4.pdf'          = '05_koperta.pdf'
  'z7-przechwycony-list.pdf' = '06_list.pdf'
  'miasto-6-Z7.pdf'          = '07_koperta.pdf'
}

$missing = @()
foreach ($entry in $playerMap.GetEnumerator()) {
  $srcPath = Join-Path $public $entry.Key
  if (Test-Path $srcPath) { Copy-Item $srcPath (Join-Path $gracz $entry.Value) -Force }
  else { $missing += $entry.Key }
}
# decoder is named by -Decoder, copied separately.
if (Test-Path $decoderPdf) { Copy-Item $decoderPdf (Join-Path $gracz '01c_deszyfrownik.pdf') -Force }
else { $missing += ("decoders\decoder-{0}.pdf" -f $Decoder) }

# 4 — GM-only answer key (SPOILER): kept in its own folder, clearly fenced off from the tester.
$keySrc = Join-Path $public 'z3-z7-klucz-mg.pdf'
if (Test-Path $keySrc) { Copy-Item $keySrc (Join-Path $mgOnly 'klucz-Z3-Z7.pdf') -Force }
else { $missing += 'z3-z7-klucz-mg.pdf' }

# 5 — report.
Write-Host ''
Write-Host "Bundle assembled → $bundle" -ForegroundColor Green
Write-Host ("  gracz/    : {0} files" -f (Get-ChildItem $gracz -File).Count)
Write-Host ("  mg-tylko/ : {0} files (SPOILER — do not give to Pati)" -f (Get-ChildItem $mgOnly -File).Count)
Write-Host ("  decoder   : {0}" -f $Decoder)
if ($missing.Count) {
  Write-Host ''
  Write-Host "  MISSING (render first, or check names):" -ForegroundColor Yellow
  $missing | ForEach-Object { Write-Host ("   - {0}" -f $_) -ForegroundColor Yellow }
}
Write-Host ''
Write-Host "Reminder: SPRAWDZENIE-PATI.md is written separately and lives in the bundle root." -ForegroundColor DarkGray
