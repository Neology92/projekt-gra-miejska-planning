# render.ps1 — the SEALED-DISPATCH prop (couriers' carried letter), 3 style variants for Oskar to pick from.
# Usage:  pwsh -File render.ps1                 (run from prototype/sealed-letter/)
#         pwsh -File render.ps1 -PdfOnly        (skip the QA screenshots)
# Requires Chrome or Edge. These are PREVIEWS → stay in prototype/. The chosen one moves to public/ later
# (canonical name: wspolne-1-Z1-list.pdf — position 1, faction-common). See README.md.
#
# Each variant HTML is a 2-page doc: page 1 = four address faces, page 2 = four seals. The output PDF is
# printed DUPLEX (flip long edge) → one A4 sheet = 4 letters; print 3 sheets → 12 → cut 10. Because all four
# cells are identical, no front/back mirror alignment is needed (also = canon: identical letter for all groups).
#
# QA PNGs: A4 portrait at DSF=2. Headless reserves ~16px W + ~95px H of decoration, so we render into an
# OVERSIZED window (no clip) and crop back to the exact sheet box (same trick as tools/map-gen/render-map.ps1).
# Back page is captured by hiding the first sheet in a temp copy. NO --user-data-dir (breaks --screenshot on Chrome 147).

param(
  [switch]$PdfOnly,
  # Promote the chosen variant to public/ under the canonical name (position 1, faction-common).
  # e.g.  pwsh -File render.ps1 -Publish v1   ->   public/wspolne-1-Z1-list.pdf
  [ValidateSet('v1','v2','v3')][string]$Publish
)

$ErrorActionPreference = 'Stop'
$here = $PSScriptRoot
$preview = Join-Path $here 'preview'
New-Item -ItemType Directory -Force -Path $preview | Out-Null

$candidates = @(
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'No Chrome/Edge found.' }
Write-Host "Browser: $browser`n"

# variant source -> output pdf basename
$variants = [ordered]@{
  'v1-mute.html'       = 'sealed-letter-v1-mute.pdf'
  'v2-sigil.html'      = 'sealed-letter-v2-sigil.pdf'
  'v3-redirected.html' = 'sealed-letter-v3-redirected.pdf'
}

# A4 portrait screenshot geometry
$W = 827; $H = 1169; $DSF = 2
$WinW = $W + 60; $WinH = $H + 170
$CropW = $W * $DSF; $CropH = $H * $DSF

function Wait-File($path, $seconds) {
  $deadline = (Get-Date).AddSeconds($seconds); $last = -1
  do {
    Start-Sleep -Milliseconds 400
    $len = if (Test-Path $path) { (Get-Item $path).Length } else { 0 }
    if ($len -gt 0 -and $len -eq $last) { break }
    $last = $len
  } until ((Get-Date) -gt $deadline)
  return (Test-Path $path) -and ((Get-Item $path).Length -gt 0)
}

