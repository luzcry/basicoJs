let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes_(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (let index = 0; index < estudiantes.length; index++) {
    saludarEstudiantes(estudiantes[i]);
}

//otra forma

for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}