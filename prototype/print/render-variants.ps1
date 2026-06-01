# Render the remaining choice: bg-soft vs bg-foxing, with the locked face (IM Fell) + header (h-plain).
#   variants/preview/      — Z7 letter + Z3 list, h-plain, on each candidate background
#   variants/backgrounds/  — parchment background samples (no body text), one per candidate bg
# Usage: pwsh -File render-variants.ps1   (run from prototype/print/)
# Throwaway comparison artifacts — collapse to the chosen bg once decided.

$ErrorActionPreference = 'Stop'
$here = $PSScriptRoot
$src  = Join-Path $here 'src\variants'

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

# clean the now-obsolete header-comparison output (h-plain is chosen)
Remove-Item (Join-Path $here 'variants\headers') -Recurse -Force -ErrorAction SilentlyContinue

$tmp = Join-Path $src '_render.html'
function Render($html, $outPath) {
  Set-Content -Path $tmp -Value $html -Encoding UTF8
  $uri = ([System.Uri]$tmp).AbsoluteUri
  & $browser --headless --no-sandbox --disable-gpu --no-pdf-header-footer `
    --print-to-pdf="$outPath" $uri | Out-Null
  if (Test-Path $outPath) { "{0,-26} {1,8:N0} bytes" -f (Split-Path $outPath -Leaf), (Get-Item $outPath).Length }
  else { Write-Warning "FAILED: $outPath" }
}

$bgs = @('bg-soft','bg-foxing')

# ---- real props (IM Fell + h-plain) on each candidate background ----
$prevOut = Join-Path $here 'variants\preview'
New-Item -ItemType Directory -Force -Path $prevOut | Out-Null
foreach ($prop in @(@{f='z7-letter.html';n='z7'}, @{f='z3-list.html';n='z3'})) {
  $tpl = Get-Content (Join-Path $src $prop.f) -Raw
  foreach ($b in $bgs) {
    $html = ($tpl -replace 'BGVAR', $b) -replace 'HVAR', 'h-plain'
    Render $html (Join-Path $prevOut ("{0}-{1}.pdf" -f $prop.n, $b))
  }
}

# ---- background-only samples ----
$bgOut = Join-Path $here 'variants\backgrounds'
New-Item -ItemType Directory -Force -Path $bgOut | Out-Null
Get-ChildItem $bgOut -Filter *.pdf -ErrorAction SilentlyContinue | Remove-Item -Force
$bgTpl = Get-Content (Join-Path $src 'bg-sample.html') -Raw
foreach ($b in $bgs) {
  $html = ($bgTpl -replace 'BGVAR', $b) -replace 'LABEL', $b
  Render $html (Join-Path $bgOut "$b.pdf")
}

Remove-Item $tmp -ErrorAction SilentlyContinue
Write-Host "Done. preview/ + backgrounds/ under: $(Join-Path $here 'variants')"
