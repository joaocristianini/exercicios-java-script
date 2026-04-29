const prompt = require('prompt-sync')();

console.log("--- Sucessor e Antecessor de um número inteiro ---");

// Entrada de dados
let n1 = Number(prompt("Insira um valor númerico inteiro: "));

// Processamento
let Sucessor = n1 + 1
let Antecessor = n1 - 1

// Saída
console.log(`valor do Sucessor: ${Sucessor.toFixed(2)}`);
console.log(`valor do Antecessor: ${Antecessor.toFixed(2)}`);