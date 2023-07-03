/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors:{
      vermelho: '#FF5252',
      verde: '#55c6b0'
    },
     backgroundImage: {
      'fundo': "url('/assets/img/fundo.jpg')",
      'fundo2': "url('/assets/img/fundo2.jpg')"
    },
    fontFamily: {
      padrao: ['font-padrao', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
