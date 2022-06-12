const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un numero'
                    }
                    if(isNaN(argv.h)){
                        throw 'Hasta debe ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;                