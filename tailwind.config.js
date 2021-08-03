module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,jsx,ts,tsx, mdx}',
      './components/**/*.{js,jsx,ts,tsx, mdx}'
    ],
    options: {
      safelist: [
        /border.*/
      ],
    }
  },
  darkMode: 'class',
  theme: {
    extend: {},
    container: {
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    }
  },
  variants: {},
  plugins: []
}
