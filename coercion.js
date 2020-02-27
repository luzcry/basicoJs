//javascript es un lenguaje debilmente tipado
//coercion es como podemos cambiar los valores
//coerciones implicitas es cuando el lenguaje nos ayuda cambiando el tipo de valor
let a = 4 + '7'; //concatenacion lo convierte en un string 47
typeof a
let b = 4 * '7'; //si convierte el string en numero
typeof b
//coercion explicita es cuando obligamos a un valor a cambiar a otro tipo
let a = 20;
let b = a + '';
console.log(b);
typeof b;
let c = String(a); //convierte en string
typeof c;
// de string a numero
let d = Number(c);
typeof d; //number