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

var imc1 = calcularIMC(0, 1.75);
console.log(imc1);

//Exercício 2

function inverterTexto(texto) {
    return texto.split("").reverse().join("");
}
var texto = inverterTexto("Hello, World!");
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

