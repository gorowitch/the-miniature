# Writes every album page and every panel of the SVG preview to comic/english/svg/ (pages/ and panels/).
# Needs the preview server on -Port (default 8769, the English edition) serving the comic folder, and Microsoft Edge.
param([int]$Port = 8769)
$ErrorActionPreference = "Stop"
$edge = @("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "C:\Program Files\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
$prof = Join-Path $env:TEMP "miniatuur-edge-export"
$dump = Join-Path $env:TEMP "miniatuur-export.html"
$p = Start-Process -FilePath $edge -ArgumentList @("--headless=new", "--disable-gpu", "--user-data-dir=$prof", "--virtual-time-budget=8000", "--dump-dom", "http://localhost:$Port/index.html?export=1&t=$(Get-Random)") -RedirectStandardOutput $dump -Wait -PassThru -WindowStyle Hidden
$html = [IO.File]::ReadAllText($dump, [Text.Encoding]::UTF8)
$m = [regex]::Match($html, '<pre id="export">(.*?)</pre>', 'Singleline')
if (-not $m.Success) { throw "No export block in the page (is the server running on port $Port?)" }
$files = [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value) | ConvertFrom-Json
$out = Join-Path $PSScriptRoot "svg"
$utf8 = New-Object Text.UTF8Encoding $false
$n = 0
foreach ($prop in $files.PSObject.Properties) {
  $path = Join-Path $out $prop.Name
  New-Item -ItemType Directory -Force -Path (Split-Path $path) | Out-Null
  [IO.File]::WriteAllText($path, $prop.Value, $utf8); $n++
}
"$n SVG files written to $out"
