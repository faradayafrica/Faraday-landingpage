/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
        heroBg: '#FBF7F4',
        brandColor: '#05B851',
        textBlack: '#3F3F41',
        storiesBg: '#3F3F41',
        journeyBg: '#FBF7F4',
      },
      fontFamily: {
        workSans: 'Work Sans',
        roboto: 'Roboto',
      },
      // backgroundImage: {
      // heroImg: "url('./src/images/heroBg.svg')",
      // },
    },
  },
  plugins: [],
};
