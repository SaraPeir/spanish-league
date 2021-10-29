const path = require('path')
const nodeExternals = require('webpack-node-externals')
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const LoadablePlugin = require('@loadable/webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const loadablePlugin = new LoadablePlugin()
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin()

const browserConfig = {
  entry: './src/client/index.js',
  devtool: 'source-map',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/',
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.s(c)ss$/,
        use: [devMode ? 'style-loader' : miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [loadablePlugin, bundleAnalyzerPlugin],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: {
      name: "manifest",
   }, 
   splitChunks: {
    cacheGroups: {
      vendor: {
        name: "node_vendors",
        test: /[\\/]node_modules[\\/]/,
        chunks: "all",
      }
    },
  }
  }
}

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'server.js',
  },
  module: {
    rules: [
      { 
          test: /\.(js)$/, 
          use: 'babel-loader',
          exclude: path.resolve(__dirname, "node_modules") 
        },
      {
        test: /\.s(c)ss$/,
        // style files are ignored by server, since they are parsed only by browser
        loader: 'ignore-loader'
      },
    ]
  },
}

module.exports = [browserConfig, serverConfig]