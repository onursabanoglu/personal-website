module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-selector-matches': {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: ['./src/styles/viewport.css']
    }
  }
}