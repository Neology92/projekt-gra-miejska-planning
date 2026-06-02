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
# Output: ../../public/maps/map.png + .pdf  (group=all); map-G3.png + .pdf  (group=G3)

param(
  [string]$Style  = 'clean',  # clean | parchment
  [string]$Group  = 'all',    # all | G1..G10
  [switch]$Compare            # render both styles for aesthetics check
)

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path (Resolve-Path (Join-Path $here '..\..')) 'public\maps'
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
# With --force-device-scale-factor=3: output is 3510×2484 ≈ 300 dpi
$W   = 1170
$H   = 828
$DSF = 3            # --force-device-scale-factor

# Headless Chrome reserves ~16px width + ~95px height of the window for
# decoration/scrollbar, so the layout VIEWPORT is smaller than --window-size
# while the screenshot still captures the full outer window. Result: the bottom
# 95px of the sheet was being CLIPPED and replaced by a page-bg strip, and a
# thin strip appeared on the right. Fix: render into an OVERSIZED window so the
# viewport comfortably exceeds the sheet (full render, no clip), then crop the
# PNG back to the exact sheet box (W×H × DSF) at the top-left.
$MarginW = 60      # window padding beyond sheet width  (> ~16 decoration)
$MarginH = 160     # window padding beyond sheet height (> ~95 decoration)
$WinW = $W + $MarginW
$WinH = $H + $MarginH
$CropW = $W * $DSF
$CropH = $H * $DSF

# --- Render function ---
function Render-Map {
  param([string]$StyleName)

  $htmlPath = Join-Path $here 'map.html'
  $suffix   = if ($StyleName -ne 'clean') { "-$StyleName" } else { '' }
  $uri      = ([System.Uri]$htmlPath).AbsoluteUri + "?style=$StyleName&group=$Group"
  $baseName = if ($Group -eq 'all') { 'map' } else { "map-$Group" }
  $pngOut   = Join-Path $outDir "$baseName$suffix.png"
  $pdfOut   = Join-Path $outDir "$baseName$suffix.pdf"

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
    "--force-device-scale-factor=$DSF"
    "--window-size=$WinW,$WinH"
    "--hide-scrollbars"
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

  # Crop the oversized capture down to the exact sheet box (top-left corner).
  # The sheet has margin:0 and fixed W×H, so at DSF it always occupies the
  # top-left CropW×CropH; everything beyond is decoration page-bg → discard.
  try {
    Add-Type -AssemblyName System.Drawing
    $src = New-Object System.Drawing.Bitmap($pngOut)
    if ($src.Width -lt $CropW -or $src.Height -lt $CropH) {
      $src.Dispose()
      Write-Host (" CROP SKIP (capture {0}x{1} < {2}x{3})" -f $src.Width,$src.Height,$CropW,$CropH) -ForegroundColor Yellow
    } else {
      $dst  = New-Object System.Drawing.Bitmap($CropW, $CropH)
      $g    = [System.Drawing.Graphics]::FromImage($dst)
      $rect = New-Object System.Drawing.Rectangle(0, 0, $CropW, $CropH)
      $g.DrawImage($src, $rect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
      $g.Dispose(); $src.Dispose()
      $dst.Save($pngOut, [System.Drawing.Imaging.ImageFormat]::Png)
      $dst.Dispose()
    }
  } catch {
    Write-Host " CROP ERROR: $($_.Exception.Message)" -ForegroundColor Yellow
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
  $wrapperPath = Join-Path $env:TEMP "map-wrap-$Group$suffix.html"
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
$outName = if ($Group -eq 'all') { 'map' } else { "map-$Group" }
Write-Host "  1. Open public/maps/$outName.png at 100% zoom — check:"
Write-Host "     - building edges sharp (not pixelated)"
Write-Host "     - the group's marks on the map + matching rows in the KEY"
Write-Host "     - Rynek inset (right rail) shows the Old-Town cluster, pins separated"
Write-Host "  2. Open public/maps/$outName.pdf at 300% — no blur on raster"
Write-Host "  3. If tiles are grey/missing: re-run (CDN timeout on first run)"
