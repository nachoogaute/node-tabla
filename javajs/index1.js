

function proximoEnLaFila(arr,elem){
    arr.push(elem);
    arr.shift();
}
var arreglos=[1,2,3,4,5];

console.log("antes: " + arreglos)

proximoEnLaFila(arreglos,6);

console.log("despues: " + arreglos)