/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#991b1b',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        'xl' : '1320px',
      },
    },
  },
  plugins: [],
}

