let articulos = [{
        nombre: "bici",
        costo: 3000
    },
    {
        nombre: "tv",
        costo: 2500
    },
    {
        nombre: "libro",
        costo: 40
    },
    {
        nombre: "celular",
        costo: 1000
    },
    {
        nombre: "laptop",
        costo: 3000
    },
    {
        nombre: "teclado",
        costo: 300
    },

];

//find ayuda a encontrar algo dentro del objeto
let encuentraArticulo = articulos.find(function (articulos) {
    return articulo.nombre === "Laptop"
});

//for each no genera un nuevo array, solo filtra el array sin modificarlo y devuelve cosas
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

//some nos regresa una validacion de true o false
let articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});
//muestra si hay articulos que valgan 700 o menos