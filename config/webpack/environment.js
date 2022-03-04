const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuey: 'jquery',
    "window.jQuery": "jquery"
  })
)

module.exports = environment