function Crop-TopLeft($png) {
  try {
    Add-Type -AssemblyName System.Drawing
    $src = New-Object System.Drawing.Bitmap($png)
    if ($src.Width -lt $CropW -or $src.Height -lt $CropH) { $src.Dispose(); return }
    $dst  = New-Object System.Drawing.Bitmap($CropW, $CropH)
    $g    = [System.Drawing.Graphics]::FromImage($dst)
    $rect = New-Object System.Drawing.Rectangle(0, 0, $CropW, $CropH)
    $g.DrawImage($src, $rect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose(); $src.Dispose()
    $dst.Save($png, [System.Drawing.Imaging.ImageFormat]::Png); $dst.Dispose()
  } catch { Write-Host "  crop error: $($_.Exception.Message)" -ForegroundColor Yellow }
}

function Shot($uri, $png) {
  if (Test-Path $png) { Remove-Item $png -Force -ErrorAction SilentlyContinue }
  & $browser --headless --no-sandbox --disable-gpu "--force-device-scale-factor=$DSF" `
    "--window-size=$WinW,$WinH" --hide-scrollbars --run-all-compositor-stages-before-draw `
    "--screenshot=$png" $uri 2>$null
  if (Wait-File $png 25) { Crop-TopLeft $png; return $true } else { return $false }
}

# --- Publish the chosen variant to public/ (canonical name) and stop. ---
if ($Publish) {
  $pubMap = @{ v1 = 'v1-mute.html'; v2 = 'v2-sigil.html'; v3 = 'v3-redirected.html' }
  $inPath   = Join-Path $here $pubMap[$Publish]
  $repoRoot = (Resolve-Path (Join-Path $here '..\..')).Path
  $pubOut   = Join-Path $repoRoot 'public\wspolne-1-Z1-list.pdf'
  if (Test-Path $pubOut) { Remove-Item $pubOut -Force -ErrorAction SilentlyContinue }
  & $browser --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="$pubOut" ([System.Uri]$inPath).AbsoluteUri 2>$null
  if (Wait-File $pubOut 20) {
    $bytes = [System.IO.File]::ReadAllText($pubOut, [System.Text.Encoding]::Latin1)
    $pages = ([regex]::Matches($bytes, '/Type\s*/Page(?![sR])')).Count
    Write-Host ("PUBLISHED {0} ({1}) -> public/wspolne-1-Z1-list.pdf  {2:N0} bytes, {3} pages" -f $Publish, $pubMap[$Publish], (Get-Item $pubOut).Length, $pages) -ForegroundColor Green
    if ($pages -ne 2) { Write-Warning "Expected exactly 2 pages (faces + seals) for clean duplex — got $pages." }
  } else { Write-Warning "PUBLISH FAILED: $pubOut" }
  return
}

foreach ($in in $variants.Keys) {
  $inPath  = Join-Path $here $in
  $pdfOut  = Join-Path $here $variants[$in]
  $uri     = ([System.Uri]$inPath).AbsoluteUri
  $tag     = $in -replace '\.html$',''

  Write-Host ("{0}" -f $in)

  # --- print PDF (2 pages: faces + seals) ---
  if (Test-Path $pdfOut) { Remove-Item $pdfOut -Force -ErrorAction SilentlyContinue }
  & $browser --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="$pdfOut" $uri 2>$null
  if (Wait-File $pdfOut 20) {
    Write-Host ("  PDF  {0,-32} {1,7:N0} bytes" -f $variants[$in], (Get-Item $pdfOut).Length) -ForegroundColor Green
  } else {
    Write-Warning "  PDF FAILED: $($variants[$in])"
  }

  if ($PdfOnly) { continue }

  # --- QA PNG: front (page 1 as-is) ---
  $frontPng = Join-Path $preview ("{0}-front.png" -f $tag)
  if (Shot $uri $frontPng) { Write-Host ("  PNG  {0}" -f (Split-Path $frontPng -Leaf)) -ForegroundColor DarkGray }
  else { Write-Warning "  PNG front FAILED" }

  # --- QA PNG: back (hide first sheet in a temp copy so page 2 shows first) ---
  $html = Get-Content -Raw -LiteralPath $inPath
  $html = $html -replace '</head>', '<style>section.sheet:nth-of-type(1){display:none}</style></head>'
  $tmp  = Join-Path $here (".qa-back-{0}" -f $in)
  Set-Content -NoNewline -LiteralPath $tmp -Value $html -Encoding UTF8
  $backPng = Join-Path $preview ("{0}-back.png" -f $tag)
  if (Shot ([System.Uri]$tmp).AbsoluteUri $backPng) { Write-Host ("  PNG  {0}" -f (Split-Path $backPng -Leaf)) -ForegroundColor DarkGray }
  else { Write-Warning "  PNG back FAILED" }
  Remove-Item $tmp -Force -ErrorAction SilentlyContinue

  Write-Host ''
}

Write-Host "Done."
Write-Host "  Print PDFs : $here\sealed-letter-v*.pdf   (print DUPLEX, flip on long edge, then cut)"
Write-Host "  QA previews: $preview\v*-front.png / v*-back.png"
