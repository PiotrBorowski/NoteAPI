import * as bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import IController from './api/interfaces/controller.interface'
class App {
    public app : express.Application;

    constructor(controllers: IController[]){
        this.app = express();

        this.connectToDB();
        this.initializeMiddlewares();   
        this.initializeControllers(controllers);

    }

    public listen(){
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(`note RESTful API server started on: ${process.env.PORT || 3000}`);
        })
    }

    private connectToDB(){
        mongoose.connect('mongodb://localhost/NoteDB');
    }

    private initializeMiddlewares(){
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(bodyParser.json());
        // this.app.use((req : express.Request, res : express.Response) => {
        //     res.status(404).send({url: req.originalUrl + ' not found'});
        // })
    }

    private initializeControllers(controllers: IController[]){
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        })
    }
}

export default App;