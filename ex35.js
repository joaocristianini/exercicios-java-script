const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valor ---");

// 1. Entrada de Dados
// Solicitamos os cinco valores numéricos inteiros
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));
let num4 = Number(prompt("Digite o quarto número: "));
let num5 = Number(prompt("Digite o quinto número: "));

// 2. Processamento
// Inicializamos o maior e o menor com o primeiro número
let maior = num1;
let menor = num1;

// Verificação para o num2
if (num2 > maior) maior = num2;
if (num2 < menor) menor = num2;

// Verificação para o num3
if (num3 > maior) maior = num3;
if (num3 < menor) menor = num3;

// Verificação para o num4
if (num4 > maior) maior = num4;
if (num4 < menor) menor = num4;

// Verificação para o num5
if (num5 > maior) maior = num5;
if (num5 < menor) menor = num5;

// 3. Saída de Dados
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);