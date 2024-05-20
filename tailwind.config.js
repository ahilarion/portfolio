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
        // special colors
        'sp-blue' : '#4D5BCE',
        'sp-green' : '#43D9AD',
        'sp-orange' : '#E99287',
      }
    },
  },
  plugins: [],
}

