const prompt = require (`prompt-sync`)();

console.log("--- Cálculo de raiz ---");

//Entrada de dados
let base = Number(prompt("Insira a base da raiz: "));
let indice = Number(prompt("Insira o índice da raiz: "));
//Processamento
let raiz = base ** (1 / indice)

//Saída
console.log(`valor da raiz calculada: ${raiz.toFixed(2)}`);