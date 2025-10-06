# Setting Up Andalus Font

This guide will help you set up the Andalus font for your 4orth SPACE project.

## Steps to Set Up Andalus Font

### 1. Obtain the Andalus Font
- **If you're using Windows**: The Andalus font should already be available on your system at `C:\Windows\Fonts\andalus.ttf`.
- **If you're not on Windows**: You'll need to obtain the Andalus font separately.

### 2. Convert to WOFF2 Format
The font needs to be in WOFF2 format for optimal web use:

1. Use an online converter like:
   - [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
   - [Transfonter](https://transfonter.org/)
   - [FontConverter.org](https://fontconverter.org/)

2. Upload your TTF file and convert it to WOFF2

### 3. Add the Font to Your Project
1. Place the converted `Andalus.woff2` file in the `public/fonts/` directory
2. The font configuration is already set up in `src/app/fonts/fonts.ts`

### 4. Run the Helper Script
We've created a PowerShell script to help you with this process:

```powershell
.\setup-andalus-font.ps1
```

This script will check if the Andalus font is available on your system and provide guidance.

## Verification

Once you've added the font file, you can verify it's working by:

1. Running your development server:
   ```
   npm run dev
   ```

2. Open your browser and check that the font is applied to the text.

## Technical Details

- The font is configured in `src/app/fonts/fonts.ts`
- It's applied globally in the root layout at `src/app/layout.tsx`
- CSS variables are set up in `src/app/globals.css`

If you encounter any issues, please ensure the font file is correctly named and placed in the `public/fonts/` directory.