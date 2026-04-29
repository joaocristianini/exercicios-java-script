const prompt = require('prompt-sync')();

console.log("--- Verificação de Múltiplo de 3 e 5 ---");

// 1. Entrada de Dados
// Solicitamos um número ao usuário
let numero = Number(prompt("Digite um número: "));

// 2. Processamento
// Verificamos se o número é múltiplo de 3 E 5 usando o operador de resto (%)
// Se o resto da divisão por ambos for 0, ele atende à condição.
let saida = "";

if (numero % 3 === 0 && numero % 5 === 0) {
    saida = numero;
}

// 3. Saída de Dados
// O programa só apresenta o valor se ele for múltiplo de ambos
if (saida !== "") {
    console.log(saida);
}