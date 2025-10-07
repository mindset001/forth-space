import localFont from 'next/font/local';

// Setup Andalus as a local font
export const andalus = localFont({
 src: '../../../public/fonts/Andalus.woff2', // You'll need to replace this with your actual Andalus font file
  variable: '--font-andalus',
  display: 'swap',
});

// Setup paragraph font
export const paragraphFont = localFont({
  src: '../../../public/fonts/paragraphfont.woff2', // You'll need to replace this with your actual paragraph font file
  variable: '--font-paragraph',
  display: 'swap',
});