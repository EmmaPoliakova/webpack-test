const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    joystick: './src/joystick.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
};