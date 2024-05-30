/*
Ejercicio 4: Filtrar números pares de un array
Descripción: Escribe una función que tome un array de números y devuelva un nuevo array con solo los números pares.
Código:
const numeros = [1, 2, 3, 4, 5, 6];
const pares = filtrarPares(numeros);
console.log(pares); // Debería imprimir [2, 4, 6]
*/

'use strict'

function filtrarPares(unosNumeros) {
    let numerosPares = []
    for(let numero of unosNumeros) {
        if(numero % 2 == 0) {
            numerosPares.push(numero)
        }
    }
    return numerosPares
}

const numeros = [1, 2, 3, 4, 5, 6];
const pares = filtrarPares(numeros);
console.log(`Los numeros pares del array [${numeros}] son: [${pares}]`);
