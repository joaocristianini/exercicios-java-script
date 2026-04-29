const prompt = require('prompt-sync')();

console.log("--- Tabuada de um Número ---");

// 1. Entrada de Dados
// Solicitamos ao usuário o número para gerar a tabuada
let numero = Number(prompt("Digite o número que deseja calcular a tabuada: "));

// 2. Inicialização
// Inicializamos o multiplicador começando em 1
let multiplicador = 1;

// 3. Processamento e Saída de Dados
// Enquanto o multiplicador for menor ou igual a 10, o bloco será repetido
while (multiplicador <= 10) {
    
    // Calculamos o produto
    let produto = numero * multiplicador;
    
    // Apresentamos o resultado no formato solicitado
    console.log(`${numero} x ${multiplicador} = ${produto}`);
    
    // Incrementamos o multiplicador para evitar um loop infinito
    multiplicador++;
}