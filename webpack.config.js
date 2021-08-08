const path = require('path');

module.exports = {
  entry: {
    joystick_receive: './src/joystick_receive.js',
    joystick: './src/joystick.js',
    touchpad_receive: './src/touchpad_receive.js',
    touchpad: './src/touchpad.js'

  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000,
  },
};