const prompt = require('prompt-sync')();

console.log("--- Somatório da Fatorial de 15 Valores ---");

// 1. Inicialização do Somatório
// Variável que guardará a soma de todas as fatoriais calculadas
let somatorio = 0;

// 2. Laço de Iteração (15 vezes)
for (let i = 1; i <= 15; i++) {
    let valor = Number(prompt(`Digite o ${i}º valor inteiro: `));

    // 3. Cálculo da Fatorial
    // Para cada valor lido, reiniciamos a variável fatorial em 1
    let fatorial = 1;
    
    // Multiplicamos de 1 até o valor lido para obter o fatorial
    // Ex: Se valor for 4, fatorial será 1 * 2 * 3 * 4 = 24
    for (let j = 1; j <= valor; j++) {
        fatorial = fatorial * j;
    }

    // 4. Atualização do Somatório
    // Adicionamos o fatorial do número atual ao total acumulado
    somatorio = somatorio + fatorial;
    
    console.log(`Fatorial de ${valor} = ${fatorial}`);
}

// 5. Saída de Dados
console.log("-------------------------------------------");
console.log(`Somatório da fatorial de cada valor lido: ${somatorio}`);