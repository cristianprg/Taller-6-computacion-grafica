// Función para realizar la operación seleccionada
function realizarOperacion() {
    const operacion = document.getElementById("operation").value;
    const param1 = parseFloat(document.getElementById("param1").value);
    const param2 = parseFloat(document.getElementById("param2").value);
    let resultado = 0;

    switch (operacion) {
        case "sumar":
            resultado = param1 + param2;
            break;
        case "restar":
            resultado = param1 - param2;
            break;
        case "multiplicar":
            resultado = param1 * param2;
            break;
        case "dividir":
            if (param2 === 0) {
                alert("No se puede dividir por cero");
                return;
            }
            resultado = param1 / param2;
            break;
        case "potencia":
            resultado = Math.pow(param1, param2);
            break;
        case "raizCuadrada":
            if (param1 < 0) {
                alert("No se puede calcular la raíz cuadrada de un número negativo");
                return;
            }
            resultado = Math.sqrt(param1);
            break;
        case "modulo":
            resultado = param1 % param2;
            break;
        case "factorial":
            resultado = factorial(param1);
            break;
        case "promedio":
            resultado = (param1 + param2) / 2;
            break;
        case "porcentaje":
            resultado = (param1 * param2) / 100;
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Mostrar o ocultar el segundo parámetro según la operación seleccionada
document.getElementById("operation").addEventListener("change", function () {
    const selectedOperation = this.value;
    const param2Input = document.getElementById("param2");
    const param1Input = document.getElementById("param1");

    if (selectedOperation === "raizCuadrada" || selectedOperation === "factorial") {
        param2Input.style.display = "none";
        param1Input.placeholder = "Número";
    } else {
        param2Input.style.display = "block";
        param1Input.placeholder = "Primer número";
    }
});
