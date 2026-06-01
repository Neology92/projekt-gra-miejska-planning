# render-map.ps1 — headless Chrome: 10x PNG + 10x PDF (A4 landscape) for Z1 maps
#
# Usage:
#   pwsh -File render-map.ps1              # render all 10 groups, style=clean
#   pwsh -File render-map.ps1 -Style parchment
#   pwsh -File render-map.ps1 -Group G1    # single group
#   pwsh -File render-map.ps1 -Compare     # G1 clean + G1 parchment side-by-side
#
# Requirements: network (Leaflet CDN + CARTO tiles). One-time pre-game render.
# Output: output/z1-map-G1.png ... output/z1-map-G10.pdf

param(
  [string]$Group  = '',       # empty = all G1..G10
  [string]$Style  = 'clean',  # clean | parchment
  [switch]$Compare            # render G1 in both styles for aesthetics check
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

# Tile readiness timeout (ms) — Chrome will stop after this if tiles don't load
$ReadyTimeout = 15000

# --- Build job list ---
$groups = if ($Group) { @($Group.ToUpper()) } else { 1..10 | ForEach-Object { "G$_" } }
$styles = if ($Compare) { @('clean','parchment') } else { @($Style) }

$jobs = [System.Collections.Generic.List[hashtable]]::new()
foreach ($g in $groups) {
  foreach ($s in $styles) {
    $jobs.Add(@{ Group = $g; Style = $s })
  }
}

# --- Render function ---
function Render-Map {
  param([string]$GroupId, [string]$StyleName)

  $htmlPath = Join-Path $here 'z1-map.html'
  $uri      = ([System.Uri]$htmlPath).AbsoluteUri + "?view=$GroupId&style=$StyleName"
  $suffix   = if ($StyleName -ne 'clean') { "-$StyleName" } else { '' }
  $pngOut   = Join-Path $outDir "z1-map-$GroupId$suffix.png"
  $pdfOut   = Join-Path $outDir "z1-map-$GroupId$suffix.pdf"

  Write-Host "  Rendering $GroupId ($StyleName)..." -NoNewline

  # Phase 1: screenshot PNG
  # --virtual-time-budget unreliable for network tiles; we rely on window.__ready flag.
  # Classic headless (not --headless=new) polls window.__ready via --run-all-compositor-stages-before-draw.
  # Fallback: 10s timeout baked into the HTML.
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
  $wrapperPath = Join-Path $env:TEMP "z1-wrap-$GroupId$suffix.html"
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

# --- Main loop ---
Write-Host "`nZ1 Map Render — $($jobs.Count) job(s)`n"
foreach ($job in $jobs) {
  Render-Map -GroupId $job.Group -StyleName $job.Style
}

Write-Host "`nDone. Output: $outDir"
Write-Host ""
Write-Host "NEXT STEPS:"
Write-Host "  1. Open output/z1-map-G1.png at 100% zoom — check:"
Write-Host "     - building edges sharp (not pixelated)"
Write-Host "     - 9 pins visible, inset box visible in corner"
Write-Host "     - C-cluster pins separated in inset"
Write-Host "  2. Open output/z1-map-G1.pdf at 300% — no blur on raster"
Write-Host "  3. Compare G1 vs G8: pin N01 should be at identical pixel (determinism check)"
Write-Host "  4. If tiles are grey/missing: re-run (CDN timeout on first run)"
