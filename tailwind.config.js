module.exports = {
  purge: ['./components/**/*.js', './components/**/*.css', './pages/**/*.js'],
  theme: {
    screens: {
      // mobile
      sm: '640px',
      // tablet
      md: '1024px',
      // desktop
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'white',
            h1: {
              color: 'white',
            },
            h2: {
              color: 'white',
            },
          },
        },
      },
      zIndex: {
        '-1': -1,
      },
      brightness: {
        25: 0.25,
      },
      colors: {
        primary: {
          lighter: '#7f2a8a',
          DEFAULT: '#551b5d',
          dark: '#37123c',
          darker: '#250c28',
          darkest: '#18081a',
        },
        secondary: {
          lighter: '#fcb760',
          light: '#fa9416',
          DEFAULT: '#f18805',
          dark: '#bf6c04',
          darker: '#a65e03',
        },
        surface: {
          light: '#f9f5ef',
          DEFAULT: '#f2e9dc',
          dark: '#ebddc9',
          darker: '#e4d2b7',
          darkest: '#ddc6a4',
        },
        typing: {
          lighter: '#4c381c',
          light: '#3a2b15',
          DEFAULT: '#271d0e',
          dark: '#140f08',
          darker: '#020101',
        },
        success: {
          lighter: '#5eab66',
          light: '#4a8c50',
          DEFAULT: '#386b3d',
          dark: '#2f5a33',
          darker: '#264a2a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
