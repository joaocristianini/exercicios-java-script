const prompt = require('prompt-sync')();

console.log("--- Conversão de Celsius para Fahrenheit (10°C a 100°C) ---");

// 1. Laço de Iteração
// O laço inicia em 10, vai até 100 e aumenta de 10 em 10 a cada volta (passo 10)
for (let grauCelsius = 10; grauCelsius <= 100; grauCelsius += 10) {
    
    // Calculamos o valor equivalente em Fahrenheit
    // A fórmula matemática utilizada é: $$ F = \frac{9 \cdot C}{5} + 32 $$
    let grauFahrenheit = (grauCelsius * 9 / 5) + 32;

    // 2. Saída de Dados
    // Exibimos a conversão formatada para o usuário
    console.log(`${grauCelsius}°C equivale a ${grauFahrenheit}°F`);
}