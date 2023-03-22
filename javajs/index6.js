  const empleados =[
    {
        id: 1,
        nombre: "ignacio",
    },
    {
        id: 2,
        nombre: "tomas",
    },
    {
        id: 3,
        nombre: "juan",
    }
  ]

  const salarios = [
    {
        id:1,
        salario: 2000,
    },
    {
        id:2,
        salario: 1500,
    }
  ]
const getusuario = (id, callback) =>{
    const empleado= empleados.find(e=> e.id === id)
    
    if(empleado){
        callback(null, empleado.nombre)
    }else{
        callback(`El id ${id} del empleado no existe`)
    }
}
 const getsalario = (id, callback)=>{
    const salario= salarios.find(s=> s.id === id)
    
    if(salario){
        callback(null, salario.salario)
    }else{
        callback(`El id ${id} del empleado no existe`)
    }
 }
  
getusuario(1,(err, empleado)=>{
    if(err){
        console.log("ERROR")
        return console.log(err)
    }
    console.log(empleado);
})

getsalario(1,(err, salario)=>{
    if(err){
        console.log("ERROR")
        return console.log(err)
    }
    console.log(salario);
})

