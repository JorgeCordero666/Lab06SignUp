const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      fallback: {
        fs: false, // Evita cargar el módulo 'fs'
        path: require.resolve('path-browserify'), // Utiliza el módulo 'path-browserify' en su lugar
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      isProduction ? new webpack.DefinePlugin({ 'process.env': {} }) : new Dotenv(),
    ],
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3000,
      hot: true,
    },
  };
};
