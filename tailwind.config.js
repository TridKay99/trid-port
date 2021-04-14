module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        grey: {
          darkest: '#000000',
          dark: '#212121',
          light: '#333333',
          text: '#cdcdcd'
        },
        purple: {
          plum: '#bb86fc'
        },
        or: {
          gold: '#ff9a2d'
        }
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


