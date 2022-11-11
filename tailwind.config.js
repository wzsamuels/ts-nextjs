module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'black': "#000000",
      'white': '#FFFFFF',
      'light': '#E7E6EA',
      'lightAccent': '#18a95e',
      'primary': '#1762A9',
      'darkAccent': '#3a18a9',
      'darkShade': '#31354a',
      'darkerShade': '#181A24',
      'darkestShade': '#0B0B19',
    },
    fontFamily: {
      serif: ['spartacus', 'sans-serif'],
    },
    extend: {
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}