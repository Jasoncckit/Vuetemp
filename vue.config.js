module.exports = {
  publicPath: './',
  pwa: {
    name: 'Vuetemp',
    themeColor: '#FAFAFA',
    msTileColor: '#FAFAFA',
    workboxOptions: {
      skipWaiting: true
    }
  },
  transpileDependencies: ['vuetify'],
  productionSourceMap: false
}
