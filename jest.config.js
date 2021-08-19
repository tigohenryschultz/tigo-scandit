module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: true,
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  transformIgnorePatterns: [
    "node_modules/(?!@ionic)",
  ],
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  }
}
