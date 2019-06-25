import Status from '../enums/note.enum'

interface INote {
    body: String,
    created_date: Date,
    status: Status
}

export default INote;