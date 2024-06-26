/*
Ejercicio 5: Concatenar dos arrays
Descripción: Escribe una función que tome dos arrays y devuelva un nuevo array que sea la concatenación de ambos.
Código:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenado = concatenarArrays(array1, array2);
console.log(concatenado); // Debería imprimir [1, 2, 3, 4, 5, 6]
*/

'use strict'

function concatenarArrays(unArray, otroArray) {
    let arraysConcatenados = []
    for(let elemento of unArray) {
        arraysConcatenados.push(elemento)
    }
    for(let elemento of otroArray) {
        arraysConcatenados.push(elemento)
    }
    return arraysConcatenados
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenado = concatenarArrays(array1, array2);
console.log(`El array [${array1}] concatenado con [${array2}] forman el array [${concatenado}]`);