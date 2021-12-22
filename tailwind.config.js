module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        readex: 'Readex Pro',
      },
      colors: {
        paper: '#1D1D1D',
      },
      borderRadius: {
        paper: '20px',
      },
    },
  },
  plugins: [],
};
