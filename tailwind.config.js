/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        youtubeGray: '#0d0d0d', 
        youtubeGray1: '#333333',
      },
    },
  },
  plugins: [],
}

