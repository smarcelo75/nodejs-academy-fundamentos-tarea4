const { crearArchivo } = require('./archivos/archivos');
const parametrosProcess = process.argv[2];
const parametros = parametrosProcess.split('=');
const nombreArgumento = parametros[0];
const base = parseInt(parametros[1]);

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