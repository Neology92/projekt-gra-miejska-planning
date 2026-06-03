# render-map.ps1 — headless Chrome: the shared navigation map, one PRINT PDF per group.
#
# The map is ONE shared image (all glyphs visible, same for every group). We screenshot it ONCE
# (expensive: Leaflet + CDN tiles), then stamp it per group cheaply at the PNG→PDF step.
#
# Output (flat public/, name canon = envelopes/README.md §Systematyka nazw):
#   public/wspolne-<kolor>-1-Z1-mapa.pdf   × 10 groups   (player; edge-stamp w01-<kolor>)
#   public/mg-Z1-mapa.pdf + mg-Z1-mapa.png                (MG filled key; no colour, no stamp)
#
# Usage:
#   pwsh -File render-map.ps1                 # clean style
#   pwsh -File render-map.ps1 -Style parchment
#
# Requirements: network (Leaflet CDN + CARTO tiles). One-time pre-game render.

param(
  [string]$Style = 'clean'   # clean | parchment
)

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path (Resolve-Path (Join-Path $here '..\..')) 'public'
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
# A4 landscape at ~100 dpi: 1170×828 px. --force-device-scale-factor=3 → ~300 dpi capture.
$W = 1170; $H = 828; $DSF = 3
$MarginW = 60; $MarginH = 160          # oversize window so the viewport exceeds the sheet (no clip)
$WinW = $W + $MarginW; $WinH = $H + $MarginH
$CropW = $W * $DSF; $CropH = $H * $DSF

# All ASCII colours (map is wspolne Z1 → every group). Source: envelopes/README.md.
$ALL_COLORS = @('czerwony','pomaranczowy','zolty','zielony','turkusowy',
                'niebieski','fioletowy','bialy','brazowy','czarny')

