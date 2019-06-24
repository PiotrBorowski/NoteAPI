'use strict';

var mongoose = require('mongoose'),
Note = mongoose.model('Notes');

exports.getAllNotes = function(req : any, res : any){
    Note.find({}, function(err : any, note: any){
        if(err)
            res.send(err);
        res.json(note);
    })
}

exports.createNote = function(req : any, res : any){
    var newNote = new Note(req.body);
    newNote.save(function(err : any, note : any){
        if(err)
            res.send(err);
        res.json(note);
    })
}

exports.readNote = function(req : any, res : any){
    Note.findById(req.params.noteId, function(err : any, note : any){
        if(err)
            res.send(err);
        res.json(note);
    })
}

exports.updateNote = function(req : any, res : any){
    Note.findOneAndUpdate({_id: req.params.noteId}, req.body, {new: true}, function(err : any, note : any){
        if (err)
            res.send(err);
        res.json(note);
    } )
}

exports.deleteNote = function(req : any, res : any){
    Note.remove({
        _id: req.params.noteId
    }, function(err : any, note : any){
        if(err)
            res.send(err);
        res.json({message: 'Note deleted'});
    })
}