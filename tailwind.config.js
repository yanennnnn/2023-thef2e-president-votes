/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '2.5rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1240px',
        xl: '1440px',
        '2xl': '1736px',
      },
    },
    extend: {
      colors: {
        primary: '#4E4376',
        'blue': '#65A5D0',
        'purple': '#9B8DCD',
        'pink': '#E756B8',
        'green': '#08C0BE',
        'yellow': '#B4A073',
        'fuchsia': '#85618B',
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(90deg, #2B5876 0%, #4E4376 100%)`,
        'gradient-grey':`linear-gradient(147.66deg, #D9D9D9 0%, rgba(217, 217, 217, 0) 112.84%)`
      }),
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { 
          fontSize: theme('fontSize.3xl'),
          lineHeight: '48px',
          letterSpacing: '0.03em',
          fontWeight: '500'
        },
        'h2': { fontSize: theme('fontSize.2xl') },
        'h3': { fontSize: theme('fontSize.xl') },
        'h4': { fontSize: theme('fontSize.lg') },
        'h5': { fontSize: theme('fontSize.base') },
      })
    })
  ]
}

