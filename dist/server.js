"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteRoutes_1 = __importDefault(require("./api/routes/noteRoutes"));
var app = express_1.default(), port = process.env.PORT || 3000, mongoose = require('mongoose'), Note = require('./api/models/noteModel'), bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NoteDB');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//var routes = require('./api/routes/noteRoutes');
noteRoutes_1.default(app);
//simple middleware
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
//# sourceMappingURL=server.js.map