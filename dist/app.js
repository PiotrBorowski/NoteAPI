"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor(controllers) {
        this.app = express_1.default();
        this.connectToDB();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializePageNotFound();
    }
    listen() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(`note RESTful API server started on: ${process.env.PORT || 3000}`);
        });
    }
    connectToDB() {
        mongoose_1.default.connect('mongodb://localhost/NoteDB');
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
    initializePageNotFound() {
        this.app.use((req, res) => {
            res.status(404).send({ url: req.originalUrl + ' not found' });
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map