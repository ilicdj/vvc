/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#070606',
        light: '#F6F6F6',
        red: '#ff0000',
        green: '#00ff00',
        blue: '#0000ff',
        yellow: '#ffff00',
        overlay: 'rgba(0,0,0,0.7)',
        // darkModeBlack: '#37474F',
        darkModeBlack: 'rgb(28,28,33)',
        darkModeLight: '#DEE4E7'
      },
      fontFamily: {
        'heading': ["Bebas Neue", 'sans-serif'],
        'text': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'heading': '2.5rem',
        'faq-title': '1.4rem',
        'faq-answer': '1.2rem',
        'table-movie-info': '1.3rem'
      },
      maxWidth: {

      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

