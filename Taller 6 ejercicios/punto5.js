const prompt = require("prompt-sync")();

let randomNumbersArray = [];

function llenarArray(){
    for(let i = 0; i < 20; i++){
        randomNumbersArray.push(Math.floor(Math.random() * 1000));
    }
}

function cambiarPares(){
    for(let i = 0; i < randomNumbersArray.length; i++){
        if((randomNumbersArray[i] % 2) === 0){
            randomNumbersArray[i] = "par";
        }
    }
}

function imprimir(){
    for(let i = 0; i < randomNumbersArray.length; i++){
        console.log(randomNumbersArray[i] + ", ");
    }
    console.log("");
}

llenarArray();
console.log("Array sin cambiar: ");
imprimir();
cambiarPares();
console.log("Array cambiado: ");
imprimir();