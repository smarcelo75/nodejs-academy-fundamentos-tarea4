const fs = require('fs');

const crearArchivo = (tabla = 5) => {
    let promesa = new Promise((resolve, reject) => {
        const nombreArchivo = `Tabla-${tabla}.txt`;
        let datos = '';

        for (let i = 1; i < 11; i++) {
            datos += `${tabla} x ${i} = ${tabla*i} \n`;
        }

        fs.writeFile(nombreArchivo, datos, (err) => {
            if (err) {
                reject(err.message);
            } else
                resolve(nombreArchivo);
        })
    });
    return promesa;
};

module.exports = { crearArchivo }