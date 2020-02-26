//scope global
var miNombre = "lu";
//scope local
function nombre() {
    var miApellido = "Rodriguez";
    console.log(miNombre + " " + miApellido);
}
nombre();