import localFont from 'next/font/local';

// Setup Andalus as a local font
export const andalus = localFont({
  src: '../../../public/fonts/Andalus.woff2',
  variable: '--font-andalus',
  display: 'swap',
});