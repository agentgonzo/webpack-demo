const path = require('path');

const ROXEmbeddedPlugin = require('rox-embedded-webpack-plugin');

const options = {
  app: '61fbf485db6c64dd15713f3d',
  platform: 'Browser'
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ROXEmbeddedPlugin(options)
  ]
};
