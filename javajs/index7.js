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

  const getusuario = (id) =>{
    return new Promise((resolve, reject) =>{
        const empleado= empleados.find(e=> e.id === id)
        if(empleado){
            resolve(empleado. nombre)
        }else{
            reject(`el id ${id} del empleado no existe`)
        }

    })
}
 const getsalario = (id)=>{
    return new Promise((resolve, reject) =>{
        const salario= salarios.find(s=> s.id === id)
        return( salario )
            ? resolve(salario.salario)
            : reject(`el id ${id} del empleado no existe`);
    })
 }

 const id= 5

 //getusuario(id)
 //    .then(empleado => console.log(empleado))
 //    .catch(err => console.log(err))

//getsalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))
let nombre;
getusuario(id)
    .then(empleado => {
        nombre= empleado
        return getsalario(id)
    })
    .then(salario => console.log(`El empleado`,nombre,`tiene una salario de`,salario))
    .catch(err => console.log(err))

  