// Environment variables we can send to app
process.env.VUE_APP_VERSION = require('./package.json').version;
// Will reference androidBuild for both android and ios
process.env.VUE_APP_BUILD = require('./package.json').androidBuild;
// Flag for build visibility
process.env.VUE_APP_HIDEBUILD = require('./package.json').hideBuild;

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map';
    }
    config.resolve.alias = require('./aliases.config').webpack;
  },
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
      .end();
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'data/locales',
      enableInSFC: true
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  }
}
