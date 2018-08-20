import express from 'express'; //import express from express modules
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port = 3005 //port open web app
const app = express(); //app using express

app.use(express.static('dist'));
app.use(compression());

app.get('/', function(req, res){ //return file html using "respons method"
	res.sendFile(path.join(__dirname, '../dist/index.html')); //Server response file index.html in browser
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
