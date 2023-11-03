const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F8F8F8",
        "dark-gray": "#595959",
        "extremely-dark-gray": "#030303",
        "vibrant-red": "#EA454C",
        facebookBlue: "#1178f2",
        githubGrey: "#333333",
        linkedinBlue: "#0a66c2",
        telegramBlue: "#1DA1F2",
        websiteGrey: "#848484",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
