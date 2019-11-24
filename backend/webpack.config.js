const path = require('path');
const nodeExternals = require('webpack-node-externals');
const {
  NODE_ENV = 'development',
} = process.env;

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  },
  externals: [ nodeExternals() ] // in order to ignore all modules in node_modules folder
}