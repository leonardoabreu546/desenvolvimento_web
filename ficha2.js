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

const imc1 = calcularIMC(0, 1.75);
console.log(imc1);

//Exercício 2

function inverterTexto(texto) {
    return texto.split("").reverse().join("");
}
let texto = inverterTexto("Hello, World!");
console.log(texto);

//Exercício 3

function contarVogais(frase) {
    frase = frase.toLowerCase();
    
    const vogais = "aeiou";
    
    let contador = 0;

    for (let letra of frase) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return "A frase tem " + contador + " vogais.";
}

console.log(contarVogais("Olá Mundo")); 

//Exercício 4

function contarLetras(frase, letra) {
    frase = frase.toLowerCase();
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra.toLowerCase()) {
            contador++;
        }
    }
    return "A letra '" + letra + "' aparece " + contador + " vezes na frase.";
}

console.log(contarLetras("Olá Mundo", "o")); 

//Exercício 5

function tempoTrabalho(horaEntrada, horaSaida) {
    if (horaEntrada < 8 || horaSaida > 18 || horaEntrada >= horaSaida) {
        return "Horas inválidas.";
    }

    const totalHoras = horaSaida - horaEntrada;
    return "O tempo total de trabalho é de " + totalHoras.toFixed(2) + " horas.";
}