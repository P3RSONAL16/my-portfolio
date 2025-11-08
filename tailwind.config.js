/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        drukBold: ["'Druk Wide Bold'", "sans-serif"],
        drukMedium: ["'Druk Medium'", "sans-serif"],
        akzBlack: ["'Akzidenz Grotesk Black'", "sans-serif"],
        akzLight: ["'Akzidenz Grotesk Light'", "sans-serif"],
        strretch: ["'STRRETCH SANS'", "sans-serif"],
        boombie: ["'BOOMBIE'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
