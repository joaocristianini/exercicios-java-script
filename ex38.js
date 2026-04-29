const prompt = require('prompt-sync')();

console.log("--- Verificação de Valor Menor ou Igual a 3 ---");

// 1. Entrada de Dados
// Solicitamos um valor numérico inteiro ao usuário
let valor = Number(prompt("Digite um valor inteiro: "));

// 2. Processamento
// O programa só deve preparar a saída se o valor não for maior que 3 (ou seja, <= 3)
let saida = "";

if (valor <= 3) {
    saida = valor;
}

// 3. Saída de Dados
// Só apresentamos algo se a condição for atendida, conforme o exemplo
if (saida !== "") {
    console.log(saida);
}