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
    violet: {
      DEFAULT: '#7054FE',
      10: '#EBEBFD3D',
      20: "#5E53F5"
    },
    blue: '#4193FE',
    green: '#32BB70',
    gray: '#232323',
    border: '#414141'
   },
  },
 },
 darkMode: 'class',
 plugins: [heroui()],
};

module.exports = config;
