const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação ---");

// 1. Entrada de Dados
// Usamos o Number para permitir notas com casas decimais
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

// 2. Processamento
let media = (nota1 + nota2 + nota3 + nota4) / 4;
let status;

if (media >= 5) {
    status = "Aprovado";
} else {
    status = "Reprovado";
}

// 3. Saída de Dados
console.log(`Média: ${media}, ${status}`);