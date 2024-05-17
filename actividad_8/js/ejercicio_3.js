/*
Ejercicio 3: Calculadora de promedio
Escribe un programa que le permita al usuario ingresar una serie de calificaciones. Luego, calcula y muestra el promedio de esas calificaciones. Utiliza un bucle for o while para permitir al usuario ingresar una cantidad variable de calificaciones.

*/

'use strict'

let calificacion;
let sumaCalif = 0;
let cantCalif = 0;
let promedio  = 0;

while(confirm(`¿Desea ingresar una calificación?`)) {
    calificacion = prompt(`Ingrese una calificación`)
    if( !(isNaN(calificacion)) ) {
        //si valor de calificacion es un numero, entra en este bloque

        //lo parseo a int porque el prompt devuelve una cadena
        sumaCalif += parseInt(calificacion);
        cantCalif++;
        console.log(`Calificacion ingresada: ${calificacion}`)
    }
    else {
        console.log(`No ingresó una calificacion, ingresó letras`)
    }
}

if(cantCalif === 0){
    //la validacion es para que en caso de que no haya ingresado ninguna calificacion, no se rompa el codigo por hacer sumaCalif dividido 0.
    console.log(`El promedio de las calificaciones es ${promedio}`)
} 
else {
    //en caso de que haya ingresado al menos una calificacion
    promedio = sumaCalif / cantCalif;
    console.log(`El promedio de las calificaciones es ${promedio}`)
}