export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        'spa-beige': '#FDF1E4',
        'spa-green': '#A3B18A', 
        'spa-accent': '#E9C46A',
        'spa-peach': '#F4A261',
      },
    },
  },
}