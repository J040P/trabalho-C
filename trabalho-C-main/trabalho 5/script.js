function calcular() {
    let peso = parseFloat(document.getElementById("inputPeso").value);

    let respmais15 = peso * 0.15 + peso;
    let respmenos20 = peso - peso * 0.20;

    let resultado = `Seu peso mais 15 por cento: ${respmais15.toFixed(2)} kilos.<br>Seu peso menos 20 por cento: ${respmenos20.toFixed(2)} kilos.`;

    document.getElementById("resultado").innerHTML = resultado;
}