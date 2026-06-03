# render-meta.ps1 — generuje HTML ze wszystkich lore/meta-kartki/*.md i renderuje do PDF.
#
# Output (public/): [frakcja]-[nr]-[Zx]-meta.pdf  (bez koloru — jedna karta per koperta, nie per gracz)
# Źródła:           lore/meta-kartki/*.md
# Generator HTML:   tools/meta-kartki/meta-card-gen.mjs
#
# Nazwy plików output:
#   wspolne-1-Z1-meta.pdf
#   miasto-2-Z2-meta.pdf   miasto-3-Z3-meta.pdf
#   krzyzacy-3-Z3Z-meta.pdf
#   miasto-5-Z4-meta.pdf   miasto-5-Z5-meta.pdf   miasto-5-Z6-meta.pdf   miasto-6-Z7-meta.pdf
#   krzyzacy-4-Z8-meta.pdf krzyzacy-4-Z9-meta.pdf krzyzacy-4-Z10-meta.pdf krzyzacy-5-Z11-meta.pdf
#
# Usage: pwsh -File render-meta.ps1

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$root   = Resolve-Path (Join-Path $here '..\..')
$outDir = Join-Path $root 'public'
$srcDir = Join-Path $root 'lore\meta-kartki'
$genMjs = Join-Path $here 'meta-card-gen.mjs'

Write-Host "`nMeta-kartki render`n" -ForegroundColor Cyan

# --- MD-slug → output PDF name mapping (kanoniczne nazwy public/) ---
$cards = [ordered]@{
  'wspolne-1-Z1'       = 'wspolne-1-Z1-meta.pdf'
  'miasto-2-Z2'        = 'miasto-2-Z2-meta.pdf'
  'miasto-3-Z3'        = 'miasto-3-Z3-meta.pdf'
  'krzyzacy-3-Z3Z'     = 'krzyzacy-3-Z3Z-meta.pdf'
  'miasto-5-Z4'        = 'miasto-5-Z4-meta.pdf'
  'krzyzacy-4-Z8'      = 'krzyzacy-4-Z8-meta.pdf'
  'miasto-5-Z5'        = 'miasto-5-Z5-meta.pdf'
  'krzyzacy-4-Z9'      = 'krzyzacy-4-Z9-meta.pdf'
  'miasto-5-Z6'        = 'miasto-5-Z6-meta.pdf'
  'krzyzacy-4-Z10'     = 'krzyzacy-4-Z10-meta.pdf'
  'miasto-6-Z7'        = 'miasto-6-Z7-meta.pdf'
  'krzyzacy-5-Z11'     = 'krzyzacy-5-Z11-meta.pdf'
}

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
Write-Host "Browser: $browser`n"

$tmpDir = Join-Path $env:TEMP 'meta-kartki-render'
if (Test-Path $tmpDir) { Remove-Item $tmpDir -Recurse -Force }
New-Item -ItemType Directory -Path $tmpDir | Out-Null

$fail = 0
foreach ($slug in $cards.Keys) {
  $mdFile  = Join-Path $srcDir "$slug.md"
  $pdfOut  = Join-Path $outDir $cards[$slug]
  $htmlTmp = Join-Path $tmpDir "$slug.html"

  if (-not (Test-Path $mdFile)) {
    Write-Host "  SKIP $slug.md (not found)" -ForegroundColor Yellow
    continue
  }

  Write-Host "  $slug" -NoNewline

  # Generate HTML
  $genOut = & node $genMjs $mdFile $htmlTmp 2>&1
  if ($LASTEXITCODE -ne 0) {
    Write-Host " GEN FAILED: $genOut" -ForegroundColor Red
    $fail++; continue
  }

  # Render PDF
  $uri = ([System.Uri]$htmlTmp).AbsoluteUri
  if (Test-Path $pdfOut) { Remove-Item $pdfOut -Force -ErrorAction SilentlyContinue }

  $chromeArgs = @(
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
  & $browser @chromeArgs 2>$null

  # Poll for flush
  $deadline = (Get-Date).AddSeconds(20)
  $last = -1
  do {
    Start-Sleep -Milliseconds 400
    $len = if (Test-Path $pdfOut) { (Get-Item $pdfOut).Length } else { 0 }
    if ($len -gt 0 -and $len -eq $last) { break }
    $last = $len
  } until ((Get-Date) -gt $deadline)

  $ok = (Test-Path $pdfOut) -and ((Get-Item $pdfOut).Length -gt 0)
  if ($ok) {
    Write-Host (" {0,7:N0} bytes" -f (Get-Item $pdfOut).Length) -ForegroundColor Green
  } else {
    Write-Host " FAILED" -ForegroundColor Red
    $fail++
  }
}

# Cleanup temp
Remove-Item $tmpDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "`nOutput: $outDir"
if ($fail -gt 0) {
  Write-Host "$fail card(s) failed." -ForegroundColor Red; exit 1
} else {
  Write-Host "Done ($($cards.Count) cards)." -ForegroundColor Green
}
