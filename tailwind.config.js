/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1c1c1c',
          mid: '#5c5c5c',
          light: '#f7f7f7',
          accent: '#d4a044',
        },
      },
      boxShadow: {
        'card-lg': '0 24px 60px rgba(15, 15, 15, 0.08)',
        divider: '0 1px 0 0 rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}


