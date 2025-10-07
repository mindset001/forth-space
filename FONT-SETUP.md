# Setting Up Project Fonts

This guide will help you set up the fonts for your 4orth SPACE project.

> **Note:** The project is currently using Google Fonts (Montserrat and Lora) as temporary replacements until your custom fonts are available.

## Font Setup Overview
- **Andalus Font**: Used for general text and headings (temporarily using Montserrat)
- **Paragraph Font**: Used specifically for paragraph text (temporarily using Lora)

## Steps to Set Up Fonts

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

### 3. Add the Fonts to Your Project
1. Place the converted `Andalus.woff2` file in the `public/fonts/` directory
2. Place your paragraph font as `ParagraphFont.woff2` in the same directory
3. The font configurations are already set up in `src/app/fonts/fonts.ts`

### 4. Run the Helper Script
We've created a PowerShell script to help you with this process:

```powershell
.\setup-fonts.ps1
```

This script will check if the required fonts are available on your system and provide guidance.

## Verification

Once you've added the font file, you can verify it's working by:

1. Running your development server:
   ```
   npm run dev
   ```

2. Open your browser and check that:
   - Andalus font is applied to general text and headings
   - Your paragraph font is applied to all paragraph (`<p>`) elements

## Technical Details

- Both fonts are configured in `src/app/fonts/fonts.ts`
- They're applied in the root layout at `src/app/layout.tsx`
- CSS variables are set up in `src/app/globals.css`
- Andalus font is applied globally
- Paragraph font is specifically applied to all `<p>` elements

## Switching from Google Fonts to Local Fonts

When you have your font files ready:

1. Create a `fonts` directory inside `src/app` if it doesn't already exist
2. Place your font files in this directory:
   - `src/app/fonts/Andalus.woff2`
   - `src/app/fonts/ParagraphFont.woff2`
3. Update `src/app/fonts/fonts.ts` to use these local fonts:
   - Uncomment the local font code at the bottom of the file
   - Comment out or remove the Google Fonts code at the top

If you encounter any issues, ensure the font files are correctly named and placed in the right directories.