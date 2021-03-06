module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat',
        readex: 'Readex Pro',
        exa: 'Lexend Exa',
        giga: 'Lexend Giga',
      },
      colors: {
        'border-paper': '#ffffff2e',
        paper: '#1D1D1D',
      },
      borderRadius: {
        paper: '25px',
      },
      spacing: {
        102: '32rem',
      },
    },
  },
  plugins: [],
};
