import { borderRadius, colors, fontSizes } from './src/themes';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/*.{html,ts}'],
  theme: {
    extend: {
      width: {
        maxScreen: '1440px',
      },
      colors: colors,
      fontSize: fontSizes,
      borderRadius: borderRadius,
    },
  },
  plugins: [],
};
