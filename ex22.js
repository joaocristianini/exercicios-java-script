const prompt = require('prompt-sync')();

console.log("--- Cálculo do volume de uma esfera ---");

// Entrada de dados
let raio = Number(prompt("Insira o raio da esfera: "));

// Processamento
// (4/3) * PI * raio elevado a 3
let volume = (4 / 3) * 3.14159 * (raio ** 3);

// Saída
// Note que alterei 'potencia' para 'volume' para bater com a variável acima
console.log(`Resultado do volume calculado: ${volume.toFixed(2)}`);