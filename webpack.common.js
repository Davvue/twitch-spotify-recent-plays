const path = require('path');

module.exports = {
  entry: {
    app: './js/client.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/client.js',
  },
};
