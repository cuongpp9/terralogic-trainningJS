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

app.get('/users', function(req, res){
	res.json([
		{"id": 1, "firstName":"Bod","lastName":"Smith", "email":"bod@gmail.com"},
		{"id": 2, "firstName":"Tammy","lastName":"Norton", "email":"tnorton@yahoo.com"},
		{"id": 3, "firstName":"Tina","lastName":"Lee", "email":"lee@hotmail.com"}
	]);
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
