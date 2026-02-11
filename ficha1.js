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


// Exercício 3

function calculadora(a, b, operador) {
    if (operador=="+") {
        return a + b;
    }
    else if (operador=="-") {
        return a - b;
    }
    else if (operador=="*") {
        return a * b;
    }
    else if (operador=="/") {
        if (b != 0) {
            return a / b;
        } else {
            return "Erro: Divisão por zero";
        }
    } else {
        return "Operação inválida";
    }
}

var resultado1 = calculadora(10, 5, "+");
var resultado2 = calculadora(10, 5, "-");
var resultado3 = calculadora(10, 5, "*");
var resultado4 = calculadora(10, 5, "/");
var resultado5 = calculadora(10, 0, "/");
var resultado6 = calculadora(10, 5, "s");

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);

// Exercício 4

function multiplosDeCinco() {
    for (var i = 5; i <= 20; i += 5) {
        console.log(i);
    }
}
multiplosDeCinco();

// Exercício 5

function soma100() {
    for (var i = 1; i <= 100; i++) {
        console.log(i);
    }
}
soma100();
