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
//filter valida si algo es verdad o falso
// y lo mete en un nuevo array

//nuevo array
let articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 3000
});

//metodo map
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
//map nos ayuda a mapear el contenido del array y devuelve lo que estamos buscando
let nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});