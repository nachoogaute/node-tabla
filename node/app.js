const fs = require("fs");
const {crearArchivo} = require("./helpers/multiplicar.js")
const argv = require("./config/yargs")


console.clear();


console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,"creado"))
    .catch(err => console.log(err))

