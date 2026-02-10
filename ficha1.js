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






