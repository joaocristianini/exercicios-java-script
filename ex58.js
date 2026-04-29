const prompt = require('prompt-sync')();

console.log("--- Identificador de Maior e Menor Valor ---");
console.log("(Digite um número negativo para encerrar)");

// 1. Inicialização dos Valores
// Inicializamos com -1 conforme o pseudocódigo para identificar a primeira entrada
let maior = -1;
let menor = -1;

// 2. Laço de Leitura dos Valores
while (true) {
    let valor = Number(prompt("Informe um valor inteiro: "));

    // Verificamos se o valor é positivo para continuar ou negativo para sair
    if (valor >= 0) {
        
        // Verificação do Maior: se o valor atual for maior que o guardado
        if (valor > maior) {
            maior = valor;
        }

        // Verificação do Menor: se for a primeira rodada (menor == -1) 
        // ou se o valor atual for menor que o guardado
        if (menor === -1 || valor < menor) {
            menor = valor;
        }

    } else {
        // Se for negativo, encerra o laço
        break;
    }
}

// 3. Saída de Dados
console.log("-------------------------------------------");
if (maior !== -1) {
    console.log(`Maior valor informado: ${maior}`);
    console.log(`Menor valor informado: ${menor}`);
} else {
    console.log("Nenhum valor positivo foi informado.");
}