/* 
Ejercicio 4: Tabla de multiplicar
Escribe un programa que permita al usuario ingresar un número y luego muestre la tabla de multiplicar de ese número del 1 al 10. Utiliza un bucle for para generar la tabla.

*/

'use strict'

let numero = prompt(`Ingrese un número`)
let multiplicacion;
console.log(`La tabla de multiplicar del número ${numero} es:`)
for(let i = 1; i <= 10 ; i++) {
    multiplicacion = numero * i;
    console.log(`${numero} X ${i} = ${multiplicacion}`)
}