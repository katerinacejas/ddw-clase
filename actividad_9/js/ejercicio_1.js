/*
Ejercicio 1: Encontrar el valor máximo en un array
Descripción: Escribe una función que tome un array de números y devuelva el valor máximo.
Código:
const numeros = [1, 3, 7, 2, 5];
const maximo = encontrarMaximo(numeros);
console.log(maximo); // Debería imprimir 7

*/

'use strict'

function encontrarMaximo(numeros) {
    let maximo = numeros[0]
    for (let i in numeros) {
        if(maximo < numeros[i]) {
            maximo = numeros[i]
        }
    }
    return maximo
}

const numeros = [1, 3, 7, 2, 5];
const maximo = encontrarMaximo(numeros);
console.log(`El máximo del array [${numeros}] es ${maximo}`);
