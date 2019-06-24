import express from 'express';
import routes from './api/routes/noteRoutes'

var app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Note = require('./api/models/noteModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NoteDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//var routes = require('./api/routes/noteRoutes');
routes(app);

//simple middleware
app.use(function(req : any, res : any){
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);