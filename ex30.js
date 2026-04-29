const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação com Exame ---");

// 1. Entrada de Dados
// Solicitamos as quatro notas bimestrais
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

// 2. Processamento
let media = (nota1 + nota2 + nota3 + nota4) / 4;
let situacao;

if (media > 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Exame";
} else {
    situacao = "Reprovado";
}

// 3. Saída de Dados
console.log(`Média: ${media}, Situação: ${situacao}`);