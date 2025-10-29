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
    display: ['var(--font-display)'],
   },
   colors: {
    white: '#FFFFFF',
    black: {
     DEFAULT: '#000000',
     90: '#111111CC',
     100: '#202020',
     200: '#262626',
    },
    pink: '#FF4CAC',
    violet: '#7054FE',
    blue: '#4193FE',
    green: '#32BB70',
    gray: '#232323',
    border: '#242424'
   },
  },
 },
 darkMode: 'class',
 plugins: [heroui()],
};

module.exports = config;
