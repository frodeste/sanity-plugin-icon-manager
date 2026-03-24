const {defineConfig} = require('@sanity/pkg-utils')

module.exports = defineConfig({
  dist: 'dist',
  tsconfig: 'tsconfig.dist.json',

  extract: {
    rules: {
      'ae-incompatible-release-tags': 'off',
      'ae-internal-missing-underscore': 'off',
      'ae-missing-release-tag': 'off',
    },
  },
})
