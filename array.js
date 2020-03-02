//es un valor tipo objeto que guarda mas valores dentro y estos valores puedes ser stings,arrays, objetos,es una 
//forma de generar una estructura de datos
let frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length);
//acceder a cada elemento
console.log(frutas[0]);

//metodos para cambiar arreglos
//añadir elementos al final del array
let masFrutas = frutas.push("Uvas");

console.log(frutas[2]); //cereza
console.log(frutas[4]);
//eliminar elemento del array
let ultimo = frutas.pop("Uvas")
//elemento que agrega pero al inicio del
// arreglo

let nuevaLongitud = frutas.unshift("Uvas");

//elimina el elemento del incio
let borrarFruta = fruta.shift("Uvas");
//conocer la posicion del elemento
let posicion = frutas.indexOf("Cereza");
frutas[2];