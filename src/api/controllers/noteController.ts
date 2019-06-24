'use strict';

var mongoose = require('mongoose'),
Note = mongoose.model('Notes');

export const getAllNotes = function(req : any, res : any){
    Note.find({}, function(err : any, note: any){
        if(err)
            res.send(err);
        res.json(note);
    })
}

export const createNote = function(req : any, res : any){
    var newNote = new Note(req.body);
    newNote.save(function(err : any, note : any){
        if(err)
            res.send(err);
        res.json(note);
    })
}
export const readNote = function(req : any, res : any){
    Note.findById(req.params.noteId, function(err : any, note : any){
        if(err)
            res.send(err);
        res.json(note);
    })
}

export const updateNote = function(req : any, res : any){
    Note.findOneAndUpdate({_id: req.params.noteId}, req.body, {new: true}, function(err : any, note : any){
        if (err)
            res.send(err);
        res.json(note);
    } )
}

export const deleteNote = function(req : any, res : any){
    Note.remove({
        _id: req.params.noteId
    }, function(err : any, note : any){
        if(err)
            res.send(err);
        res.json({message: 'Note deleted'});
    })
}