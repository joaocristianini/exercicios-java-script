const prompt = require('prompt-sync')();

console.log("--- Potências de Base 3 (Expoentes 0 a 15) ---");

// 1. Inicialização do Contador de Expoentes
// Iniciamos o expoente em 0 conforme o passo a passo
let expoente = 0;

// 2. Laço de Iteração com Condição de Parada
// O laço será executado enquanto o expoente for menor ou igual a 15
while (expoente <= 15) {
    
    // Calculamos a potência. No JavaScript, usamos o operador ** ou Math.pow()
    // A fórmula matemática é: $$ 3^{expoente} $$
    let potencia = 3 ** expoente;
    
    // Exibimos o resultado formatado
    console.log(`3^${expoente} = ${potencia}`);
    
    // Incremetamos o contador de expoentes em 1
    expoente++;
}