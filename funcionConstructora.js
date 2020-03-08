function auto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}
//una instancia que deriva de un objeto
let autoNuevo = new auto("Tesla", "Model 3", 2020);
let autoNuevo2 = new auto("Tesla", "Model X", 2018);
let autoNuevo3 = new auto("Toyota", "Corolla", 2020);

//loop para nuevos autos
let list = [];
let numberCars = 30;

for (let i = 0; i < numberCars; i++) {
    let auto = new autosTemplate(`Auto ${i}`, `Modelo ${i}, 2020`);
    list.push(auto);
}