const prompt = require('prompt-sync')();

console.log('--- Apuração de Votos ---');

// Entrada de dados
let c1 = Number(prompt("Votos candidato 1: "));
let c2 = Number(prompt("Votos candidato 2: "));
let c3 = Number(prompt("Votos candidato 3: "));
let nulos = Number(prompt("Votos nulos: "));
let branco = Number(prompt("Votos em branco: "));

// Processamento
let total = c1 + c2 + c3 + nulos + branco;

let p1 = (c1 / total) * 100;
let p2 = (c2 / total) * 100;
let p3 = (c3 / total) * 100;
let pn = (nulos / total) * 100;
let pb = (branco / total) * 100;

console.log("\nTotal de eleitores: " + total);
console.log(`Candidato 1: ${p1.toFixed(2)}%`);
console.log(`Candidato 2: ${p2.toFixed(2)}%`);
console.log(`Candidato 3: ${p3.toFixed(2)}%`);
console.log(`Nulos: ${pn.toFixed(2)}%`);
console.log(`Brancos: ${pb.toFixed(2)}%`);