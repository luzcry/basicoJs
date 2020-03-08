let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes_(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

//mientras lo que este en () sera verdad se efectuará el {}
while (estudiantes.length > 0) {
  let estudiante = estudiantes.shift();
  //es un metodo de mutacion que saca elementos del array cada vez que se cumpla un loop
  saludarEstudiantes(estudiante);
}
