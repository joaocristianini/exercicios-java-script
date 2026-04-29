const prompt = require('prompt-sync')();

console.log("--- Verificação de Faixa de Valor (1 a 9) ---");

// 1. Entrada de Dados
// Solicitamos um valor numérico inteiro ao usuário
let valor = Number(prompt("Digite um valor inteiro: "));

// 2. Processamento
// Verificamos se o valor está entre 1 e 9 inclusive
let mensagem;

if (valor >= 1 && valor <= 9) {
    mensagem = "Valor está na faixa permitida";
} else {
    mensagem = "Valor não está na faixa permitida";
}

// 3. Saída de Dados
// Apresentamos o resultado da verificação
console.log(mensagem);