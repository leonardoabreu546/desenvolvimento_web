//Exercício 1

function calcularNota(p, t, a) {
    var notaFinal = (p * 0.3) + (t * 0.4) + (a * 0.3);
    return notaFinal;
}

var notaFinal = calcularNota(16, 15, 15);
console.log(notaFinal);

if (notaFinal >= 9) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Exercício 2

function nomeDoMes(numero) {
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                 "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (numero >= 1 && numero <= 12) {
        return meses[numero - 1];
    } else {
        return "Número inválido";
    }
}

var mes = nomeDoMes(13);

console.log(mes);


