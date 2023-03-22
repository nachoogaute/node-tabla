

var alumnos=[
    {
        "nombre": "ignacio",
        "apellido":"gaute",
        "curso": "2k1"
    },
    {
        "nombre": "ignacio",
        "apellido":"sanchez",
        "curso": "2k2"
    },
    {
        "nombre": "ignacio",
        "apellido":"bertolo",
        "curso": "2k1"
    },
]

function buscarAlumnos(nombre,propiedad){
do{
    for( var i=0;i<alumnos.length;i++){
        if(alumnos[i].nombre===nombre  ){
            return alumnos[i][propiedad] || "no exixte esta propiedad"
        }
    }
}while(alumnos.length>1);

    return "alumno no inscripto"  
}

console.log(buscarAlumnos("ignacio","apellido"))
console.log(alumnos.length)

//.push agregar al arreglo
//.pop elimina el ultimo del arreglo
//.shift elimina el primero del arreglo
//.unshift agrega al principio del arreglo

//funcion: sirve para escribir solo una vez en el codigo y 
//llamarla para no escribirla de vuelta 