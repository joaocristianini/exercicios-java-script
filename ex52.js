const prompt = require('prompt-sync')();

console.log("--- Somatório de Grãos de Trigo (Problema do Xadrez) ---");

// 1. Inicialização do Somatório
// Iniciamos o total em 0 e começamos pelo primeiro quadro (casa)
let totalGraos = 0;
let quadro = 1;

// 2. Laço de Iteração e 3. Atualização do Somatório
// O tabuleiro de xadrez possui 64 casas
while (quadro <= 64) {
    
    // Calculamos os grãos da casa atual: 2 elevado a (quadro - 1)
    // Na 1ª casa: 2^0 = 1 grão
    // Na 2ª casa: 2^1 = 2 grãos...
    let graosNoQuadro = 2 ** (quadro - 1);
    
    // Acumulamos o valor no somatório total
    totalGraos = totalGraos + graosNoQuadro;
    
    // Incrementamos para a próxima casa
    quadro++;
}

// 4. Saída de Dados
// Apresentamos o resultado final
console.log(`Total de grãos de trigo no tabuleiro de xadrez = ${totalGraos}`);