/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Paleta del sitio: los mismos azules de siempre, usados como acento
      colors: {
        brand: {
          DEFAULT: '#3B94A8', // turquesa (acento principal)
          deep: '#225166',    // azul profundo (botones, texto destacado)
          light: '#7CC3D3',   // acento legible sobre fondo oscuro
          mist: '#E6F0F3',    // tinte muy suave para fondos
        },
        ink: '#13232E',       // texto principal
        paper: '#F6F8F9',     // fondo claro
        night: '#080F17',     // fondo oscuro
        'night-surface': '#0F1B24', // tarjetas y menús en modo oscuro
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        display: ['Sora', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
