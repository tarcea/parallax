module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xsm: '200px',
      sm: '300px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(232, 25%, 24%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },

      inset: {
        '-10': '-10px',
        167: '167px',
        15: '15px',
      },
    },
  },
  plugins: [],
};
