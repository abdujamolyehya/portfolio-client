/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#0A0A0A',
        lightgray: '#3B3B3B',
        gray: '#121212'
      }
    },
    screens: {
      "medium": {
        "max": "1200px",
        "min": "700px"
      },
      "mobile": {
        "max": "700px"
      }
    }
  },
  plugins: [],
}
