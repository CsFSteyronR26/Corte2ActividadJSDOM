export class AppModel {
    validarNombre(nombre) {
        const nombreLimpio = nombre.trim();

        if (nombreLimpio === '') {
            return 'Por favor, ingrese su nombre.';
        }

        return `Bienvenido: ${nombreLimpio}`;
    }
}