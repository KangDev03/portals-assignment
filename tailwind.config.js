import { colors, heroui } from '@heroui/theme';

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
   maxWidth: {
    '8xl': '90rem', // ~1440px
   },
   colors: {
    white: '#FFFFFF',
    black: {
     DEFAULT: '#000000',
     80: '#111111',
     90: '#111111',
     100: '#202020',
     200: '#262626',
    },
    pink: '#FF4CAC',
    violet: {
     DEFAULT: '#7054FE',
     10: '#EBEBFD3D',
     20: '#5E53F5',
    },
    blue: '#4193FE',
    green: {
     DEFAULT: '#32BB70',
     10: '#1ABC72',
     20: '#66D2A1',
    },
    orange: {
     DEFAULT: '#F97F4B',
    },
    gray: {
     DEFAULT: '#232323',
     10: '#1F1F1F',
     20: '#E7E7E7',
     30: '#F5F5F5',
     40: '#F8F8F8',
     50: '#353535',
     60: '#D7D7D7',
    },
    border: '#414141',
    red: {
     DEFAULT: '#FF3A3A',
     10: '#FF5B5B',
     20: '#FF9090',
    },
   },
  },
 },
 darkMode: 'class',
 plugins: [
  heroui({
   themes: {
    light: {
     colors: {
      background: '#fbfbfb',
     },
    },
    dark: {
     colors: {
      background: '#000000',
     },
    },
   },
  }),
 ],
};

module.exports = config;
