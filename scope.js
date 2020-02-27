//scope global
var miNombre = "lu";
//scope local se forma dentro de la funcion
function nombre() {
  var miApellido = "Rodriguez";
  console.log(miNombre + " " + miApellido);
}
nombre();
