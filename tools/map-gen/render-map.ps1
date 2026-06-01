# render-map.ps1 — headless Chrome: PNG + PDF (A4 landscape) for a navigation map.
# General map-gen engine; map-data.js currently holds the Z1 prototype data.
#
# Usage:
#   pwsh -File render-map.ps1                       # group 'all', clean style
#   pwsh -File render-map.ps1 -Group G3             # one group's 9 marks + fill-in key
#   pwsh -File render-map.ps1 -Style parchment
#   pwsh -File render-map.ps1 -Compare              # clean + parchment side-by-side
#
# Requirements: network (Leaflet CDN + CARTO tiles). One-time pre-game render.
# Output: ../../prototype/maps/z1-<group>.png + .pdf  (e.g. z1-all.png, z1-G3.png)

param(
  [string]$Style  = 'clean',  # clean | parchment
  [string]$Group  = 'all',    # all | G1..G10
  [switch]$Compare            # render both styles for aesthetics check
)

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path (Resolve-Path (Join-Path $here '..\..')) 'prototype\maps'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# --- Locate Chrome or Edge ---
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

# --- Layout constants ---
# A4 landscape at ~100 dpi: 297mm/25.4 * 100 = 1169.3 ≈ 1170 px wide
# With --force-device-scale-factor=3: output is 3510×2481 ≈ 300 dpi
$W = 1170
$H = 827

# --- Render function ---
function Render-Map {
  param([string]$StyleName)

  $htmlPath = Join-Path $here 'map.html'
  $suffix   = if ($StyleName -ne 'clean') { "-$StyleName" } else { '' }
  $uri      = ([System.Uri]$htmlPath).AbsoluteUri + "?style=$StyleName&group=$Group"
  $pngOut   = Join-Path $outDir "z1-$Group$suffix.png"
  $pdfOut   = Join-Path $outDir "z1-$Group$suffix.pdf"

  Write-Host "  Rendering ($StyleName, $Group)..." -NoNewline

  if (Test-Path $pngOut) { Remove-Item $pngOut -Force -ErrorAction SilentlyContinue }

  # Phase 1: screenshot PNG. Fallback for tile load: 10s timeout baked into map.html.
  # NOTE: do NOT add --user-data-dir — a fresh profile breaks --screenshot on
  # Chrome 147. The screenshot child flushes asynchronously, so we POLL for the
  # file to appear & stabilise rather than trusting an immediate Test-Path.
  $args1 = @(
    '--headless'
    '--no-sandbox'
    '--disable-gpu'
    '--disable-web-security'            # allows file:// → CDN fetch
    "--force-device-scale-factor=3"
    "--window-size=$W,$H"
    "--screenshot=$pngOut"
    '--run-all-compositor-stages-before-draw'
    $uri
  )
  & $browser @args1 2>$null

  # Wait for async screenshot flush (size must stabilise), up to 25s.
  $deadline = (Get-Date).AddSeconds(25)
  $lastLen  = -1
  do {
    Start-Sleep -Milliseconds 400
    $len = if (Test-Path $pngOut) { (Get-Item $pngOut).Length } else { 0 }
    if ($len -gt 0 -and $len -eq $lastLen) { break }
    $lastLen = $len
  } until ((Get-Date) -gt $deadline)

  $pngOk = (Test-Path $pngOut) -and ((Get-Item $pngOut).Length -gt 0)

  if (-not $pngOk) {
    Write-Host " PNG FAILED" -ForegroundColor Red
    return
  }

  $pngKb = [math]::Round((Get-Item $pngOut).Length / 1KB)

  # Phase 2: PNG → PDF A4 landscape via minimal HTML wrapper
  $wrapperHtml = @"
<!DOCTYPE html><html><head><style>
@page{size:297mm 210mm;margin:0}
html,body{margin:0;padding:0;width:297mm;height:210mm;overflow:hidden}
img{display:block;width:297mm;height:210mm;object-fit:fill}
</style></head><body><img src="$pngOut"/></body></html>
"@
  $wrapperPath = Join-Path $env:TEMP "z1-wrap$suffix.html"
  Set-Content -Path $wrapperPath -Value $wrapperHtml -Encoding UTF8

  if (Test-Path $pdfOut) { Remove-Item $pdfOut -Force -ErrorAction SilentlyContinue }
  $args2 = @(
    '--headless'
    '--no-sandbox'
    '--disable-gpu'
    "--print-to-pdf=$pdfOut"
    '--no-pdf-header-footer'
    ([System.Uri]$wrapperPath).AbsoluteUri
  )
  & $browser @args2 2>$null

  $deadline2 = (Get-Date).AddSeconds(20)
  $lastPdf   = -1
  do {
    Start-Sleep -Milliseconds 400
    $plen = if (Test-Path $pdfOut) { (Get-Item $pdfOut).Length } else { 0 }
    if ($plen -gt 0 -and $plen -eq $lastPdf) { break }
    $lastPdf = $plen
  } until ((Get-Date) -gt $deadline2)

  Remove-Item $wrapperPath -ErrorAction SilentlyContinue

  $pdfOk = (Test-Path $pdfOut) -and ((Get-Item $pdfOut).Length -gt 0)
  $pdfKb = if ($pdfOk) { [math]::Round((Get-Item $pdfOut).Length / 1KB) } else { 0 }

  $pngLabel = "{0,6} KB" -f $pngKb
  $pdfLabel = if ($pdfOk) { "{0,6} KB" -f $pdfKb } else { "  FAILED" }
  Write-Host " PNG $pngLabel  PDF $pdfLabel" -ForegroundColor $(if ($pdfOk) { 'Green' } else { 'Yellow' })
}

# --- Main ---
$styles = if ($Compare) { @('clean','parchment') } else { @($Style) }

Write-Host "`nMap Render ($Group) — $($styles.Count) job(s)`n"
foreach ($s in $styles) { Render-Map -StyleName $s }

Write-Host "`nDone. Output: $outDir"
Write-Host ""
Write-Host "NEXT STEPS:"
Write-Host "  1. Open prototype/maps/z1-$Group.png at 100% zoom — check:"
Write-Host "     - building edges sharp (not pixelated)"
Write-Host "     - the group's marks on the map + matching rows in the KEY"
Write-Host "     - Rynek inset (right rail) shows the Old-Town cluster, pins separated"
Write-Host "  2. Open prototype/maps/z1-$Group.pdf at 300% — no blur on raster"
Write-Host "  3. If tiles are grey/missing: re-run (CDN timeout on first run)"
