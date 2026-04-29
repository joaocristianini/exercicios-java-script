const prompt = require('prompt-sync')();

console.log("--- Números Ímpares na Faixa de 0 a 200 ---");

// 1. Inicialização
// Iniciamos a variável com 1, que é o primeiro número ímpar da faixa
let numero = 1;

// 2. Laço de Iteração e Saída de Dados
// O laço continuará enquanto o número for menor ou igual a 199 
// (já que 200 é par e o limite superior é 200)
while (numero <= 199) {
    
    // Exibimos o valor atual de "numero"
    console.log(numero);
    
    // Incrementamos o valor em 2 para saltar para o próximo ímpar
    numero = numero + 2;
}