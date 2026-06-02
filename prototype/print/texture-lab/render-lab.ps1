# render-lab.ps1 — headless Chrome/Edge: PNG samples of parchment texture variants.
# Usage:  pwsh -File render-lab.ps1     (run from prototype/print/texture-lab/)
# Output: output/<variant>-seed<NN>.png  — A4 portrait, 2× scale (~1654×2339, ≈200dpi).
# Purpose: let Oskar compare tuned-noise vs subtle-relief across seeds, on B&W-printable parchment.

$ErrorActionPreference = 'Stop'
$here   = $PSScriptRoot
$outDir = Join-Path $here 'output'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

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

$html = Join-Path $here 'lab.html'
$W = 827; $H = 1170   # A4 portrait @ ~100dpi; scale factor 2 → ~200dpi

# matrix: variant + seed
$jobs = @(
  @{ v='soft';          seed=7  },   # baseline = current parchment.css fibre (reference)
  @{ v='tuned';         seed=7  },
  @{ v='tuned';         seed=23 },
  @{ v='relief';        seed=7  },
  @{ v='relief';        seed=23 },
  @{ v='relief-strong'; seed=7  }    # upper bound of roughness (likely too much for B&W — to reject/confirm)
)

foreach ($j in $jobs) {
  $name = "{0}-seed{1:00}.png" -f $j.v, $j.seed
  $out  = Join-Path $outDir $name
  $uri  = ([System.Uri]$html).AbsoluteUri + ("?v={0}&seed={1}" -f $j.v, $j.seed)
  $prof = Join-Path $env:TEMP ("chrome-texlab-{0}-{1}" -f $j.v, $j.seed)
  $args = @(
    '--headless=new','--no-sandbox','--disable-gpu',
    "--user-data-dir=$prof",
    "--force-device-scale-factor=2",
    "--window-size=$W,$H",
    "--screenshot=$out",
    '--run-all-compositor-stages-before-draw',
    $uri
  )
  & $browser @args 2>$null
  Remove-Item $prof -Recurse -Force -ErrorAction SilentlyContinue
  if (Test-Path $out) {
    $kb = [math]::Round((Get-Item $out).Length / 1KB)
    "{0,-22} {1,6} KB" -f $name, $kb
  } else {
    Write-Warning "FAILED: $name"
  }
}

Write-Host "`nDone. Output: $outDir"
Write-Host "Open the PNGs and compare: soft (baseline) vs tuned vs relief vs relief-strong."
Write-Host "Check at 100%: is the texture delicate enough? Does the ink stay legible for B&W print?"
