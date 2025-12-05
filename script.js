function calcular() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (!nome || !altura || !peso) {
        resultado.innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    resultado.innerHTML = `
        Nome: <b>${nome}</b><br>
        IMC: <b>${imc}</b><br>
        Classificação: <b>${classificacao}</b>
    `;
}
