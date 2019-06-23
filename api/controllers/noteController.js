'use strict';

var mongoose = require('mongoose'),
Note = mongoose.model('Notes');

exports.getAllNotes = function(req, res){
    Note.find({}, function(err, note){
        if(err)
            res.send(err);
        res.json(note);
    })
}

exports.createNote = function(req, res){
    var newNote = new Note(req.body);
    newNote.save(function(err, note){
        if(err)
            res.send(err);
        res.json(note);
    })
}

exports.readNote = function(req, res){
    Note.findById(req.params.noteId, function(err, task){
        if(err)
            res.send(err);
        res.json(note);
    })
}

exports.updateNote = function(req, res){
    Note.findOneAndUpdate({_id: req.params.noteId}, req.body, {new: true}, function(err, note){
        if (err)
            res.send(err);
        res.json(note);
    } )
}

exports.deleteNote = function(req, res){
    Note.remove({
        _id: req.params.noteId
    }, function(err, note){
        if(err)
            res.send(err);
        res.json({message: 'Note deleted'});
    })
}