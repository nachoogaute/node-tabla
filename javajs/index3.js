 

 function verificarPropiedad(obj, propiedad){
    
    if(obj.hasOwnProperty(propiedad)){
        return "propiedad: " + obj[propiedad];
    }else{
        return "el objeto no tiene esta propiedad";
    }

 }

 var miCuaderno={
    "color": "rojo",
    "color": "azul",
    "categoria": 3,
    "precio": 4000
 };

 console.log(verificarPropiedad(miCuaderno,"color"));