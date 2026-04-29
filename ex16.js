const prompt = require (`prompt-sync`)();

console.log("--- Cálculo do novo salário com Aumento ---");

//Entrada de dados
let salario = Number(prompt("Insira o valor do salário mensal: "));
let porcentagem = Number(prompt("Insira a porcentagem de aumento do salário: "));
//Processamento
let aumento = salario * (porcentagem / 100);
let novo = salario + aumento

//Saída
console.log(`Aumento do salario: ${aumento.toFixed(2)} `);
console.log(`novo salario: ${novo.toFixed(2)} `);