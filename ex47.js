const prompt = require('prompt-sync')();

console.log("--- Valores Divisíveis por 4 Menores que 200 ---");

// 1. Laço de Iteração e Saída de Dados
// Iniciamos o laço em 4 (primeiro divisível por 4)
// O limite é 196, pois o exercício pede valores menores que 200
// O incremento é de 4 em 4 para garantir que apenas os divisíveis sejam acessados
for (let numero = 4; numero <= 196; numero += 4) {
    
    // Exibimos o número atual que é divisível por 4
    console.log(numero);
}