module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,css}"] ,
  theme: {
    extend: {
      colors: {
          primary: '#00C4CC',
          brand: {
            DEFAULT: '#00C4CC',
            light: '#66e6e9'
          }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      },
      padding: {
        'safe-area-inset-bottom': 'env(safe-area-inset-bottom)'
      }
    }
  },
  plugins: []
};
