# render-tester.ps1 — pre-game TESTER pack for Adam (terrain check).
# Outputs to ../../public/tester/ (NOT public/maps/ — keeps it apart from
# player/MG canonical renders; filled-key map is a spoiler).
#
#   1) map-tester.png/.pdf      — navigation map, filled glyph key, TESTER banner
#   2) symbols-tester.pdf       — full Z1 symbol inventory (detail icon + glyph + place)
#
# Usage:  pwsh -File render-tester.ps1
# Requires: network (Leaflet CDN + CARTO tiles) for the map.

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path (Resolve-Path (Join-Path $here '..\..')) 'public\tester'
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

# ============================================================================
# 1) MAP (filled key + TESTER banner) — screenshot + crop + PDF
# ============================================================================
$W = 1170; $H = 828; $DSF = 3
$WinW = $W + 60; $WinH = $H + 160
$CropW = $W * $DSF; $CropH = $H * $DSF

$htmlPath = Join-Path $here 'map.html'
$uri = ([System.Uri]$htmlPath).AbsoluteUri + '?style=clean&group=all&key=filled&tester=1'
$pngOut = Join-Path $outDir 'map-tester.png'
$pdfOut = Join-Path $outDir 'map-tester.pdf'

Write-Host "`n[1/2] Map (filled key + TESTER)..." -NoNewline
if (Test-Path $pngOut) { Remove-Item $pngOut -Force -ErrorAction SilentlyContinue }

$args1 = @(
  '--headless','--no-sandbox','--disable-gpu','--disable-web-security',
  "--force-device-scale-factor=$DSF","--window-size=$WinW,$WinH",
  '--hide-scrollbars',"--screenshot=$pngOut",
  '--run-all-compositor-stages-before-draw',$uri
)
& $browser @args1 2>$null

$deadline = (Get-Date).AddSeconds(25); $lastLen = -1
do {
  Start-Sleep -Milliseconds 400
  $len = if (Test-Path $pngOut) { (Get-Item $pngOut).Length } else { 0 }
  if ($len -gt 0 -and $len -eq $lastLen) { break }
  $lastLen = $len
} until ((Get-Date) -gt $deadline)

if (-not ((Test-Path $pngOut) -and ((Get-Item $pngOut).Length -gt 0))) {
  throw 'Map PNG render failed.'
}

# Crop oversized capture to exact sheet box (top-left)
Add-Type -AssemblyName System.Drawing
$src = New-Object System.Drawing.Bitmap($pngOut)
if ($src.Width -ge $CropW -and $src.Height -ge $CropH) {
  $dst  = New-Object System.Drawing.Bitmap($CropW, $CropH)
  $g    = [System.Drawing.Graphics]::FromImage($dst)
  $rect = New-Object System.Drawing.Rectangle(0, 0, $CropW, $CropH)
  $g.DrawImage($src, $rect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose(); $src.Dispose()
  $dst.Save($pngOut, [System.Drawing.Imaging.ImageFormat]::Png); $dst.Dispose()
} else { $src.Dispose() }

# PNG → PDF A4 landscape
$wrapperHtml = @"
<!DOCTYPE html><html><head><style>
@page{size:297mm 210mm;margin:0}
html,body{margin:0;padding:0;width:297mm;height:210mm;overflow:hidden}
img{display:block;width:297mm;height:210mm;object-fit:fill}
</style></head><body><img src="$pngOut"/></body></html>
"@
$wrapperPath = Join-Path $env:TEMP 'map-tester-wrap.html'
Set-Content -Path $wrapperPath -Value $wrapperHtml -Encoding UTF8
if (Test-Path $pdfOut) { Remove-Item $pdfOut -Force -ErrorAction SilentlyContinue }
$args2 = @('--headless','--no-sandbox','--disable-gpu',"--print-to-pdf=$pdfOut",
           '--no-pdf-header-footer',([System.Uri]$wrapperPath).AbsoluteUri)
& $browser @args2 2>$null
$deadline2 = (Get-Date).AddSeconds(20); $lastPdf = -1
do {
  Start-Sleep -Milliseconds 400
  $plen = if (Test-Path $pdfOut) { (Get-Item $pdfOut).Length } else { 0 }
  if ($plen -gt 0 -and $plen -eq $lastPdf) { break }
  $lastPdf = $plen
} until ((Get-Date) -gt $deadline2)
Remove-Item $wrapperPath -ErrorAction SilentlyContinue
Write-Host (" PNG {0} KB  PDF {1} KB" -f [math]::Round((Get-Item $pngOut).Length/1KB), [math]::Round((Get-Item $pdfOut).Length/1KB)) -ForegroundColor Green

# ============================================================================
# 2) SYMBOL INVENTORY SHEET — direct print-to-pdf (A4 portrait, no tiles)
# ============================================================================
$symHtml = Join-Path $here 'tester-symbols.html'
$symPdf  = Join-Path $outDir 'symbols-tester.pdf'
Write-Host "[2/2] Symbol inventory sheet..." -NoNewline
if (Test-Path $symPdf) { Remove-Item $symPdf -Force -ErrorAction SilentlyContinue }
$args3 = @('--headless','--no-sandbox','--disable-gpu','--disable-web-security',
           "--print-to-pdf=$symPdf",'--no-pdf-header-footer',
           '--run-all-compositor-stages-before-draw',
           ([System.Uri]$symHtml).AbsoluteUri)
& $browser @args3 2>$null
$deadline3 = (Get-Date).AddSeconds(20); $lastSym = -1
do {
  Start-Sleep -Milliseconds 400
  $slen = if (Test-Path $symPdf) { (Get-Item $symPdf).Length } else { 0 }
  if ($slen -gt 0 -and $slen -eq $lastSym) { break }
  $lastSym = $slen
} until ((Get-Date) -gt $deadline3)
if (-not ((Test-Path $symPdf) -and ((Get-Item $symPdf).Length -gt 0))) {
  throw 'Symbol sheet PDF render failed.'
}
Write-Host (" PDF {0} KB" -f [math]::Round((Get-Item $symPdf).Length/1KB)) -ForegroundColor Green

Write-Host "`nDone. TESTER pack -> $outDir"
Write-Host "  map-tester.pdf      (mapa + klucz wypelniony + stempel TESTER)"
Write-Host "  symbols-tester.pdf  (arkusz wszystkich symboli: ikona detalu + glif + miejsce)"
