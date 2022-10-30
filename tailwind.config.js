/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: '#cbd5e1',
        redd: '#DC4492',
        yellow: '#FDCC49',
        grey: '#ededed',
        purple: '#8257e5',
        bank: '#000065',
        uni: '#3b246c',
        'deep-blue': '#010026',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brushh.png')",
        university1: "url('./assets/university.png')",
        bank: "url('./assets/bank.png')",
        rocketseatimg: "url('./assets/rocketseat.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
