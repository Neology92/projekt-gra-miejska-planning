# Render print-ready PDFs from the HTML sources in ./src.
# Usage: pwsh -File render.ps1   (run from prototype/print/)
# Requires Chrome or Edge (Windows 11 ships Edge). Honors @media print + @page A4.

$ErrorActionPreference = 'Stop'
$here = $PSScriptRoot
$src  = Join-Path $here 'src'

# Final print-ready PDFs go to the repo-root `public/` folder (single home for
# deliverables to print, across prototype -> MVP). Created on demand.
$repoRoot = (Resolve-Path (Join-Path $here '..\..')).Path
$outDir   = Join-Path $repoRoot 'public'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# Locate a Chromium-based browser.
$candidates = @(
  "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw "No Chrome/Edge found." }
Write-Host "Browser: $browser"

# source file -> output pdf
$jobs = @{
  'z3-pergamin-lista-tr.html' = 'z3-pergamin-lista-tr.pdf'
  'z7-przechwycony-list.html' = 'z7-przechwycony-list.pdf'
  'z3-z7-klucz-mg.html'       = 'z3-z7-klucz-mg.pdf'
  'k1.html'                   = 'k1.pdf'
  'k2.html'                   = 'k2.pdf'
  'k2-slip.html'              = 'k2-slip.pdf'
  'k3.html'                   = 'k3.pdf'
  'kZ3b.html'                 = 'kZ3b.pdf'
  'kZ4.html'                  = 'kZ4.pdf'
  'kF.html'                   = 'kF.pdf'
}

foreach ($in in $jobs.Keys) {
  $inPath  = Join-Path $src $in
  $outPath = Join-Path $outDir $jobs[$in]
  $uri = ([System.Uri]$inPath).AbsoluteUri
  # --no-sandbox: Chrome's own sandbox is blocked in restricted/sandboxed shells.
  # NO --user-data-dir on purpose: headless then uses an ephemeral throwaway profile
  #   and exits cleanly after writing the PDF. A custom user-data-dir triggers the
  #   fresh profile's GCM/sync registration, which keeps the process alive (hang).
  & $browser --headless --no-sandbox --disable-gpu --no-pdf-header-footer `
    --print-to-pdf="$outPath" $uri | Out-Null
  if (Test-Path $outPath) {
    "{0,-30} -> {1,8:N0} bytes" -f $jobs[$in], (Get-Item $outPath).Length
  } else {
    Write-Warning "FAILED: $($jobs[$in])"
  }
}

Write-Host "Done."
