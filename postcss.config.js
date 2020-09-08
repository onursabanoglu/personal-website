module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-custom-media': {
      importFrom: ['./src/styles/viewport.css']
    }
  }
}