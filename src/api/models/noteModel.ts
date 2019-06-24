'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    body: {
        type: String,
        required: 'body of the note'
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    status: {
        type:[{
            type: String,
            enum: ['existing', 'archived']
        }],
        default: ['existing']
    }
})

const Note = mongoose.model('Notes', NoteSchema);
export default Note;