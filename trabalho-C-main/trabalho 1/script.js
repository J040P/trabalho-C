function calcular() {
    let code = document.getElementById("inputCode").value;
    let age = document.getElementById("inputAge").value;
    let height = document.getElementById("inputHeight").value;
    let weight = document.getElementById("inputWeight").value;

    let resultado = `O competidor ${code}, tem ${age} anos, pesa ${weight} Kg e tem ${height} de altura.`;

    document.getElementById("resultado").innerText = resultado;
}