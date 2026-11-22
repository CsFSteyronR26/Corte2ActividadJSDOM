export class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindSaludar(() => this.manejarSaludo());
        this.view.bindCambiarMensaje(() => this.manejarCambioMensaje());
    }

    manejarSaludo() {
        const nombre = this.view.obtenerNombre();
        const mensaje = this.model.validarNombre(nombre);
        this.view.mostrarAlerta(mensaje);
    }

    manejarCambioMensaje() {
        const texto = this.view.obtenerMensaje();
        const resultado = this.model.validarMensaje(texto);

        if (!resultado.valido) {
            this.view.mostrarAlerta(resultado.texto);
            return;
        }

        this.view.renderizarMensaje(resultado.texto);
    }
}