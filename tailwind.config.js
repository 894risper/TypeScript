/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        // Customize colors here if needed
        primary: '#3f51b5',
        secondary: '#f50057',
        darkBackground: '#1a1a1a',
        darkText: '#fff',
      },
    },
  },
  plugins: [],
}

