module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,css}"] ,
  theme: {
    extend: {
      colors: {
        primary: '#0b74d1',
        brand: {
          DEFAULT: '#0b74d1',
          light: '#3da3ff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      }
    }
  },
  plugins: []
};
