const prompt = require('prompt-sync')();

console.log("--- Fatorial dos Valores Ímpares (1 a 100) ---");

// 2. Laço de Iteração (Percorre os ímpares de 1 a 100)
for (let numeroImpar = 1; numeroImpar <= 100; numeroImpar += 2) {
    
    // 1. Inicialização do Resultado da Fatorial
    // Para cada novo número ímpar, resetamos o resultado para 1
    let fatorial = 1;

    // 3. Cálculo da Fatorial
    // Multiplicamos o número por todos os seus antecessores até 1
    for (let i = 1; i <= numeroImpar; i++) {
        fatorial = fatorial * i;
    }

    // 4. Saída de Dados
    // Exibe o fatorial de cada número ímpar encontrado no intervalo
    console.log(`Fatorial de ${numeroImpar}: ${fatorial}`);
}