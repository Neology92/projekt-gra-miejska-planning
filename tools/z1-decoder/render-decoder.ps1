# render-decoder.ps1 — headless Chrome: PDF (A4 portrait) of the Z1 decoder card per group.
# Pure-vector page (inline glyphs + <img> SVG icons) → direct print-to-pdf, no PNG phase.
#
# Usage:
#   pwsh -File render-decoder.ps1                 # all groups G1..G10
#   pwsh -File render-decoder.ps1 -Group G1       # one group (prototype / review)
#
# Output: ../../public/decoders/decoder-G1.pdf … decoder-G10.pdf
# Data: glyphs + edges from ../map-gen/map-data.js (Z1_GROUPS order = edges; do not reorder there).

param(
  [string]$Group = 'all'    # all | G1..G10
)

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path (Resolve-Path (Join-Path $here '..\..')) 'public\decoders'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# --- Locate Chrome or Edge (same probe as render-map.ps1) ---
$candidates = @(
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'No Chrome/Edge found.' }
Write-Host "Browser: $browser"

$groups = if ($Group -eq 'all') { 1..10 | ForEach-Object { "G$_" } } else { @($Group) }

function Render-Decoder {
  param([string]$G)

  $htmlPath = Join-Path $here 'decoder.html'
  $uri      = ([System.Uri]$htmlPath).AbsoluteUri + "?group=$G"
  $pdfOut   = Join-Path $outDir "decoder-$G.pdf"

  Write-Host "  Rendering $G..." -NoNewline
  if (Test-Path $pdfOut) { Remove-Item $pdfOut -Force -ErrorAction SilentlyContinue }

  # NO --user-data-dir (breaks headless on Chrome 147). --disable-web-security +
  # --allow-file-access-from-files so the <img> SVG icons load over file://.
  $args = @(
    '--headless'
    '--no-sandbox'
    '--disable-gpu'
    '--disable-web-security'
    '--allow-file-access-from-files'
    '--no-pdf-header-footer'
    "--print-to-pdf=$pdfOut"
    '--run-all-compositor-stages-before-draw'
    $uri
  )
  & $browser @args 2>$null

  # Poll for async PDF flush (size must stabilise), up to 20s.
  $deadline = (Get-Date).AddSeconds(20)
  $last = -1
  do {
    Start-Sleep -Milliseconds 400
    $len = if (Test-Path $pdfOut) { (Get-Item $pdfOut).Length } else { 0 }
    if ($len -gt 0 -and $len -eq $last) { break }
    $last = $len
  } until ((Get-Date) -gt $deadline)

  if ((Test-Path $pdfOut) -and ((Get-Item $pdfOut).Length -gt 0)) {
    Write-Host (" {0,7:N0} bytes" -f (Get-Item $pdfOut).Length) -ForegroundColor Green
  } else {
    Write-Host " FAILED" -ForegroundColor Red
  }
}

Write-Host "`nDecoder Render — $($groups.Count) job(s)`n"
foreach ($g in $groups) { Render-Decoder -G $g }

Write-Host "`nDone. Output: $outDir"
