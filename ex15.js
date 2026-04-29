const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do produto e da soma de quatro números ---");

//Entrada de dados
let n1 = Number(prompt("Insira o primeiro valor numérico : "));
let n2 = Number(prompt("Insira o segundo valor numérico : "));
let n3 = Number(prompt("Insira o terceiro valor numérico : "));
let n4 = Number(prompt("Insira o quarto valor numérico : "));

//Processamento
let produto = n1 * n3;
let soma = n2 + n4;

//Saída
console.log(`Resultado do pruduto: ${produto.toFixed(2)} `);
console.log(`Resultado da soma: ${soma.toFixed(2)} `);