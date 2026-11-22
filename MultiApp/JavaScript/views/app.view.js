export class AppView {
    constructor() {
        
        const seccionSaludar = document.querySelector('main section:nth-of-type(1)');
        this.inputNombre = seccionSaludar.querySelector('input');
        this.btnSaludar = seccionSaludar.querySelector('button');

        const seccionMensaje = document.querySelector('main section:nth-of-type(2)');
        this.parrafoMensaje = seccionMensaje.querySelector('p');
        this.inputMensaje = seccionMensaje.querySelector('input');
        this.btnCambiar = seccionMensaje.querySelector('button');
    }

    obtenerNombre() {
        return this.inputNombre.value;
    }

    mostrarAlerta(mensaje) {
        alert(mensaje);
    }

    bindSaludar(handler) {
        this.btnSaludar.addEventListener('click', handler);
    }

    obtenerMensaje() {
        return this.inputMensaje.value;
    }

    renderizarMensaje(texto) {
        this.parrafoMensaje.textContent = texto;
        this.inputMensaje.value = '';
    }

    bindCambiarMensaje(handler) {
        this.btnCambiar.addEventListener('click', handler);
    }
}