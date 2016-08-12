import express from 'express';
import bodyParser from 'body-parser';
import jade from 'jade';
// import middleware from './middleware';
import api from './api';
import config from './config.json';
import mongodb from 'mongodb';

let mongo = mongodb.MongoClient;

let PORT = process.env.PORT || 3000;

let app = express();

app.locals.moment = require('moment');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

const url = 'mongodb://localhost:27017/todo-app';

const db = mongo.connect(url);

db.then(function(db){

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static(__dirname + '/public'));

	// api router
	app.use('/', api(db));

	app.listen(PORT, function() {
		console.log("Listening on port " + PORT);
	});	

})
.catch(function(err) {
	throw new Error("something failed in the connection");
});

export default app;