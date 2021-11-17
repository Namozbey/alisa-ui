const colors = require('./src/components/theme/defaultColors')
const plugins = require('./src/plugins')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [...Object.keys(plugins).map(name => plugins[name]())],
}
