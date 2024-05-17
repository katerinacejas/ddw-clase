/* 
Ejercicio 2: Suma de números pares
Escribe un programa que calcule la suma de todos los números pares del 1 al 50. Utiliza un bucle for para iterar a través de los números y una declaración if para verificar si un número es par.

*/

'use strict'

let suma = 0;

for(let numero = 1; numero <= 50; numero++) {
    if(numero % 2 === 0){
        suma += numero
    }
}

console.log(`La suma de todos los numeros pares es = ${suma}`)
