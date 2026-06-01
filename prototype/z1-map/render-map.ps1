# render-map.ps1 — headless Chrome: PNG + PDF (A4 landscape) for Z1 navigation map
#
# Usage:
#   pwsh -File render-map.ps1              # render clean style
#   pwsh -File render-map.ps1 -Style parchment
#   pwsh -File render-map.ps1 -Compare     # clean + parchment side-by-side
#
# Requirements: network (Leaflet CDN + CARTO tiles). One-time pre-game render.
# Output: output/z1-map.png + output/z1-map.pdf  (or z1-map-parchment.*)

param(
  [string]$Style  = 'clean',  # clean | parchment
  [switch]$Compare            # render both styles for aesthetics check
)

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path $here 'output'
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

  $htmlPath = Join-Path $here 'z1-map.html'
  $suffix   = if ($StyleName -ne 'clean') { "-$StyleName" } else { '' }
  $uri      = ([System.Uri]$htmlPath).AbsoluteUri + "?style=$StyleName"
  $pngOut   = Join-Path $outDir "z1-map$suffix.png"
  $pdfOut   = Join-Path $outDir "z1-map$suffix.pdf"

  Write-Host "  Rendering ($StyleName)..." -NoNewline

  # Phase 1: screenshot PNG
  # --virtual-time-budget unreliable for network tiles; we rely on window.__ready flag.
  # Classic headless polls window.__ready via --run-all-compositor-stages-before-draw.
  # Fallback: 10s timeout baked into z1-map.html.
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
  $pngOk = Test-Path $pngOut

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

  $args2 = @(
    '--headless'
    '--no-sandbox'
    '--disable-gpu'
    "--print-to-pdf=$pdfOut"
    '--no-pdf-header-footer'
    ([System.Uri]$wrapperPath).AbsoluteUri
  )
  & $browser @args2 2>$null
  Remove-Item $wrapperPath -ErrorAction SilentlyContinue

  $pdfOk = Test-Path $pdfOut
  $pdfKb = if ($pdfOk) { [math]::Round((Get-Item $pdfOut).Length / 1KB) } else { 0 }

  $pngLabel = "{0,6} KB" -f $pngKb
  $pdfLabel = if ($pdfOk) { "{0,6} KB" -f $pdfKb } else { "  FAILED" }
  Write-Host " PNG $pngLabel  PDF $pdfLabel" -ForegroundColor $(if ($pdfOk) { 'Green' } else { 'Yellow' })
}

# --- Main ---
$styles = if ($Compare) { @('clean','parchment') } else { @($Style) }

Write-Host "`nZ1 Map Render — $($styles.Count) job(s)`n"
foreach ($s in $styles) { Render-Map -StyleName $s }

Write-Host "`nDone. Output: $outDir"
Write-Host ""
Write-Host "NEXT STEPS:"
Write-Host "  1. Open output/z1-map.png at 100% zoom — check:"
Write-Host "     - building edges sharp (not pixelated)"
Write-Host "     - all 19 puzzle pins + 2 landmarks visible"
Write-Host "     - Rynek inset box in corner, cluster pins separated"
Write-Host "  2. Open output/z1-map.pdf at 300% — no blur on raster"
Write-Host "  3. If tiles are grey/missing: re-run (CDN timeout on first run)"
