# Local preview server for the SVG comic: serves the comic folder (html, js, svg) on http://localhost:<Port>/.
param([int]$Port = 8768, [string]$Root = $PSScriptRoot)
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Output "Serving $Root on http://localhost:$Port/"
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $name = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
  if ($name -eq '') { $name = 'index.html' }
  $path = Join-Path $Root $name
  if ((Test-Path $path -PathType Leaf) -and ((Resolve-Path $path).Path.StartsWith((Resolve-Path $Root).Path))) {
    $bytes = [IO.File]::ReadAllBytes($path)
    $ctx.Response.ContentType = $(if ($path -like '*.js') { 'text/javascript; charset=utf-8' } elseif ($path -like '*.svg') { 'image/svg+xml' } else { 'text/html; charset=utf-8' })
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else { $ctx.Response.StatusCode = 404 }
  $ctx.Response.Close()
}
