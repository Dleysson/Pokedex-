module.exports = {
  mode: "jit",
  purge: ["./src/app/**/*.{ts,html}"],
  darkMode: false,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#454443',
        'secundary': '#C9C9C9',
        'p-yellow': '#FFCB05',
        'p-blue': '#3367B0',

      }
    },
    screens:{
      'xs': '400px'
    }
  },
  plugins: [],
}
