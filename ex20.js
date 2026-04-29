const prompt = require (`prompt-sync`)();

console.log("--- Cálculo da velocidade de um projétil ---");

//Entrada de dados
let distância = Number(prompt("Insira a distância em quilômetros (km): "));
let tempo = Number(prompt("Insira o tempo em horas (h): "));
//Processamento
let velocidade = distância / tempo / 3.6

//Saída
console.log(`velocidade em metros por segundo: ${velocidade.toFixed(2)} m/s`);