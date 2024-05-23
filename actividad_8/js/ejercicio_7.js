/*
Ejercicio 7: Adivinanza con do-while
Escribe un juego en el que el programa elija un número aleatorio entre 1 y 10, y el usuario tenga que adivinarlo. El programa debe proporcionar pistas (mayor/menor) hasta que el usuario adivine correctamente el número. Utiliza un bucle do-while para repetir la solicitud de adivinanza hasta que se adivine el número.

Como genero un número aleatorio:

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

Math.floor(): Redondea el numero decimal
Math.random(): Devuelve un numero aleatorio decimal entre el 0 y el 1. No puede ser 1.
Math.floor(Math.random() * 10) + 1: Al hacer esto, redondeamos el numero decimal del random(), corremos la coma para q no sea 0, y se le suma un 1 porque el decimal mas grande va a ser 0.9, y el rango pedido es entre 1 y 10

*/


'use strict'

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroAdivinado = false;
let numeroIngresado = parseInt( prompt(`Adivina un número entre 1 y 10`) )

do {
    if (numeroIngresado > numeroAleatorio) {
        numeroIngresado = parseInt( prompt(`El número a adivinar es menor. Intentalo de nuevo`) )
    }
    else if (numeroIngresado < numeroAleatorio){
        numeroIngresado = parseInt( prompt(`El número a adivinar es mayor. Intentalo de nuevo`) )
    }
    else {
        console.log(`¡Felicitaciones! Adivinaste el número ${numeroAleatorio}`)
        numeroAdivinado = true;
    }
} while(!numeroAdivinado)
