# Screenshots panels of the SVG comic with headless Edge, so they can be inspected (Read the PNG).
# Works even when the app window is minimised. Needs the edition's preview server running (comic/flemish/serve.ps1 on 8768, comic/english/serve.ps1 on 8769).
#   shot.ps1 -Out <png> -From <panel id> [-N 8] [-H 1450] [-Edition english]      panels via comic/<edition>/review.html (2 per row, wide panels full width)
#   shot.ps1 -Out <png> -Url <url> [-W 940] [-H 2700]          any page, e.g. the album: http://localhost:8768/index.html
# Height guide for review.html: about 400 px per row of two panels (8 panels: 1650, 12 panels: 2450).
param([Parameter(Mandatory)][string]$Out, [string]$From, [int]$N = 8, [string]$Url, [int]$W = 1100, [int]$H = 1450, [ValidateSet("flemish", "english")][string]$Edition = "flemish", [int]$Port = 0)
if (-not $Port) { $Port = $(if ($Edition -eq "english") { 8769 } else { 8768 }) }   # each edition has its own preview server: comic/flemish on 8768, comic/english on 8769
$edge = @("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "C:\Program Files\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $Url) { $Url = "http://localhost:$Port/review.html?from=$From&n=$N" }
$Url += $(if ($Url.Contains("?")) { "&" } else { "?" }) + "t=$(Get-Random)"   # defeat the cache: always render the current files
if (Test-Path $Out) { Remove-Item $Out }
$prof = Join-Path $env:TEMP "miniatuur-edge-shot"
$p = Start-Process -FilePath $edge -ArgumentList @("--headless=new", "--disable-gpu", "--hide-scrollbars", "--user-data-dir=$prof", "--virtual-time-budget=5000", "--window-size=$W,$H", "--screenshot=$Out", $Url) -Wait -PassThru -WindowStyle Hidden
if (Test-Path $Out) { "OK $Out" } else { "FAILED (exit $($p.ExitCode)) - is the server running on port $Port?" }
