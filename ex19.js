const prompt = require (`prompt-sync`)();

console.log("--- Cálculo das quatro operações básicas ---");

//Entrada de dados
let n1 = Number(prompt("Insira o primeiro número: "));
let n2 = Number(prompt("Insira o segundo número: "));
//Processamento
let adição = n1 + n2; 
let subtração = n1 - n2;
let multiplicação = n1 * n2;
let divisão = n1 / n2;

//Saída
console.log("Adição: " + n1 + " + " + n2 + " = " + adição + ";");
console.log(`Subtração: ${n1} - ${n2} = ${subtração};`);
console.log(`Multiplicação: ${n1} * ${n2} = ${multiplicação};`);
console.log(`Divisão: ${n1} / ${n2} = ${divisão};`);