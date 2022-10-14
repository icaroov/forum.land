const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt']
  },
  reloadOnPrerender: !isProd
}
