const prompt = require('prompt-sync')();

console.log("--- Conversão de pés para metros ---");

// Entrada de dados
let pes = Number(prompt("Insira uma medida em pés (ft): "));

// Processamento
let metros = pes * 0.3048

// Saída
console.log(`medida equivalente em metros: ${metros.toFixed(2)} metros`);