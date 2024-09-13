/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        youtubeGray: '#121212', 
        youtubeGray1: '#333333',
      },
    },
  },
  plugins: [],
}

