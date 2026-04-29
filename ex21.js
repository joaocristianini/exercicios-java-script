const prompt = require (`prompt-sync`)();

console.log("--- Cálculo de potência ---");

//Entrada de dados
let base = Number(prompt("Insira a base da potência: "));
let expoente = Number(prompt("Insira o expoente da potência: "));
//Processamento
let potencia = base ** expoente

//Saída
console.log(`resultado da potência calculada: ${potencia.toFixed(2)}`);