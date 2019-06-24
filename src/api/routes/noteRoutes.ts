'use strict'
export default function(app : any) {
    var notes = require('../controllers/noteController');

    app.route('/notes')
        .get(notes.getAllNotes)
        .post(notes.createNote);

    app.route('/notes/:noteId')
        .get(notes.readNote)
        .put(notes.updateNote)
        .delete(notes.deleteNote);
}