let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  year: 2020,
  //ingresar al metodo de un objeto
  detalleDelAuto: function () {
    console.log(`Auto ${this.modelo} ${this.year}`)
  }
};
//palabra clave: valor
//los objetos se manejan por propiedades
//acceder a los valores del objeto
miAuto.year
//this hace referencia al objeto global
miAuto.detalleDelAuto();