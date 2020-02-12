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
  css: cssConfig
}