'use strict';

import IController from "api/interfaces/controller.interface";
import express from 'express';
import NoteModel  from '../models/noteModel';
import INote from '../interfaces/note.interface'

class NoteController implements IController{

    public path = '/notes';
    public router = express.Router();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path, this.getAllNotes);
        this.router.post(this.path, this.createNote);

        this.router.get(`${this.path}/:noteId`, this.readNote);
        this.router.post(`${this.path}/:noteId`, this.updateNote);
        this.router.delete(`${this.path}/:noteId`, this.deleteNote);
    }

    private getAllNotes = function(req : express.Request, res : express.Response){
        NoteModel.find({}, function(err : any, note: INote){
            if(err)
                res.send(err);
            res.json(note);
        })
    }
    
    private createNote = function(req : express.Request, res : express.Response){
        var newNote = new NoteModel(req.body);
        newNote.save(function(err : any, note : INote){
            if(err)
                res.send(err);
            res.json(note);
        })
    }
    private readNote = function(req : express.Request, res : express.Response){
        NoteModel.findById(req.params.noteId, function(err : any, note : INote){
            if(err)
                res.send(err);
            res.json(note);
        })
    }
    
    private updateNote = function(req : express.Request, res : express.Response){
        NoteModel.findOneAndUpdate({_id: req.params.noteId}, req.body, {new: true}, function(err : any, note : INote){
            if (err)
                res.send(err);
            res.json(note);
        } )
    }
    
    private deleteNote = function(req : express.Request, res : express.Response){
        NoteModel.remove({
            _id: req.params.noteId
        }, function(err : any){
            if(err)
                res.send(err);
            res.json({message: 'Note deleted'});
        })
    }
}



export default NoteController;