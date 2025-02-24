/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'whiteText':'#e4e4e7',
        'darkBlue':'#1b2d53',
        'lightBlue':'#6281dc',
        'gray':'#4b608f',
        'lightGray':'#f1f5f9',
        'darkGray':'#334155',
        'lightGray':'#f1f5f9',
        'pink':'#e0bacf',
        'darkerBlue':'#020617',
      }
    },
  },
  plugins: [],
}