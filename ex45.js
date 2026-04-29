const prompt = require('prompt-sync')();

console.log("--- Somatório dos Valores Pares (1 até 500) ---");

// 1. Inicialização da Soma
// Inicializamos a variável que irá acumular os valores pares
let somaPares = 0;

// 2. Laço de Iteração
// Iniciamos em 2 (primeiro par) e incrementamos de 2 em 2 até 500
for (let numero = 2; numero <= 500; numero += 2) {
    
    // Adicionamos o número par atual ao somatório
    somaPares = somaPares + numero;
}

// 3. Saída de Dados
// Apresentamos o total acumulado
console.log(`O somatório dos valores pares de 1 até 500 é: ${somaPares}`);