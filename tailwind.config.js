/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px', 
      },
      colors:{
        'Cream':'#F2EAE2',
        'AurometalSaurus':'#6C7289',
        'Gunmetal':'#1C232B',
        'DeepAquamarine':'#3D8168',
        'DeepAquamarineHover':'#1A4032'
        
      },
      fontFamily:{
        'Montserrat':['Montserrat'],
        'Fraunces':['Fraunces']
      },
    },
  },
  plugins: [],
}

