/*
Ejercicio 5: Contador regresivo
Escribe un programa que cuente desde un número ingresado por el usuario hasta 1, mostrando cada número en la consola. Utiliza un bucle while para realizar el conteo regresivo.

*/

'use strict'

let numero = prompt(`Ingrese un número`)

console.log(`El conteo del número ${numero} hasta 1 es:`)

while(numero >= 1) {
    console.log(`${numero}`)
    numero--;
}