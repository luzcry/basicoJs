//conjunto de setencias que podemos utilizar para generar acciones con los valores de las variables
//hay dos tipos

//declarativas
// una funcion que va a inicializar un valor en la memoria y va a guardar algo
function miFuncion() {
  return 3;
}
miFuncion();
//expresion (anonimas)
//var mi funcion va a reservar un espacio en memoria y despuesloque va a guardar es toda la funcion y luego lo 
//mando a llamar como si fuera una funcion
var miFuncion = function (a, b) {
  return a + b;
};

miFuncion()

function saludarEstudiantes(estudiante) {
  console.log(`hola ${estudiante}`);
}
saludarEstudiantes("diego");
//plantilla de cadena de texto para colocar variables en un string
function sumar(a, b) {
  var resultado = a + b;
  return a + b;
}
sumar(1, 2);