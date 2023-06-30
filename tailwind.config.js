/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors:{
      vermelho: '#FF5252'
    },
     backgroundImage: {
      'fundo': "url('/assets/img/fundo.jpg')",
    },
    fontFamily: {
      padrao: ['font-padrao', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
