const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  theme: {
    fontFamily: {
      serif: ['spartacus', 'sans-serif'],
    },
    extend: {
      colors: {
        'light': '#E7E6EA',
        'lightAccent': '#18a95e',
        'primary': '#1762A9',
        'darkAccent': '#3a18a9',
        'darkShade': '#31354a',
        'darkerShade': '#181A24',
        'darkestShade': '#0B0B19',
      },
      spacing: {
        'textbox': '1030px',
      },
      maxWidth: {
        'textbox': '1030px',
      },
      height: {
        'navbar': '50px',
      },
      width: {
        drawer: '220px',
      },
      boxShadow: {
        'footer': '0 -3px 1px -2px rgb(0 0 0 / 20%), 0 -2px 2px 0 rgb(0 0 0 / 14%), 0 -1px 5px 0 rgb(0 0 0 / 12%)',
      },
      flexBasis: {
        'label': '220px'
      },
      keyframes: {
        fromBottom: {
          'from': {bottom: '-300px', opacity:0},
          'to': {bottom: 0, opacity:1}
        },
        fromLeft: {
          'from': {left: '-300px', opacity:0},
          'to': {left:0, opacity:1}
        },
        fadeIn: {
          'from': {opacity: 0},
          'to': {opacity: 1}
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addVariant }) {
      addVariant('not-last', '&>*:not(:last-child)')
    })
  ]
}
