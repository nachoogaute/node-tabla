function actualizarDiscos(discos,id,propiedad,valor){
    if(valor=== " "){
        delete discos[id][propiedad];
    }else if(propiedad=== "canciones"){
        discos[id][propiedad]=  discos[id][propiedad] || [] ;
        discos[id][propiedad].push(valor);
    }


}   

var coleccionDeDiscos={
    7853:{
        tituloDeAlbum: "bee gees greatest",
        artista: "bee gees",
        canciones: ["stayin' alive"]
    },
    5439:{
        tituloDeAlbum:["abba gold"],
    }
}

console.log(coleccionDeDiscos[5439].tituloDeAlbum)
actualizarDiscos(coleccionDeDiscos,5439,"tituloDeAlbum","chicaa")
console.log(coleccionDeDiscos[5439].tituloDeAlbum)
