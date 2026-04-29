const prompt = require('prompt-sync')();

console.log("--- Soma de valores ---");

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

let soma = num1 + num2;

console.log(`O resultado da soma entre ${num1} e ${num2} é: ${soma}`);
