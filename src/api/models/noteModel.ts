'use strict';

import mongoose from "mongoose";
import INote from '../interfaces/note.interface';
import Status from '../enums/note.enum';

var Schema = mongoose.Schema;

const NoteSchema = new Schema({
    body: {
        type: String,
        required: 'body of the note'
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    status: {
        type: Status,
        default: ['existing']
    }
})

const NoteModel = mongoose.model<INote & mongoose.Document>('Note', NoteSchema);

export default NoteModel;
