import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
	},
  target: 'web', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
	plugins: [

		new WebpackMd5Hash(),

		new ExtractTextPlugin('[name].[contenthash].css'),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),

		// Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
			inject: true,
			trackJSToken: 'bf8db9d2d82e4c8a87eead5a379a4244'
		}),

    // Eliminate duplicate packages when generrating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: { 
    loaders: [ 
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
      // {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
