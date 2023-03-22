const fs = require("fs");



const crearArchivo= (base, listar,hasta) =>{
    return new Promise((resolve, reject) => {
        let salida= "";
        for(let i=1;i<=hasta;i++){
    
            salida += (`${ base } x ${ i } = ${base * i}\n`)
    
        }
        if(listar){
            console.log(salida)
        }

  
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
        resolve(`tabla-${base}.txt `)
    })


}

module.exports= {
    crearArchivo
}