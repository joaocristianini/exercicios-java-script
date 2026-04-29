const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área Total da Residência ---");

// 1. Inicialização da Área Total
// Variável que irá acumular a soma das áreas de todos os cômodos
let areaTotal = 0;
let continuar;

// 2. Laço de Iteração para Leitura de Cômodos
do {
    console.log("\n--- Dados do Cômodo ---");
    
    // Solicita o nome, largura e comprimento do cômodo
    let nome = prompt("Nome do cômodo (ex: Sala, Quarto): ");
    let largura = Number(prompt(`Digite a largura de ${nome} (em metros): `));
    let comprimento = Number(prompt(`Digite o comprimento de ${nome} (em metros): `));

    // Calcula a área do cômodo atual
    let areaComodo = largura * comprimento;
    
    // Acumula na variável areaTotal
    areaTotal = areaTotal + areaComodo;

    console.log(`Área de ${nome}: ${areaComodo.toFixed(2)} m²`);

    // Pergunta se o usuário deseja continuar
    continuar = prompt("Deseja adicionar outro cômodo? (S/N): ").toUpperCase();

} while (continuar === "S" || continuar === "SIM");

// 3. Saída de Dados
console.log("-------------------------------------------");
console.log(`Área total da residência: ${areaTotal.toFixed(2)} metros quadrados.`);