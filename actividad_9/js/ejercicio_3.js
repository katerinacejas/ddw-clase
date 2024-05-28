/*
Ejercicio 3: Sumar todos los elementos de un array
Descripción: Escribe una función que tome un array de números y devuelva la suma de todos sus elementos.
Código:
const numeros = [1, 2, 3, 4, 5];
const suma = sumarElementos(numeros);
console.log(suma); // Debería imprimir 15
*/

'use strict'

function sumarElementos(unosElementos) {
    let suma = 0;
    for(let elemento of unosElementos) {
        suma += elemento
    }
    return suma
}

const numeros = [1, 2, 3, 4, 5];
const suma = sumarElementos(numeros);
console.log(`La suma de los numeros del array [${numeros}] es ${suma}`);