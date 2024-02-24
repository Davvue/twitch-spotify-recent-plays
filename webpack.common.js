const path = require('path');

module.exports = {
  entry: {
    client: './js/client.js',
    config: './js/config.js',
    live_config: './js/live_config.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/[name].js',
  },
};
