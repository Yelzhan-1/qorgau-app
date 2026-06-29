/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0B0F17',
          card: '#151D2A',
          border: '#26354A',
          text: '#F3F4F6'
        },
        classic: {
          bg: '#F4F6F9',
          card: '#FFFFFF',
          border: '#E5E7EB',
          text: '#111827'
        }
      }
    },
  },
  plugins: [],
}