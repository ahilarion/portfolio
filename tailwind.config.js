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
      screens: {
        'xl' : '1600px',
        'lg' : '1370px',
        'md' : '1060px',
        'sm' : '780px',
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

