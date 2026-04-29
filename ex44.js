const prompt = require('prompt-sync')();

console.log("--- Soma dos Cem Primeiros Números Naturais ---");

// 1. Inicialização da Soma
// Começamos a soma em zero e o contador em 1
let soma = 0;
let contador = 1;

// 2. Laço de Iteração
// O laço percorre os números de 1 até 100
while (contador <= 100) {
    
    // Adicionamos o valor atual do contador à variável soma
    soma = soma + contador;
    
    // Incrementamos o contador para passar para o próximo número
    contador++;
}

// 3. Saída de Dados
// Apresentamos o resultado acumulado na variável soma
console.log(`A soma dos cem primeiros números naturais é: ${soma}`);