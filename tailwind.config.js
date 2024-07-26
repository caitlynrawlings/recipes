/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontSize: {
        'h1': '2.25rem', // 36px
        'h2': '1.875rem', // 30px
        'h3': '1.5rem', // 24px
        'h4': '1.25rem', // 20px
        'h5': '1rem', // 16px
        'h6': '0.875rem' // 14px
      },
      fontWeight: {
        'h1': '700', // bold
        'h2': '600', // semibold
        'h3': '500', // medium
        'h4': '400', // normal
        'h5': '300', // light
        'h6': '200' // thin
      },
      colors: {
        'h1': '#aa0000',
        'h2': '#4a5568',
        'h3': '#718096',
        'h4': '#a0aec0',
        'h5': '#cbd5e0',
        'h6': '#e2e8f0'
      },
      gridAutoColumns: {
        auto: 'auto',
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)',
      },
      gridAutoRows: {
        auto: 'auto',
        min: 'min-content',
        max: 'max-content',
        fr: 'minmax(0, 1fr)',
      },
    }
  },
  plugins: [],
};
