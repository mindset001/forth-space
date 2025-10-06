Write-Host "Andalus Font Setup for Your Project"
Write-Host "------------------------------------"

$fontsFolder = "$env:windir\fonts"
$andalusPath = "$fontsFolder\andalus.ttf"
$projectFontFolder = Join-Path $PSScriptRoot "public\fonts"
$outputPath = Join-Path $projectFontFolder "Andalus.woff2"

Write-Host "Checking for Andalus font on your system..."
if (-not (Test-Path $andalusPath)) {
    Write-Host "Andalus font not found at $andalusPath" -ForegroundColor Yellow
    Write-Host "Please obtain the Andalus font and place it in the $projectFontFolder directory as Andalus.woff2"
    Write-Host "You can use online services like Font Squirrel Webfont Generator to convert TTF to WOFF2."
    Write-Host "Visit: https://www.fontsquirrel.com/tools/webfont-generator"
    exit 1
}

Write-Host "Andalus font found at $andalusPath" -ForegroundColor Green
Write-Host "To complete setup:"
Write-Host "1. Copy this font file to $projectFontFolder"
Write-Host "2. Use a converter like Font Squirrel to convert it to WOFF2 format"
Write-Host "3. Rename the file to 'Andalus.woff2'"
Write-Host "4. Place it in the $projectFontFolder directory"

Write-Host "`nOnline conversion tools:"
Write-Host "- Font Squirrel: https://www.fontsquirrel.com/tools/webfont-generator"
Write-Host "- Transfonter: https://transfonter.org/"
Write-Host "- FontConverter.org: https://fontconverter.org/"