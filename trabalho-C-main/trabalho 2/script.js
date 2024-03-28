function calcular() {
    const valor = parseFloat(document.getElementById("inputValor").value);
    const litro = parseFloat(document.getElementById("inputLitro").value);

    const resultado = `Você irá abastecer ${parseFloat((valor / litro).toFixed(3))} litro.`;

    document.getElementById("resultado").innerText = resultado;
}