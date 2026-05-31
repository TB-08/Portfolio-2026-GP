Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("public\images\showcase\jci.png")
$bmp = new-object System.Drawing.Bitmap($img)
Write-Host "Top-Left: $($bmp.GetPixel(0, 0).R), $($bmp.GetPixel(0, 0).G), $($bmp.GetPixel(0, 0).B)"
Write-Host "Mid-Left: $($bmp.GetPixel(0, 470).R), $($bmp.GetPixel(0, 470).G), $($bmp.GetPixel(0, 470).B)"
Write-Host "Bot-Left: $($bmp.GetPixel(0, 940).R), $($bmp.GetPixel(0, 940).G), $($bmp.GetPixel(0, 940).B)"
$bmp.Dispose()
$img.Dispose()
