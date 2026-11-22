export class AppView {
    constructor() {
        
        const seccionSaludar = document.querySelector('main section:nth-of-type(1)');
        this.inputNombre = seccionSaludar.querySelector('input');
        this.btnSaludar = seccionSaludar.querySelector('button');
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
}