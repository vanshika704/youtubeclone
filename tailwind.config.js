/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        youtubeGray: '#333333', // Add a custom color called 'youtubeGray'
      },
    },
  },
  plugins: [],
}

