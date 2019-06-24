'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NoteSchema = new Schema({
    body: {
        type: String,
        required: 'body of the note'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
                type: String,
                enum: ['existing', 'archived']
            }],
        default: ['existing']
    }
});
exports.Note = mongoose.model('Notes', NoteSchema);
//# sourceMappingURL=noteModel.js.map