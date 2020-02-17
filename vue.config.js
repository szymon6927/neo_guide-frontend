let cssConfig = {}
let chainWebpackConfig = config => config

if (process.env.NODE_ENV === 'production') {
  cssConfig.extract = {
    filename: `css/[name].[contenthash:8].css`,
    chunkFilename: `css/[name].[contenthash:8].css`
  }

  chainWebpackConfig = config => {
    config.output
      .filename(`js/[name].[contenthash:8].js`)
      .chunkFilename(`js/[name].[contenthash:8].js`)
  }
}

module.exports = {
  chainWebpack: chainWebpackConfig,
  css: cssConfig,
  // pwa: {
  //   workboxPluginMode: 'GenerateSW',
  //   workboxOptions: {
  //     navigateFallback: '/index.html',
  //     runtimeCaching: [
  //       {
  //         urlPattern: new RegExp('^https://api.neoguide.pl/api/v1/psalms/'),
  //         handler: 'networkFirst',
  //         options: {
  //           networkTimeoutSeconds: 20,
  //           cacheName: 'api-cache',
  //           cacheableResponse: {
  //             statuses: [0, 200]
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
}
