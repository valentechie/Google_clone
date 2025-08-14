// Function to Clean
// Limpia todos los campos del formulario y borra el resultado mostrado
function limpiar() {
    document.getElementById("myform").reset();         // Restablece todos los campos del formulario a su valor inicial
    document.getElementById("resultado").value = "";   // Borra el contenido del campo de resultado
}

// Function to Sumar
// Suma los valores ingresados en los dos campos y muestra el resultado
function sumar() {
    let xVal = document.getElementById("valor1").value;  // Obtiene el valor del primer número
    let yVal = document.getElementById("valor2").value;  // Obtiene el valor del segundo número

    // Validación: si algún campo está vacío, muestra un mensaje y termina
    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa ambos números";
        return;
    }

    let x = Number(xVal);        // Convierte el valor del primer campo a número
    let y = Number(yVal);        // Convierte el valor del segundo campo a número
    let resultadoSum = x + y;    // Realiza la suma

    document.getElementById('resultado').value = resultadoSum; // Muestra el resultado en la pantalla
    return resultadoSum;         // Devuelve el resultado (por si se usa en otra parte)
}

// Function to Restar
// Resta el segundo número al primero y muestra el resultado
function resta() {
    let xVal = document.getElementById("valor1").value;  // Obtiene el valor del primer número
    let yVal = document.getElementById("valor2").value;  // Obtiene el valor del segundo número

    // Validación: si algún campo está vacío, muestra un mensaje y termina
    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa ambos números";
        return;
    }

    let x = Number(xVal);        // Convierte el valor del primer campo a número
    let y = Number(yVal);        // Convierte el valor del segundo campo a número
    let resultadoResta = x - y;  // Realiza la resta

    document.getElementById('resultado').value = resultadoResta; // Muestra el resultado en la pantalla
    return resultadoResta;      // Devuelve el resultado
}

// Function to Multiplicar
// Multiplica los dos números y muestra el resultado
function multiplicar() {
    let xVal = document.getElementById("valor1").value;  // Obtiene el valor del primer número
    let yVal = document.getElementById("valor2").value;  // Obtiene el valor del segundo número

    // Validación: si algún campo está vacío, muestra un mensaje y termina
    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa ambos números";
        return;
    }

    let x = Number(xVal);        // Convierte el valor del primer campo a número
    let y = Number(yVal);        // Convierte el valor del segundo campo a número
    let producto = x * y;        // Realiza la multiplicación

    document.getElementById('resultado').value = producto; // Muestra el resultado en la pantalla
    return producto;             // Devuelve el resultado
}

// Function to Dividir
// Divide el primer número por el segundo y muestra el resultado
function dividir() {
    let xVal = document.getElementById("valor1").value;  // Obtiene el valor del primer número
    let yVal = document.getElementById("valor2").value;  // Obtiene el valor del segundo número

    // Validación: si algún campo está vacío, muestra un mensaje y termina
    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa ambos números";
        return;
    }

    let x = Number(xVal);        // Convierte el valor del primer campo a número
    let y = Number(yVal);        // Convierte el valor del segundo campo a número

    // Validación: si el divisor es cero, muestra un mensaje y termina
    if (y === 0) {
        document.getElementById('resultado').value = "No se puede dividir por cero";
        return;
    }

    let cociente = x / y;        // Realiza la división
    document.getElementById('resultado').value = cociente; // Muestra el resultado en la pantalla
    return cociente;             // Devuelve el resultado
}

// Prevent accidental form submit
// Previene que el formulario se envíe (y recargue la página) cuando se presiona Enter
window.onload = function() {
    document.getElementById("myform").addEventListener("submit", function(e) {
        e.preventDefault(); // Cancela el envío del formulario
    });
};