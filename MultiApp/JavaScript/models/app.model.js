export class AppModel {
    constructor() {
        this.contador = 0;
    }
    validarNombre(nombre) {
        const nombreLimpio = nombre.trim();

        if (nombreLimpio === '') {
            return 'Por favor, ingrese su nombre.';
        }

        return `Bienvenido: ${nombreLimpio}`;
    }
    validarMensaje(mensaje) {
        const mensajeLimpio = mensaje.trim();

        if (mensajeLimpio === '') {
            return { valido: false, texto: 'Debe ingresar un mensaje.' };
        }

        return { valido: true, texto: mensajeLimpio };
    }
   
    incrementar() {
        this.contador++;
        return this.contador;
    }

    decrementar() {
        this.contador--;
        return this.contador;
    }

    reiniciar() {
        this.contador = 0;
        return this.contador;
    }
}