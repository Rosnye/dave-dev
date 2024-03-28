/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('./src/images/fondo.jpeg')",
        'patronBg':"url('./src/assets/bgPattern.svg')",
        'Mountains':"url('./assets/flat-mountains.svg')",
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'bounce-slow': 'bounce 1s linear'
      }
    },
  },
  plugins: [],
}
