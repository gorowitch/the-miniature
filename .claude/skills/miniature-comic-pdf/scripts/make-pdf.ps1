# Bundles the album pages of the SVG preview (comic/svg/pages/*.svg: cover + A4 pages) into one PDF, one page per A4 sheet.
# Uses headless Microsoft Edge (print to PDF); no Python or Node needed.
#   make-pdf.ps1 [-Out <pdf>] [-Export] [-Port 8768]
#   -Export   first re-export the SVGs from the current panels (needs the preview server on -Port: comic/serve.ps1)
# Output default: comic/pdf/de-miniatuur.pdf. Prints the number of pages found in the PDF, so the caller can check it.
param([string]$Out, [switch]$Export, [int]$Port = 8768)
$ErrorActionPreference = "Stop"
$root = (Resolve-Path (Join-Path $PSScriptRoot "..\..\..\..")).Path          # project root (.claude/skills/<skill>/scripts -> root)
$comic = Join-Path $root "comic"
if (-not $Out) { $Out = Join-Path $comic "pdf\de-miniatuur.pdf" }
$Out = [IO.Path]::GetFullPath($Out)
New-Item -ItemType Directory -Force -Path (Split-Path $Out) | Out-Null

if ($Export) {
  # The export reads the album from the preview server; start one for the duration of the export if none is running.
  $up = $false; try { $up = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 3 "http://localhost:$Port/index.html").StatusCode -eq 200 } catch {}
  $server = $null
  if (-not $up) {
    $server = Start-Process -FilePath "powershell" -ArgumentList @("-NoProfile", "-ExecutionPolicy", "Bypass", "-File", (Join-Path $comic "serve.ps1"), "-Port", $Port) -PassThru -WindowStyle Hidden
    for ($i = 0; $i -lt 20 -and -not $up; $i++) { Start-Sleep -Milliseconds 500; try { $up = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 3 "http://localhost:$Port/index.html").StatusCode -eq 200 } catch {} }
    if (-not $up) { throw "Could not start the preview server on port $Port." }
    "Started the preview server on port $Port for the export."
  }
  try { & powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $comic "export-svg.ps1") -Port $Port | Out-Host }
  finally { if ($server) { Stop-Process -Id $server.Id -Force -ErrorAction SilentlyContinue; "Stopped the preview server again." } }
}

$pages = Get-ChildItem (Join-Path $comic "svg\pages") -Filter "page-*.svg" | Sort-Object Name   # page-00-cover, page-01, ... in reading order
if (-not $pages) { throw "No page SVGs in comic/svg/pages - run comic/export-svg.ps1 first (or pass -Export)." }

# One HTML document with every page SVG inlined (inline, not <img>, so the Comic Neue web font in each SVG can load).
$sb = New-Object Text.StringBuilder
[void]$sb.Append('<!doctype html><html><head><meta charset="utf-8"><title>De Miniatuur</title><style>@page { size: A4; margin: 0 } html, body { margin: 0; padding: 0 } .p { width: 210mm; height: 297mm; overflow: hidden; page-break-after: always; break-after: page } .p:last-child { page-break-after: auto; break-after: auto } .p > svg { display: block; width: 210mm; height: 297mm }</style></head><body>')
foreach ($p in $pages) {
  $svg = [IO.File]::ReadAllText($p.FullName, [Text.Encoding]::UTF8) -replace '^\s*<\?xml[^>]*\?>\s*', ''
  [void]$sb.Append('<div class="p">').Append($svg).Append('</div>')
}
[void]$sb.Append('</body></html>')
$html = Join-Path $env:TEMP "miniatuur-print.html"
[IO.File]::WriteAllText($html, $sb.ToString(), (New-Object Text.UTF8Encoding $false))

$edge = @("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "C:\Program Files\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw "Microsoft Edge not found." }
if (Test-Path $Out) { Remove-Item $Out }
$prof = Join-Path $env:TEMP "miniatuur-edge-pdf"
$url = "file:///" + ($html -replace '\\', '/')
$proc = Start-Process -FilePath $edge -ArgumentList @("--headless=new", "--disable-gpu", "--user-data-dir=$prof", "--virtual-time-budget=10000", "--no-pdf-header-footer", "--print-to-pdf=`"$Out`"", $url) -Wait -PassThru -WindowStyle Hidden
if (-not (Test-Path $Out)) { throw "Edge did not write the PDF (exit $($proc.ExitCode))." }

$bytes = [IO.File]::ReadAllBytes($Out)
$text = [Text.Encoding]::ASCII.GetString($bytes)
$n = ([regex]::Matches($text, '/Type\s*/Page[^s]')).Count
"PDF written: $Out"
"Pages in PDF: $n (album pages found: $($pages.Count))"
"Size: {0:N0} KB" -f ($bytes.Length / 1KB)
