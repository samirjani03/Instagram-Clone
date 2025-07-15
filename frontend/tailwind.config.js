/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'instagram-blue': '#0095f6',
        'instagram-gray': '#8e8e8e',
        'instagram-light-gray': '#fafafa',
        'instagram-border': '#dbdbdb',
        'instagram-dark-gray': '#262626',
        'instagram-link-blue': '#00376b',
        'facebook-blue': '#1877f2',
      },
      fontFamily: {
        'instagram': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}