'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noteModel_1 = __importDefault(require("../models/noteModel"));
class NoteController {
    constructor() {
        this.path = '/notes';
        this.router = express_1.default.Router();
        this.getAllNotes = function (req, res) {
            noteModel_1.default.find({}, function (err, note) {
                if (err)
                    res.send(err);
                res.json(note);
            });
        };
        this.createNote = function (req, res) {
            var newNote = new noteModel_1.default(req.body);
            newNote.save(function (err, note) {
                if (err)
                    res.send(err);
                res.json(note);
            });
        };
        this.readNote = function (req, res) {
            noteModel_1.default.findById(req.params.noteId, function (err, note) {
                //if(err)
                //    res.send(err);
                if (note) {
                    res.json(note);
                }
                else {
                    res.status(404).send({ error: 'Note not found' });
                }
            });
        };
        this.updateNote = function (req, res) {
            noteModel_1.default.findOneAndUpdate({ _id: req.params.noteId }, req.body, { new: true }, function (err, note) {
                //if (err)
                //    res.send(err);
                if (note) {
                    res.json(note);
                }
                else {
                    res.status(404).send({ error: 'Note update error' });
                }
            });
        };
        this.deleteNote = function (req, res) {
            noteModel_1.default.findByIdAndDelete(req.params.noteId)
                .then((resp) => {
                if (resp) {
                    res.send(200);
                }
                else {
                    res.status(404).send({ rror: `Note with id: ${req.params.noteId} not found` });
                }
            })
                .catch((err) => {
                res.status(404).send({ rror: `Note with id: ${req.params.noteId} not found` });
            });
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllNotes);
        this.router.post(this.path, this.createNote);
        this.router.get(`${this.path}/:noteId`, this.readNote);
        this.router.post(`${this.path}/:noteId`, this.updateNote);
        this.router.delete(`${this.path}/:noteId`, this.deleteNote);
    }
}
exports.default = NoteController;
//# sourceMappingURL=noteController.js.map