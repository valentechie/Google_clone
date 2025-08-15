// Función para Clean
function limpiar() {
    document.getElementById("myform").reset();
    document.getElementById("resultado").value = "";
}

// Función para Sumar
function sumar() {
    let xVal = document.getElementById("valor1").value;
    let yVal = document.getElementById("valor2").value;

    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa 2 números";
        return;
    }

    let x = Number(xVal);
    let y = Number(yVal);
    let resultadoSum = x + y;

    document.getElementById('resultado').value = resultadoSum;
    return resultadoSum;
}

// Función para Restar
function restar() {
    let xVal = document.getElementById("valor1").value;
    let yVal = document.getElementById("valor2").value;

    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa 2 números";
        return;
    }

    let x = Number(xVal);
    let y = Number(yVal);
    let resultadoResta = x - y;

    document.getElementById('resultado').value = resultadoResta;
    return resultadoResta;
}

// Función para Multiplicar
function multiplicar() {
    let xVal = document.getElementById("valor1").value;
    let yVal = document.getElementById("valor2").value;

    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa 2 números";
        return;
    }

    let x = Number(xVal);
    let y = Number(yVal);
    let producto = x * y;

    document.getElementById('resultado').value = producto;
    return producto;
}

// Function to Dividir
function dividir() {
    let xVal = document.getElementById("valor1").value;
    let yVal = document.getElementById("valor2").value;

    if (xVal === "" || yVal === "") {
        document.getElementById('resultado').value = "Ingresa 2 números";
        return;
    }

    let x = Number(xVal);
    let y = Number(yVal);

    if (y === 0) {
        document.getElementById('resultado').value = "Math ERROR";
        return;
    }

    let cociente = x / y;
    document.getElementById('resultado').value = cociente.toFixed(4);
    return cociente;
}

// Previene que el formulario se envíe (y recargue la página) cuando se presiona Enter
window.onload = function() {
    document.getElementById("myform").addEventListener("submit", function(e) {
        e.preventDefault();
    });
};