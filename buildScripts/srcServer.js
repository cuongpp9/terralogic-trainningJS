import express from 'express'; //import express from express modules
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';

/* eslint-disable no-console */

var port = 3005 //port open web app
var app = express(); //app using express
const compileWebpack = webpack(webpackConfig); // Webpack

//console.log("webpackConfig",webpackConfig);

//Express Server Require create a mid server from webpack-dev-middleware => 
app.use(require('webpack-dev-middleware')(compileWebpack, { //webpack-middleware: Multiple request
	noInfo: true, //show file and module bundle
	publicPath: webpackConfig.output.publicPath, //return file bundle in path
}));
////return file bundle.js

app.get('/', function(req, res){ //return file html using "respons method"
	res.sendFile(path.join(__dirname, '../src/index.html')); //Server return file index.html in browser
});

// app.get('/users', function(req, res){
// 	res.json([
// 		{"id": 1, "firstName":"Bod","lastName":"Smith", "email":"bod@gmail.com"},
// 		{"id": 2, "firstName":"Tammy","lastName":"Norton", "email":"tnorton@yahoo.com"},
// 		{"id": 3, "firstName":"Tina","lastName":"Lee", "email":"lee@hotmail.com"}
// 	]);
// });

app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	else {
		open('http://localhost:' + port);
		console.log("server start:", port);
	}
});
