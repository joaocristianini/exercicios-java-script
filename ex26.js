const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do quadrado da divisão de dois números inteiro ---");

//Entrada de dados
let primeiro = Number(prompt("Insira o primeiro número inteiro: "));
let segundo = Number(prompt("Insira o segundo número inteiro: "));
//Processamento
let divisão = primeiro / segundo
let quadrado = divisão * divisão

//Saída
console.log(`Resultado do inteiro do quadrado da divisão: ${quadrado.toFixed(2)} `);