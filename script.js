//------------------------
//     Function to Clean

function limpiar(){

    document.getElementById("myform").reset();

}

//     Function to sumar

function sumar(){

       
    let x = parseInt(document.getElementById("valor1").value);  
    let y = parseInt( document.getElementById("valor2").value); 
    let resultadoSum = x + y;

    let retorno =  document.getElementById('resultado').value = resultadoSum;

    
    return retorno;
    
}

//     Function to restar

function resta(){

       
    let x = parseInt(document.getElementById("valor1").value);  
    let y = parseInt( document.getElementById("valor2").value); 
    let resta = x - y;

    let retorno =  document.getElementById('resultado').value = resta;

    
    return retorno;
    
}

//     Function to multiplicar

function multiplicar(){

       
    let x = parseInt(document.getElementById("valor1").value);  
    let y = parseInt( document.getElementById("valor2").value); 
    let producto = x * y;

    let retorno =  document.getElementById('resultado').value = producto;

    
    return retorno;
    
}

//     Function to dividir

function dividir(){

       
    let x = parseInt(document.getElementById("valor1").value);  
    let y = parseInt( document.getElementById("valor2").value); 
    let cociente = x / y;

    let retorno =  document.getElementById('resultado').value = cociente;

    
    return retorno;
    
}