/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {

        colors: {
        'rintero-primary-color': '#ABEF5F'
       }
       ,
        backgroundImage: {
          'image-bg': " url('./assets/bg.jpg')"
       }
    },
  },
  plugins: [],
}
