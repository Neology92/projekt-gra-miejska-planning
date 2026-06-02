# render-z11.ps1 — headless Chrome: PDF renders of Z11 cipher tables.
#
# Produces:
#   public/z11-tabela-1-symbole.pdf    (Table 1 — symbol lookup, A4 portrait)
#   public/z11-tabela-2-tabula-recta.pdf  (Table 2 — tabula recta, A4 landscape)
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
function Render-Page {
  param(
    [string]$HtmlFile,
    [string]$PdfOut,
    [string]$Label
  )

  $htmlPath = Join-Path $here $HtmlFile
  $uri      = ([System.Uri]$htmlPath).AbsoluteUri

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

  if ((Test-Path $PdfOut) -and ((Get-Item $PdfOut).Length -gt 0)) {
    Write-Host (" {0,7:N0} bytes  →  $PdfOut" -f (Get-Item $PdfOut).Length) -ForegroundColor Green
    return $true
  } else {
    Write-Host " FAILED (zero bytes or missing)" -ForegroundColor Red
    return $false
  }
}

# --- Render both tables ---
$ok1 = Render-Page `
  -HtmlFile 'tabela-1.html' `
  -PdfOut   (Join-Path $outDir 'z11-tabela-1-symbole.pdf') `
  -Label    'Table 1 (symbol lookup, A4 portrait)'

$ok2 = Render-Page `
  -HtmlFile 'tabela-2.html' `
  -PdfOut   (Join-Path $outDir 'z11-tabela-2-tabula-recta.pdf') `
  -Label    'Table 2 (tabula recta, A4 landscape)'

# --- Summary ---
Write-Host "`n--- Summary ---"
$s1 = if ($ok1) { "OK" } else { "FAILED" }
$s2 = if ($ok2) { "OK" } else { "FAILED" }
Write-Host "Table 1: $s1"
Write-Host "Table 2: $s2"
Write-Host "`nOutput dir: $outDir"

if (-not ($ok1 -and $ok2)) {
  Write-Host "`nOne or more renders failed." -ForegroundColor Red
  exit 1
}
Write-Host "`nDone." -ForegroundColor Green
