export class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindSaludar(() => this.manejarSaludo());
        this.view.bindCambiarMensaje(() => this.manejarCambioMensaje());
        this.view.bindIncrementar(() => this.manejarIncremento());
        this.view.bindDecrementar(() => this.manejarDecremento());
        this.view.bindReiniciar(() => this.manejarReinicio());
        this.view.bindOcultar(() => this.view.ocultarInformacion());
        this.view.bindMostrar(() => this.view.mostrarInformacion());
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

    manejarIncremento() {
        const nuevoValor = this.model.incrementar();
        this.view.renderizarContador(nuevoValor);
    }

    manejarDecremento() {
        const nuevoValor = this.model.decrementar();
        this.view.renderizarContador(nuevoValor);
    }

    manejarReinicio() {
        const valorReiniciado = this.model.reiniciar();
        this.view.renderizarContador(valorReiniciado);
    }
}