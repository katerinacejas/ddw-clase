/*
Ejercicio 2: Invertir un array
Descripción: Escribe una función que tome un array y devuelva un nuevo array con los elementos en orden inverso.
Código:
const original = [1, 2, 3, 4, 5];
const invertido = invertirArray(original);
console.log(invertido); // Debería imprimir [5, 4, 3, 2, 1]
*/

'use strict'

function invertirArray(unArray){
    let arrayInvertido = []
    let ultimoIndice = unArray.length - 1
    while(ultimoIndice >= 0) {
        arrayInvertido.push(unArray[ultimoIndice])
        ultimoIndice--
}
    return arrayInvertido
}

const original = [1, 2, 3, 4, 5];
const invertido = invertirArray(original);
console.log(`El array original [${original}] invertido es [${invertido}]`);