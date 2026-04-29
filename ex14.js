const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do quadrado da soma de três números ---");

//Entrada de dados
let primeiro = Number(prompt("Insira o primeiro número: "));
let segundo = Number(prompt("Insira o segundo número: "));
let terceiro = Number(prompt("Insira o terceiro número: "));
//Processamento
let soma = primeiro + segundo + terceiro; 
let quadrado = soma * soma

//Saída
console.log(`Resultado do quadrado da soma: ${quadrado.toFixed(2)}`);