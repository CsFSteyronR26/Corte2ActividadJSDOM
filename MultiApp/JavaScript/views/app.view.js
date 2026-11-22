export class AppView {
    constructor() {
        
        const seccionSaludar = document.querySelector('main section:nth-of-type(1)');
        this.inputNombre = seccionSaludar.querySelector('input');
        this.btnSaludar = seccionSaludar.querySelector('button');

        const seccionMensaje = document.querySelector('main section:nth-of-type(2)');
        this.parrafoMensaje = seccionMensaje.querySelector('p');
        this.inputMensaje = seccionMensaje.querySelector('input');
        this.btnCambiar = seccionMensaje.querySelector('button');

        const seccionContador = document.querySelector('main section:nth-of-type(3)');
        this.valorContador = seccionContador.querySelector('strong');
        const botonesContador = seccionContador.querySelectorAll('button');
        this.btnIncrementar = botonesContador[0];
        this.btnDecrementar = botonesContador[1];
        this.btnReiniciar = botonesContador[2];

        const seccionOcultar = document.querySelector('main section:nth-of-type(4)');
        this.imagenInfo = seccionOcultar.querySelector('img');
        const botonesOcultar = seccionOcultar.querySelectorAll('button');
        this.btnMostrar = botonesOcultar[0];
        this.btnOcultar = botonesOcultar[1];
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



    renderizarContador(valor) {
        this.valorContador.textContent = valor;
    }

    bindIncrementar(handler) {
        this.btnIncrementar.addEventListener('click', handler);
    }

    bindDecrementar(handler) {
        this.btnDecrementar.addEventListener('click', handler);
    }

    bindReiniciar(handler) {
        this.btnReiniciar.addEventListener('click', handler);
    }

    
    
    ocultarInformacion() {
        this.imagenInfo.classList.add('oculto');
    }

    mostrarInformacion() {
        this.imagenInfo.classList.remove('oculto');
    }

    bindOcultar(handler) {
        this.btnOcultar.addEventListener('click', handler);
    }

    bindMostrar(handler) {
        this.btnMostrar.addEventListener('click', handler);
    }
}