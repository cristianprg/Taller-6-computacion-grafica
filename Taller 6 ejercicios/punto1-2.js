const prompt = require("prompt-sync")();

let objetosArray = [];

function crearObjeto() {
  let nombre = prompt("Ingresa el nombre:");
  let edad = prompt("Ingresa la edad:");
  let ciudad = prompt("Ingresa la ciudad:");
  

  let nuevoObjeto = {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad
  };
  
  objetosArray.push(nuevoObjeto);
}

function modificarObjeto(index) {
  let objeto = objetosArray[index];

  
  let accion = prompt("¿Qué deseas hacer con el objeto? Escribe 'modificar', 'añadir' o 'eliminar':");

  if (accion === 'modificar') {
    let atributo = prompt("¿Qué atributo deseas modificar (nombre, edad, ciudad)?");
    let nuevoValor = prompt(`Ingresa el nuevo valor para ${atributo}:`);
    if (objeto.hasOwnProperty(atributo)) {
      objeto[atributo] = nuevoValor;
    } else {
      console.log("Atributo no encontrado.");
    }

  } else if (accion === 'añadir') {
    let nuevoAtributo = prompt("Ingresa el nombre del nuevo atributo:");
    let valorAtributo = prompt(`Ingresa el valor para ${nuevoAtributo}:`);
    objeto[nuevoAtributo] = valorAtributo;

  } else if (accion === 'eliminar') {
    let atributo = prompt("¿Qué atributo deseas eliminar (nombre, edad, ciudad u otro añadido)?");
    if (objeto.hasOwnProperty(atributo)) {
      delete objeto[atributo];
    } else {
      console.log("Atributo no encontrado.");
    }

  } else {
    console.log("Acción no válida.");
  }
}

// Ciclo para ingresar objetos hasta que el usuario decida detenerse
let seguir = 'sí';
while (seguir.toLowerCase() === 'si') {
  crearObjeto();
  
  seguir = prompt("¿Quieres agregar otro objeto? Escribe 'si' para continuar o cualquier otra cosa para terminar.");
}

// Mostrar el array con los objetos creados
console.log("Objetos creados:");
console.log(objetosArray);

// Modificar un objeto según el índice
let modificar = prompt("¿Quieres modificar un objeto? Escribe 'si' o 'no':");

while (modificar.toLowerCase() === 'si') {
  let indice = parseInt(prompt(`¿Qué objeto deseas modificar? (Escribe un índice entre 0 y ${objetosArray.length - 1}):`));
  if (indice >= 0 && indice < objetosArray.length) {
    modificarObjeto(indice);
  } else {
    console.log("Índice no válido.");
  }

  modificar = prompt("¿Quieres modificar otro objeto? Escribe 'si' o 'no':");
}

// Mostrar el array actualizado
console.log("Objetos actualizados:");
console.log(objetosArray);
