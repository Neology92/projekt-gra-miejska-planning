# render-z11.ps1 — headless Chrome: PDF renders of Z11 cipher tables (per KZ group colour).
#
# Produces, for each KZ colour (G6-G10 = niebieski fioletowy bialy brazowy czarny):
#   public/krzyzacy-<kolor>-5-Z11-tabela-symbole.pdf      (Table 1 — symbol lookup, A4 portrait)
#   public/krzyzacy-<kolor>-5-Z11-tabela-recta.pdf        (Table 2 — tabula recta, A4 landscape)
# The tables are shared content (each group reads its own row); the per-colour copies differ only by
# the edge-stamp (k05-<kolor>) + filename. Name canon: envelopes/README.md §Systematyka nazw.
#
# Pre-render gate: node cipher-data.js validates round-trip, permutations, no decoy collision.
# Render is aborted if validation fails.
#
# Usage:
#   pwsh -File render-z11.ps1
#
# No user-data-dir (Chrome 147 headless gotcha — breaks headless mode if set).

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path (Resolve-Path (Join-Path $here '..\..' )) 'public'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# --- Validation gate (node must be available) ---
Write-Host "`nZ11 Cipher Render`n"
Write-Host "--- Validation (node cipher-data.js) ---"
$nodeOut = & node (Join-Path $here 'cipher-data.js') 2>&1
Write-Host ($nodeOut -join "`n")
if ($LASTEXITCODE -ne 0) {
  Write-Host "`nABORTED: validation failed. Fix cipher-data.js first." -ForegroundColor Red
  exit 1
}
Write-Host "Validation OK.`n"

# --- Locate Chrome or Edge ---
$candidates = @(
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'No Chrome/Edge found. Install Chrome or Edge.' }
Write-Host "Browser: $browser`n"

# --- Render function (same poll pattern as render-decoder.ps1) ---
# Injects the edge-stamp: copies the HTML to a temp sibling (keeps relative <script> paths working),
# substitutes __STAMP__ -> $Stamp, renders that, then deletes the temp.
function Render-Page {
  param(
    [string]$HtmlFile,
    [string]$PdfOut,
    [string]$Label,
    [string]$Stamp
  )

  $htmlPath = Join-Path $here $HtmlFile
  $renderPath = $htmlPath
  $tmp = $null
  if ($Stamp) {
    $html = Get-Content -Raw -LiteralPath $htmlPath
    if ($html -match '__STAMP__') {
      $tmp = Join-Path $here (".stamped-$Stamp-$HtmlFile")
      ($html -replace '__STAMP__', $Stamp) | Set-Content -NoNewline -LiteralPath $tmp -Encoding UTF8
      $renderPath = $tmp
    }
  }
  $uri = ([System.Uri]$renderPath).AbsoluteUri

  Write-Host "  Rendering $Label..." -NoNewline
  if (Test-Path $PdfOut) { Remove-Item $PdfOut -Force -ErrorAction SilentlyContinue }

  # NO --user-data-dir (Chrome 147 headless incompatibility).
  $chromeArgs = @(
    '--headless'
    '--no-sandbox'
    '--disable-gpu'
    '--disable-web-security'
    '--allow-file-access-from-files'
    '--no-pdf-header-footer'
    "--print-to-pdf=$PdfOut"
    '--run-all-compositor-stages-before-draw'
    $uri
  )
  & $browser @chromeArgs 2>$null

  # Poll for PDF flush (size must stabilise), up to 20s
  $deadline = (Get-Date).AddSeconds(20)
  $last = -1
  do {
    Start-Sleep -Milliseconds 400
    $len = if (Test-Path $PdfOut) { (Get-Item $PdfOut).Length } else { 0 }
    if ($len -gt 0 -and $len -eq $last) { break }
    $last = $len
  } until ((Get-Date) -gt $deadline)

  $ok = (Test-Path $PdfOut) -and ((Get-Item $PdfOut).Length -gt 0)
  if ($ok) {
    Write-Host (" {0,7:N0} bytes" -f (Get-Item $PdfOut).Length) -ForegroundColor Green
  } else {
    Write-Host " FAILED (zero bytes or missing)" -ForegroundColor Red
  }
  if ($tmp -and (Test-Path $tmp)) { Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue }
  return $ok
}

# --- Render both tables, once per KZ group colour (Z11 = krzyzacy envelope 5 = finał) ---
$KZ_COLORS = @('niebieski','fioletowy','bialy','brazowy','czarny')   # G6-G10
$fail = 0
foreach ($color in $KZ_COLORS) {
  Write-Host "Group colour: $color" -ForegroundColor Cyan
  $ok1 = Render-Page `
    -HtmlFile 'tabela-1.html' `
    -PdfOut   (Join-Path $outDir "krzyzacy-$color-5-Z11-tabela-symbole.pdf") `
    -Label    "  tabela-symbole ($color)" `
    -Stamp    "k05-$color"
  $ok2 = Render-Page `
    -HtmlFile 'tabela-2.html' `
    -PdfOut   (Join-Path $outDir "krzyzacy-$color-5-Z11-tabela-recta.pdf") `
    -Label    "  tabela-recta   ($color)" `
    -Stamp    "k05-$color"
  if (-not ($ok1 -and $ok2)) { $fail++ }
}

# --- Summary ---
Write-Host "`nOutput dir: $outDir"
if ($fail -gt 0) {
  Write-Host "`n$fail group(s) had a failed render." -ForegroundColor Red
  exit 1
}
Write-Host "`nDone ($($KZ_COLORS.Count) groups × 2 tables)." -ForegroundColor Green
