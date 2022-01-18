const { crearArchivo } = require('./archivos/archivos');
const parametrosProcess = process.argv[2];
let base = 0;

if (parametrosProcess === undefined) {
    console.log('Debe definir el argumento y su valor, ej: "--base=5"');
} else {
    const parametros = parametrosProcess.split('=');
    const nombreArgumento = parametros[0];
    base = parseInt(parametros[1]);

    if (nombreArgumento != '--base')
        console.log('Nombre de argumento no reconocido');
    else if (!Number.isInteger(base))
        console.log('Se espera un valor numérico');
    else {
        crearArchivo(base).then((nombreArchivo) => {
            console.log(`Se genero el archivo [${nombreArchivo}] correctamente!!`);
        }, (error) => {
            console.log(`Error al generar el archivo: ${error}`);
        });
    }
}