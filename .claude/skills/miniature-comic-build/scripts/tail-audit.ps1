# Balloon-tail audit: lists every speech-balloon tail in the comic that crosses a face or hat.
# Needs the edition's preview server running (comic/flemish/serve.ps1 on 8768, comic/english/serve.ps1 on 8769). Prints one line per crossing tail and a total.
param([ValidateSet("flemish", "english")][string]$Edition = "flemish", [int]$Port = 0)
if (-not $Port) { $Port = $(if ($Edition -eq "english") { 8769 } else { 8768 }) }
$edge = @("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "C:\Program Files\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
$dump = Join-Path $env:TEMP "miniatuur-tail-audit.html"
Start-Process -FilePath $edge -ArgumentList @("--headless=new", "--disable-gpu", "--user-data-dir=$env:TEMP\miniatuur-edge-audit", "--virtual-time-budget=6000", "--dump-dom", "http://localhost:$Port/audit.html?t=$(Get-Random)") -RedirectStandardOutput $dump -Wait -WindowStyle Hidden
$m = [regex]::Match([IO.File]::ReadAllText($dump, [Text.Encoding]::UTF8), '<pre id="audit">(.*?)</pre>', 'Singleline')
if (-not $m.Success) { throw "No audit block (is the server running on port $Port?)" }
$rows = [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value) | ConvertFrom-Json
$bad = @($rows | Where-Object { $_.hits.Count -gt 0 })
foreach ($r in $bad) { "{0,-6} tail of {1,-8} crosses: {2}" -f $r.panel, $r.who, ($r.hits -join ", ") }
"Checked $($rows.Count) tails, $($bad.Count) cross a face or hat"
