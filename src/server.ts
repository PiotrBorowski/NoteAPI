import App from './app';
import NoteController from './api/controllers/noteController';

const app = new App(
  [
    new NoteController(),
  ]
)

app.listen();