# --- Phase 1: screenshot the map to $PngOut, then crop to the exact sheet box ---
function Capture-MapPng {
  param([string]$KeyMode, [string]$PngOut)   # KeyMode: blank (player) | filled (MG)

  $htmlPath = Join-Path $here 'map.html'
  $uri = ([System.Uri]$htmlPath).AbsoluteUri + "?style=$Style&group=all&key=$KeyMode"

  Write-Host "  Capturing map ($KeyMode)..." -NoNewline
  if (Test-Path $PngOut) { Remove-Item $PngOut -Force -ErrorAction SilentlyContinue }

  # NO --user-data-dir (breaks --screenshot on Chrome 147). Poll for async flush.
  $args1 = @(
    '--headless','--no-sandbox','--disable-gpu','--disable-web-security'
    "--force-device-scale-factor=$DSF","--window-size=$WinW,$WinH","--hide-scrollbars"
    "--screenshot=$PngOut",'--run-all-compositor-stages-before-draw',$uri
  )
  & $browser @args1 2>$null

  $deadline = (Get-Date).AddSeconds(25); $lastLen = -1
  do {
    Start-Sleep -Milliseconds 400
    $len = if (Test-Path $PngOut) { (Get-Item $PngOut).Length } else { 0 }
    if ($len -gt 0 -and $len -eq $lastLen) { break }
    $lastLen = $len
  } until ((Get-Date) -gt $deadline)

  if (-not ((Test-Path $PngOut) -and ((Get-Item $PngOut).Length -gt 0))) {
    Write-Host " FAILED" -ForegroundColor Red; return $false
  }

  # Crop oversized capture to the exact top-left sheet box.
  try {
    Add-Type -AssemblyName System.Drawing
    $srcImg = New-Object System.Drawing.Bitmap($PngOut)
    if ($srcImg.Width -ge $CropW -and $srcImg.Height -ge $CropH) {
      $dst  = New-Object System.Drawing.Bitmap($CropW, $CropH)
      $g    = [System.Drawing.Graphics]::FromImage($dst)
      $rect = New-Object System.Drawing.Rectangle(0, 0, $CropW, $CropH)
      $g.DrawImage($srcImg, $rect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
      $g.Dispose(); $srcImg.Dispose()
      $dst.Save($PngOut, [System.Drawing.Imaging.ImageFormat]::Png); $dst.Dispose()
    } else { $srcImg.Dispose() }
  } catch { Write-Host " CROP ERROR: $($_.Exception.Message)" -ForegroundColor Yellow }

  Write-Host (" {0,6} KB" -f [math]::Round((Get-Item $PngOut).Length / 1KB)) -ForegroundColor Green
  return $true
}

# --- Phase 2: PNG → PDF (A4 landscape), with optional faint vertical edge-stamp ---
# The PNG is embedded as a base64 data: URI (NOT a file:// <img>) — Chrome 147 headless blocks
# file:// subresources from a file:// document, which silently kills the print. data: needs no file access.
function Png-To-Pdf {
  param([string]$PngPath, [string]$PdfOut, [string]$Stamp)

  $b64    = [System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes($PngPath))
  $pngUri = "data:image/png;base64,$b64"
  $stampHtml = if ($Stamp) {
    "<div style=""position:fixed;right:3.5mm;bottom:14mm;writing-mode:vertical-rl;text-orientation:mixed;" +
    "font-family:'Courier New',monospace;font-size:5.5pt;letter-spacing:.18em;color:#16110c;opacity:.34;" +
    "-webkit-print-color-adjust:exact;print-color-adjust:exact"">$Stamp</div>"
  } else { '' }

  $wrapperHtml = @"
<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@page{size:297mm 210mm;margin:0}
html,body{margin:0;padding:0;width:297mm;height:210mm;overflow:hidden}
img{display:block;width:297mm;height:210mm;object-fit:fill}
</style></head><body><img src="$pngUri"/>$stampHtml</body></html>
"@
  $wrapperPath = Join-Path $env:TEMP ("map-wrap-" + [System.IO.Path]::GetFileNameWithoutExtension($PdfOut) + ".html")
  Set-Content -Path $wrapperPath -Value $wrapperHtml -Encoding UTF8

  if (Test-Path $PdfOut) { Remove-Item $PdfOut -Force -ErrorAction SilentlyContinue }
  # NB: use the INTERPOLATED "--print-to-pdf=$PdfOut" form — the concat form ('--print-to-pdf=' + $PdfOut)
  # passes wrong through PowerShell native-arg splatting and Chrome writes no file (silent FAILED).
  $args2 = @('--headless','--no-sandbox','--disable-gpu',"--print-to-pdf=$PdfOut",
             '--no-pdf-header-footer', ([System.Uri]$wrapperPath).AbsoluteUri)
  & $browser @args2 2>$null

  $deadline = (Get-Date).AddSeconds(20); $last = -1
  do {
    Start-Sleep -Milliseconds 400
    $plen = if (Test-Path $PdfOut) { (Get-Item $PdfOut).Length } else { 0 }
    if ($plen -gt 0 -and $plen -eq $last) { break }
    $last = $plen
  } until ((Get-Date) -gt $deadline)
  Remove-Item $wrapperPath -ErrorAction SilentlyContinue

  if ((Test-Path $PdfOut) -and ((Get-Item $PdfOut).Length -gt 0)) {
    Write-Host ("    {0,-38} {1,6} KB" -f (Split-Path $PdfOut -Leaf), [math]::Round((Get-Item $PdfOut).Length / 1KB)) -ForegroundColor Green
    return $true
  }
  Write-Host ("    {0,-38} FAILED" -f (Split-Path $PdfOut -Leaf)) -ForegroundColor Red
  return $false
}

# --- Main ---
Write-Host "`nMap Render (style=$Style)`n"

# Player map: capture once → 10 stamped PDFs.
$playerPng = Join-Path $env:TEMP 'map-player-tmp.png'
if (Capture-MapPng -KeyMode 'blank' -PngOut $playerPng) {
  Write-Host "  Player PDFs (per group):"
  foreach ($color in $ALL_COLORS) {
    Png-To-Pdf -PngPath $playerPng -PdfOut (Join-Path $outDir "wspolne-$color-1-Z1-mapa.pdf") -Stamp "w01-$color" | Out-Null
  }
  Remove-Item $playerPng -Force -ErrorAction SilentlyContinue
}

# MG map: capture (filled key) → keep PNG + one unstamped PDF.
$mgPng = Join-Path $outDir 'mg-Z1-mapa.png'
if (Capture-MapPng -KeyMode 'filled' -PngOut $mgPng) {
  Write-Host "  MG PDF:"
  Png-To-Pdf -PngPath $mgPng -PdfOut (Join-Path $outDir 'mg-Z1-mapa.pdf') -Stamp '' | Out-Null
}

Write-Host "`nDone. Output: $outDir"
Write-Host "  Player: wspolne-<kolor>-1-Z1-mapa.pdf  ×$($ALL_COLORS.Count)"
Write-Host "  MG:     mg-Z1-mapa.pdf + mg-Z1-mapa.png"
