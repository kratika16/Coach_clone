/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        airport: "url('../src/assets/images/airport-background.png')",
        homebanner: "url('../src/assets/images/jpg/home-banner.jpg')",
        airarrow: "url('../src/assets/images/svg/air-arrow.svg')",
        loginpageimage: "url('../src/assets/images/jpg/bg-auth.jpeg')",
        accountpage: "url('../src/assets/images/svg/wcc-login.svg')"
      },
      container: {
        center: true,
      },
      screens:{
        'mx-3xl': { max: '5400px' },
        'mx-2xl': { max: '1535px' },
        'mx-xl': { max: '1279px' },
        'mx-lg': { max: '1023px' },
        'mx-md': { max: '767px' },
        'mx-sm': { max: '639px' },
        'mx-xs':  {max: '530'},
      },

      colors: {
        denim: "rgb(25 130 198)",
        'dodger-blue': "rgb(39 156 247)",
        slate: "rgb(100 116 139)",
        skyblue: "rgb(3 105 161)",
        boxblue: "#0062a9",
        headingblue: "rgb(8 145 178)",
        sky100: "rgb(224 242 254)",
        cyan100: "rgb(207 250 254)",
        orange: "rgb(249 115 22)",
        darkgrey: 'rgb(31 41 55)',
        lightgrey: 'rgb(156 163 175)',
        cyan700: 'rgb(14 116 144)',
        blue400: 'rgb(96 165 250)',
        gray100: 'rgb(243 244 246)',
        offwhite: '#f5f5f5',
        linkblue: '#009ff7',
        serveblue: '#0062a9',
        red: '#FF0000',
        endeavour: 'rgb(4 97 169)',
        mystic: 'rgb(222 229 238)',
        ghost: 'rgb(206 212 218)',
        trout: 'rgb(73 80 87)',
        'dusty-gray': 'rgb(151 151 151)',
        linkwater: 'rgb(204 223 238)',
        ecstacy: 'rgb(247 127 39)',
        crimson: 'rgb(237 28 46)',
        grey: 'rgb(249 249 249)',
      },
      width: {
        88: '88%',
        45: '45%',
        480: '480px',
        6: '6%',
        95: '95%',
        75: '75px',
        15: '15%',
        285: '285px',
      },
      margin: {
        1.7: "1.7rem",
        3: '3px',
        9: '9px',
      },
      fontSize: {
        17: '17px',
        38: '38px',
        14: '14px',
        30: '30px',
      },
      height: {
        395: '395px',
        260: '260px',
        205: '205',
        180: '180px',
        300: '300px',
      },
      dropShadow: {
        shuttlebox: '[0_2px_2px_rgba(0,0,0,0.10)]',
      },
      zIndex:{
        100: '100',
      }
    },
  },
  plugins: [],
};
