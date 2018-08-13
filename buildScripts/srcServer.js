import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev'

/* eslint-disable no-console */

var port = 3005;
var app = express();
const compile = webpack(webpackConfig);

//console.log("webpackConfig",webpackConfig);

//Express Server Require create a mid server from webpack-dev-middleware => 
app.use(require('webpack-dev-middleware')(compile, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath,
}));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res){
	res.json([
		{"id": 1, "firstName":"Bod","lastName":"Smith", "email":"bod@gmail.com"},
		{"id": 2, "firstName":"Tammy","lastName":"Norton", "email":"tnorton@yahoo.com"},
		{"id": 3, "firstName":"Tina","lastName":"Lee", "email":"lee@hotmail.com"}
	]);
});

app.listen(port, function(err){
	if(err){
		//console.log(err);
	}
	else {
		open('http://localhost:' + port);
		//console.log("server start:", port);
	}
});
