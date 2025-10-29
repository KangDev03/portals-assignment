import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
 content: [
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {
   fontFamily: {
    sans: ['var(--font-sans)'],
    mono: ['var(--font-mono)'],
   },
   colors: {
    white: '#FFFFFF',
    black: {
     DEFAULT: '#000000',
     90: '#111111CC',
     100: '#202020',
     200: '#262626',
    },
   },
  },
 },
 darkMode: 'class',
 plugins: [heroui()],
};

module.exports = config;
