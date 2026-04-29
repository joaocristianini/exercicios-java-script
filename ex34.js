const prompt = require('prompt-sync')();

console.log("--- Valores Divisíveis por 2 ou 3 ---");

// 1. Entrada de Dados
// Solicitamos os quatro valores numéricos inteiros
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
let num4 = Number(prompt("Digite o quarto número: "));

// 2. Processamento e 3. Saída de Dados
// Verificamos individualmente se cada número é divisível por 2 OU por 3
// Utilizamos o operador lógico || (OU)
console.log("Valores divisíveis por 2 ou 3:");

if (num1 % 2 === 0 || num1 % 3 === 0) {
    console.log(num1);
}

if (num2 % 2 === 0 || num2 % 3 === 0) {
    console.log(num2);
}

if (num3 % 2 === 0 || num3 % 3 === 0) {
    console.log(num3);
}

if (num4 % 2 === 0 || num4 % 3 === 0) {
    console.log(num4);
}