import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true, //debug when run build
  devtool: 'inline-source-map',//show source maps when debug //hidden-source-map
  noInfo: false, //false: show Error when web app don't load file bundle.js
  entry: [ //point input file
    path.resolve(__dirname, 'src/index') //Call file index.js // point get file data, css, html...
  ],
  target: 'web', //client web app
  output: { //out file bundle to src folder
    path: path.resolve(__dirname, 'src'), //have get folder name src
    publicPath: '/assets/', //path output file bundle.js
    filename: 'bundle.js' //name file output
  },
  plugins: [
		// Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		})
	], //library support 3rd part
  module: { //module when loader file.
    loaders: [ //Load module using bundle single file.
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']}, //load js, babel module 
      {test: /\.css$/, loaders: ['style','css']} //load css module
    ]
  }
}
