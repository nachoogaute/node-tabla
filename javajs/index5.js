
var contactos= [
    {
        "nombre": "nacho",
        "apellido": "gaute",
        "id": "23452422"
    },
    {
        "nombre": "tomas",
        "apellido": "gaute",
        "id": "234522432"
    }
]

function buscasrContacto(nombre,propiedad,){
    for(i=0; i<contactos.length; i++){
        if(contactos[i].nombre===nombre){
            return contactos[i][propiedad] || "no existe esta propiedad"
        }

    }
    return "el contacto no esta en la lista";
}

console.log(buscasrContacto("tomas","id"))