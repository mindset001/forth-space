# setup-fonts.ps1
# Script to help set up Andalus and paragraph fonts for the project

# Output styling function
function Write-ColorOutput($ForegroundColor) {
    $fc = $host.UI.RawUI.ForegroundColor
    $host.UI.RawUI.ForegroundColor = $ForegroundColor
    if ($args) {
        Write-Output $args
    }
    else {
        $input | Write-Output
    }
    $host.UI.RawUI.ForegroundColor = $fc
}

# Create fonts directories if they don't exist
$appFontsDir = ".\src\app\fonts\fonts"
if (-not (Test-Path $appFontsDir)) {
    New-Item -Path $appFontsDir -ItemType Directory | Out-Null
    Write-ColorOutput Green "Created app fonts directory at $appFontsDir"
}

# Check for Andalus font on Windows system
$winFontPath = "$env:windir\Fonts\andalus.ttf"
if (Test-Path $winFontPath) {
    Write-ColorOutput Green "✓ Andalus font found on your system at: $winFontPath"
    
    # Check if Andalus.woff2 already exists in our fonts directory
    $projectAndalusFont = "$appFontsDir\Andalus.woff2"
    if (Test-Path $projectAndalusFont) {
        Write-ColorOutput Green "✓ Andalus.woff2 already exists in your project"
    } else {
        Write-ColorOutput Yellow "! Andalus.woff2 not found in your project"
        Write-ColorOutput Yellow "  You need to convert the Andalus.ttf file to WOFF2 format."
        Write-ColorOutput Yellow "  Use one of these online converters:"
        Write-ColorOutput Yellow "  - https://www.fontsquirrel.com/tools/webfont-generator"
        Write-ColorOutput Yellow "  - https://transfonter.org/"
        Write-ColorOutput Yellow "  - https://fontconverter.org/"
        Write-ColorOutput Yellow "  Then place the converted file at: $projectAndalusFont"
    }
} else {
    Write-ColorOutput Red "✗ Andalus font not found on your system"
    Write-ColorOutput Yellow "  You'll need to obtain the Andalus font and convert it to WOFF2 format"
}

# Check for paragraph font
$projectParagraphFont = "$appFontsDir\ParagraphFont.woff2"
if (Test-Path $projectParagraphFont) {
    Write-ColorOutput Green "✓ ParagraphFont.woff2 already exists in your project"
} else {
    Write-ColorOutput Yellow "! ParagraphFont.woff2 not found in your project"
    Write-ColorOutput Yellow "  You need to provide a font file for paragraphs."
    Write-ColorOutput Yellow "  Convert your chosen font to WOFF2 format using one of these online converters:"
    Write-ColorOutput Yellow "  - https://www.fontsquirrel.com/tools/webfont-generator"
    Write-ColorOutput Yellow "  - https://transfonter.org/"
    Write-ColorOutput Yellow "  - https://fontconverter.org/"
    Write-ColorOutput Yellow "  Then place the converted file at: $projectParagraphFont"
    
    # Prompt for paragraph font preference
    Write-ColorOutput Cyan "`nWhat font would you like to use for paragraphs? Enter the name:"
    $paragraphFontName = Read-Host
    
    if ($paragraphFontName) {
        # Check if the font exists on the system
        $winFontPathPattern = "$env:windir\Fonts\$paragraphFontName*.ttf"
        $matchingFonts = Get-ChildItem -Path $winFontPathPattern -ErrorAction SilentlyContinue
        
        if ($matchingFonts) {
            Write-ColorOutput Green "✓ Found matching fonts on your system:"
            foreach ($font in $matchingFonts) {
                Write-ColorOutput Green "  - $($font.Name)"
            }
            Write-ColorOutput Yellow "  You need to convert one of these TTF files to WOFF2 format."
        } else {
            Write-ColorOutput Red "✗ No matching fonts found on your system for: $paragraphFontName"
        }
    }
}

Write-ColorOutput Green "`nNext Steps:"
Write-ColorOutput White "1. Ensure both Andalus.woff2 and ParagraphFont.woff2 are in the $appFontsDir directory"
Write-ColorOutput White "2. Update the src/app/fonts/fonts.ts file to use local fonts instead of Google Fonts"
Write-ColorOutput White "3. Run your development server with: npm run dev"
Write-ColorOutput White "4. Check that fonts are properly applied in your browser"