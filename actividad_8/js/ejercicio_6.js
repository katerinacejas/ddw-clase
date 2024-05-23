/*
Ejercicio 6: Validación de contraseña
Escribe un programa que le pida al usuario que ingrese una contraseña. La contraseña debe tener al menos 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número. Utiliza un bucle while para asegurarte de que el usuario ingrese una contraseña válida. Si la contraseña es válida, muestra un mensaje de éxito; de lo contrario, pide al usuario que ingrese una contraseña nuevamente.
*/

'use strict'

let password = prompt(`Ingrese una contraseña`)
let passwordInvalida = true;

while(passwordInvalida) {
    if( (password.length < 8) || (password.toLowerCase() === password) || (password.toUpperCase() === password) || (password.match(/[0-9]/) == null) ) {
        password = prompt(`La contraseña ingresada es inválida. Ingrese otra contraseña`)
    }
    else {
        console.log(`¡La contraseña ingresada es válida!`)
        passwordInvalida = false;
    }
}