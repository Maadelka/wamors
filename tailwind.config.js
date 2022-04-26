module.exports = {
  content: ["./public/**/*.{html,js}","./index.html","./src/**/*.{js}"],
  theme: {
    extend: {
      colors:{
        'gray-trans':'#373737a9',
      },
      boxShadow: {
        'tl': '0 5px 3px rgba(0, 0, 0, 0.3)',
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
