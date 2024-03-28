function calcularDesconto() {
    const time = parseInt(document.getElementById("inputTime").value);
    const value = parseFloat(document.getElementById("inputValue").value);

    let desconto;

    if (time >= 5) {
        if (value > 5000) {
            desconto = "20%";
        } else if (value > 1000) {
            desconto = "10%";
        } else {
            desconto = "SEM DESCONTO";
        }
    } else {
        desconto = "SEM DESCONTO";
    }

    document.getElementById("resultado").innerText = desconto;
}