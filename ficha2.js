//Exercício 1

function calcularIMC(peso, altura) {

    imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    }

    else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    }

    else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
    }   

    else if (imc >= 30) {
        return "Obesidade";
    }
}

var imc1 = calcularIMC(70, 1.75);
console.log(imc1);

//Exercício 2

function inverterTexto(texto) {
    return texto.split("").reverse().join("");
}
var texto = inverterTexto("Hello, World!");
console.log(texto);