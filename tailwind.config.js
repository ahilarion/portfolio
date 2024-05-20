/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
      },
      colors: {
        'primary': '#011627',
        'secondary': '#010C15',
        'stroke': '#1E2D3D',
        'text': '#607B96',
        'sp-blue' : '#4D5BCE',
      }
    },
  },
  plugins: [],
}

