const prompt = require('prompt-sync')();

console.log("--- Multiplicação e Verificação (Resultado > 30) ---");

// 1. Entrada de Dados
// Solicitamos um número inteiro ao usuário
let numero = Number(prompt("Digite um número inteiro: "));

// 2. Processamento
// Multiplicamos o número inserido por dois
let resultado = numero * 2;

// 3. Verificação e 4. Saída de Dados
// Apresentamos o resultado apenas se ele for maior que 30
if (resultado > 30) {
    console.log(resultado);
}