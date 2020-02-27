Boolean(null);
//false
Boolean(NaN);
//false
Boolean(undefined);
//false
Boolean('');
//false

Boolean('a');
//true
Boolean(1); //cualquier numero a excepcion del 0 es true

Boolean([]);
//true
Boolean(function () {});
//true
Boolean(true);
//true

//operadores binarios

3 + 2
50 - 10
10 * 20
20 / 2

'lu' + 'rodriguez'

!false //true operadores unitarios

//operadores de asignacion
let a = 1;

3 == '3'; //comparar
//true 
3 === '3' //este esta validando que los dos tipos y valores sean iguales
//false

5 < 3
//false

5 > 3
//true

5 <= 6
//true

5 >= 6
//false

a && b
//se cumple la condicion si ambos son true

a || b
//se cumple si a o b es true

let edad = 40
edad++ //incrementa por 1

edad += 2 //incrementa por 2