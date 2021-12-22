module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "luckiest-guy": ["Luckiest Guy", "cursive"],
      },
      gridTemplateColumns: {
        "2-1": "2fr 1fr",
        auto: "repeat(auto-fill, minmax(96px,1fr))",
      },
    },
  },
  plugins: [],
};
