const prompt = require("prompt-sync")();

let array = [];

function pedirNumeros(){
    let seguir = 'si';

    while (seguir.toLowerCase() === 'si') {
        let num = prompt("Ingrese un numero de mas de 2 cifras: ")
        array.push(num);
        seguir = prompt("¿Quieres agregar otro objeto? Escribe 'si' para continuar o cualquier otra cosa para terminar.");
    }
}

function contarDigitos(n){
    let cont = 0;

    while(n > 0){
        n = parseInt(n / 10);
        cont++;
    }

    return cont;
}

function imprimirNumerosCifras(){
    for(let i = 0; i < array.length; i++){
        let cifras = contarDigitos(array[i]);
        console.log("El número es: " + array[i] + " y tiene " + cifras + " cifras.");
    }
}

pedirNumeros();
imprimirNumerosCifras();