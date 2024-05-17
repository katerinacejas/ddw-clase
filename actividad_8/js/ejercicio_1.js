/* 
Ejercicio 1: Saludo personalizado
Escribe un programa que le pida al usuario ingresar su nombre y luego muestre un saludo personalizado en la consola. Utiliza una declaración if para verificar si se ingresó un nombre.
*/

'use strict'

let nombre = prompt(`Ingrese su nombre`)
if(nombre){
    if (isNaN(nombre)) {
        console.log(`Hola ${nombre}`)
    }
    else {
        console.log(`No ingresó un nombre, ingresó un número`)
    }
}
else {
    console.log(`No ingresó ningún nombre`)
}