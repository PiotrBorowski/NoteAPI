'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    var notes = require('../controllers/noteController');
    app.route('/notes')
        .get(notes.getAllNotes)
        .post(notes.createNote);
    app.route('/notes/:noteId')
        .get(notes.readNote)
        .put(notes.updateNote)
        .delete(notes.deleteNote);
}
exports.default = default_1;
//# sourceMappingURL=noteRoutes.js.map