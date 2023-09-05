/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      maxWidth: {
        '5/6': '83.333333%',
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.04em',
      },
      fontFamily: {
        sriracha: ['Sriracha', 'cursive'],
      },
    },
  },
  plugins: [],
}
