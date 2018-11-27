const express = require('express');
const mongoose = require('mongoose');
//For Deploy start
// var request = require('request');
// var cheerio = require('cheerio');
//For Deploy end

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/kudos_db', { useNewUrlParser: true });

//Stuff from MongoDBMLabHerokuDeploymentProcess.pdf  Start

var databaseUri = 'mongodb://localhost/week18day3mongoose';
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);  
} else {
  mongoose.connect(databaseUri);
}
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});
//Stuff from MongoDBMLabHerokuDeploymentProcess.pdf  End
require('./routes/api-routes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});