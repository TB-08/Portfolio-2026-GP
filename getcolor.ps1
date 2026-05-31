Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("public\images\showcase\jci.png")
$bmp = new-object System.Drawing.Bitmap($img)
$pixel = $bmp.GetPixel(0,0)
Write-Host "$($pixel.R),$($pixel.G),$($pixel.B)"
$bmp.Dispose()
$img.Dispose()
