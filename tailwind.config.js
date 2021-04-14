module.exports = {
  purge: ["public/**/*.html", "src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        grey: {
          darkest: '#212121',
          dark: '#363636',
          light: '#565757',
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


