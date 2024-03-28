function calcular() {
    let salario = parseFloat(document.getElementById("inputSalario").value);
    let resp1 = salario * 0.15 + salario;
    let resp2 = resp1 * 0.08;
    resp2 = resp1 - resp2;

    let resultado = `O SALÁRIO INICIAL É: R$ ${salario.toFixed(2)}.<br>O SALÁRIO COM AUMENTO É: R$ ${resp1.toFixed(2)}.<br>E O SALÁRIO FINAL COM DESCONTO É: R$ ${resp2.toFixed(2)}.`;

    document.getElementById("resultado").innerHTML = resultado;
}