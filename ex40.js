const prompt = require('prompt-sync')();

console.log("--- Soma e Verificação (Maior que 100) ---");

// 1. Entrada de Dados
// Solicitamos os três valores ao usuário
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));
let valor3 = Number(prompt("Digite o terceiro valor: "));

// 2. Processamento
// Realizamos a soma dos três valores inseridos
let soma = valor1 + valor2 + valor3;

// 3. Saída de Dados (com Verificação)
// O resultado só é exibido se a soma for maior que 100
if (soma > 100) {
    console.log(soma);
}