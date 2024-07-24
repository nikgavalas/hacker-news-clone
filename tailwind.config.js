import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#1E2025',
            primary: {
              DEFAULT: '#FE7139',
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: '#FE7139',
            },
          },
        },
      },
    }),
  ],
  theme: {
    extend: {},
  },
};
