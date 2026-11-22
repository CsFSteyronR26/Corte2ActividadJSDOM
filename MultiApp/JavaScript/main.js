import { AppModel } from './models/app.model.js';
import { AppView } from './views/app.view.js';
import { AppController } from './controllers/app.controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new AppModel();
    const view = new AppView();
    new AppController(model, view);
});