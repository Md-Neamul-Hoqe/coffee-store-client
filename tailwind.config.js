import colorOpacity from './src/js/colorOpacity';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [ require("daisyui") ],
  theme: {
    extend: {
      colors: {
        'coffee-header-gray': '#374151',
        'coffee-header-brown': '#331A15',
        'action-tan': '#d2b48c',
        // 'coffee-text-black': '#1B1A1A', /* 80, 50, 60, 70 */
        'body': (params) => colorOpacity("--body-text", params)
      },
      fontFamily: {
        "raleway": "'Raleway', sans-serif",
        "rancho": "'Rancho', cursive"
      }
    },
  },
}

