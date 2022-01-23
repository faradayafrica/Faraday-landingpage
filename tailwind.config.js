module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        heroBg: "#FBF7F4",
        brandColor: "#05B851",
        textBlack: "#3F3F41",
        storiesBg: "#3F3F41",
        journeyBg: "#FBF7F4",
      },
      fontFamily: {
        workSans: "Work Sans",
        roboto: "Roboto",
      },
      backgroundImage: {
        heroImg: "url('./images/heroBg.svg')",
      },
    },
  },
  plugins: [],
};
