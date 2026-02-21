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
    console.log("Múltiplos de 5:");
    for (var i = 5; i <= 20; i += 5) {
        console.log(i);
    }
}
multiplosDeCinco();

// Exercício 5

function soma100() {
    console.log("Soma dos números de 1 a 100:");
    var soma = 0;
    for (var i = 1; i <= 100; i++) {
        soma += i;
    }
    console.log(soma);
}
soma100();

// Exercício 6

function fatorial(n) {
    resultado=1;
    while (n > 0) {
        resultado*=n;
        n--;
    }
    return resultado;
}
console.log("Resultado: " + fatorial(5));

// Exercício 7

function estatísticas(numeros) {
}