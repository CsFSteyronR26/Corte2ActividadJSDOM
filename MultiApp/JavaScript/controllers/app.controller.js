export class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindSaludar(() => this.manejarSaludo());
    }

    manejarSaludo() {
        const nombre = this.view.obtenerNombre();
        const mensaje = this.model.validarNombre(nombre);
        this.view.mostrarAlerta(mensaje);
    }
}