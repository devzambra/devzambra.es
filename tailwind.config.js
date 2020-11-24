module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx, mdx}',
    './components/**/*.{js,jsx,ts,tsx, mdx}'],
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
