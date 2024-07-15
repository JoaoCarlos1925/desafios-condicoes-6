function verificarParOuImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    let resultado;

    if (isNaN(numero)) {
        resultado = "Por favor, insira um número válido.";
    } else if (numero % 2 === 0) {
        resultado = "Par";
    } else {
        resultado = "Ímpar";
    }

    document.getElementById('resultado').innerHTML = resultado;
}
