const prompt = require('prompt-sync')();

console.log("--- Somatório, Média e Total de Valores ---");
console.log("(O programa encerra ao digitar um valor zero ou negativo)");

// 1. Inicialização do Somatório, Total de Valores Lidos e Média
let somatorio = 0;
let totalValores = 0;
let media = 0;

// 2. Laço de Iteração
// Utilizamos um laço infinito que será interrompido pelo comando 'break'
while (true) {
    
    // Solicitamos a entrada do usuário
    let valor = Number(prompt("Digite um valor numérico: "));

    // Verificação de interrupção: se o valor for menor ou igual a zero, sai do laço
    if (valor <= 0) {
        break;
    }

    // Processamento dos dados positivos
    somatorio = somatorio + valor;
    totalValores = totalValores + 1;
    
    // 3. Cálculo da Média (atualizado a cada iteração)
    media = somatorio / totalValores;
}

// 4. Saída de Dados
console.log("-------------------------------------------");
if (totalValores > 0) {
    console.log(`Somatório: ${somatorio}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Total de valores lidos: ${totalValores}`);
} else {
    console.log("Nenhum valor positivo foi inserido.");
}