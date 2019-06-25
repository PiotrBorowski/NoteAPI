'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const note_enum_1 = __importDefault(require("../enums/note.enum"));
var Schema = mongoose_1.default.Schema;
const NoteSchema = new Schema({
    body: {
        type: String,
        required: 'body of the note'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: note_enum_1.default,
        default: ['existing']
    }
});
const NoteModel = mongoose_1.default.model('Note', NoteSchema);
exports.default = NoteModel;
//# sourceMappingURL=noteModel.js.map