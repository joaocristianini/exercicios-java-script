const prompt = require('prompt-sync')();

console.log("--- Verificação de Par ou Ímpar ---");

// 1. Entrada de Dados
// Solicitamos um número inteiro ao usuário
let numero = Number(prompt("Digite um número inteiro: "));

// 2. Processamento
// Um número é par se o resto da sua divisão por 2 for zero
let resultado;

if (numero % 2 === 0) {
    resultado = "Par";
} else {
    resultado = "Ímpar";
}

// 3. Saída de Dados
// Apresentamos o resultado da classificação
console.log(`O número ${numero} é: ${resultado}`);