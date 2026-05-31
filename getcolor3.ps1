Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("public\images\showcase\jci.png")
$bmp = new-object System.Drawing.Bitmap($img)
$p = $bmp.GetPixel(0, 470)
Write-Host "$($p.R),$($p.G),$($p.B)"
$p2 = $bmp.GetPixel(500, 470)
Write-Host "$($p2.R),$($p2.G),$($p2.B)"
$bmp.Dispose()
$img.Dispose()
