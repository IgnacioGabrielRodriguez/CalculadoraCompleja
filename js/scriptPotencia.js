function calcular() {
    var num = parseFloat(document.getElementById('potencia').value);
    var resto = num % 4
    
    if (resto == 0) {
        resultado = 1
    }
    if (resto == 3) {
        resultado = "-i"
    }
    if (resto == 2) {
        resultado = -1
    }
    if (resto == 1) {
        resultado = "i"
    }
    
    document.getElementById('resultado').innerText = resultado;
}