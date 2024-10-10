const prompt = require("prompt-sync")();

let randomNumbersArray = [];

function llenarArray(){
    for(let i = 0; i < 100; i++){
        randomNumbersArray.push(Math.floor(Math.random() * 1000));
    }
}

function imprimirCuarto(){
    console.log("Imprimiendo un cuarto del arreglo de números aleatorios: ");
    console.log("");
    for(let i = 0; i < (Math.floor(randomNumbersArray.length / 4)); i++){
        console.log("Número: " + randomNumbersArray[i] + ".");
    }
}

llenarArray();
imprimirCuarto();