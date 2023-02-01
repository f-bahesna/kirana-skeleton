module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'blue-primary': {
          light: '#2AB2FA',
          DEFAULT: '#169ADD',
          dark: '#1286C4',
        },
        'green-primary': {
          light: '#26C423',
          DEFAULT: '#209B1D',
          dark: '#187A16',
        },
        'dashboard-primary': {
          light: '#81BAE6',
          DEFAULT: '#0662A3',
          button: '#1E86CE',
        },
      },
      screens: {
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [
    require('@vueform/slider/tailwind'),
  ],
}