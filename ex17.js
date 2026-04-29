const prompt = require (`prompt-sync`)();

console.log("--- Cálculo da Área de uma circunferência ---");

//Entrada de dados
let raio = Number(prompt("Insira o valor do raio da circunferência: "));
//Processamento
let area = 3.14159 * raio * raio;

//Saída
console.log(`O Volume da área: ${area.toFixed(2)}`);