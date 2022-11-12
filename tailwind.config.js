/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#edf0fe',
          200: '#bac5ff',
          300: '#98a7fe',
          400: '#758afe',
          500: '#536dfe',
          600: '#4b63e6',
        },
        black: {
          100: '#FAFAFA',
          200: '#f8f8f8',
          300: '#DDDDDD',
          400: '#999999',
          500: '#666666',
          600: '#555760',
          700: '#37383B',
          800: '#221f24',
        },
        text: {
          default: '#333333',
        },
      },
      borderRadius: {
        4: '4px',
        8: '8px',
        16: '16px',
      },
      fontSize: {
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
      },
    },
  },
  plugins: [],
};
