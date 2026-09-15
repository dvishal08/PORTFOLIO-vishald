$port = 8000
$listener = [System.Net.Sockets.TcpListener]$port
$listener.Start()
Write-Host "Server running at http://127.0.0.1:$port/" -ForegroundColor Cyan

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream)
        
        $requestLine = $reader.ReadLine()
        if ($requestLine) {
            $tokens = $requestLine.Split(' ')
            if ($tokens.Length -ge 2) {
                $path = $tokens[1]
                if ($path -eq '/' -or $path -eq '') { $path = '/index.html' }
                
                # Remove query string if any
                if ($path.Contains('?')) { $path = $path.Split('?')[0] }
                
                $filePath = Join-Path (Get-Location) $path.TrimStart('/')
                
                if (Test-Path $filePath -PathType Leaf) {
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                    $mime = switch ($ext) {
                        '.html' { 'text/html; charset=utf-8' }
                        '.css'  { 'text/css' }
                        '.js'   { 'text/javascript' }
                        '.png'  { 'image/png' }
                        '.jpg'  { 'image/jpeg' }
                        '.svg'  { 'image/svg+xml' }
                        default { 'application/octet-stream' }
                    }
                    
                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                } else {
                    $header = "HTTP/1.1 404 Not Found`r`nContent-Length: 0`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                }
            }
        }
        $stream.Close()
        $client.Close()
    } catch {
        # ignore error and continue
    }
}
