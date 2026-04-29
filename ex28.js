const prompt = require('prompt-sync')();

console.log("--- Classificação de Número Positivo ou Negativo ---");

// 1. Entrada de Dados
// Usamos o Number porque o exercício pede números inteiros
let numero = Number(prompt("Digite um valor numérico inteiro: "));

// 2. Processamento
let classificacao;

if (numero > 0) {
    classificacao = "Positivo";
} else if (numero < 0) {
    classificacao = "Negativo";
} else {
    classificacao = "Neutro (Zero)";
}

// 3. Saída de Dados
console.log(`O número é: ${classificacao}`);