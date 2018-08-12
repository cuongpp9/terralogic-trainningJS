import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

/* eslint-disable no-console */

var port = 3005;
var app = express();
const compile = webpack(config);

app.use(require('webpack-dev-middleware')(compile, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	else {
		open('http://localhost:' + port);
		console.log("server start:", port);
	}
});
