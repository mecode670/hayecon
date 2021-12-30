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
      },
      colors: {
        'border-paper': '#ffffff2e',
        paper: '#1D1D1D',
      },
      borderRadius: {
        paper: '25px',
      },
    },
  },
  plugins: [],
};
