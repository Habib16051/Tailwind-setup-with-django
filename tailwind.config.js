/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
  // './home.html',

],

  theme: {
    extend: {
      spacing: {
        'some key': {
          1.5: '<something>',
        },
    },
  },
  plugins: [],
}
}
