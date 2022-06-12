const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv  = require('./config/yargs')
const colors = require('colors')
console.clear();

//node app.js --base=5  

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

  