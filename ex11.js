// Importa o módulo 'readline' nativo do Node.js
const readline = require('readline');

// Configura a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definindo a cotação do dólar fixada conforme os exemplos do seu exercício
const COTACAO_DOLAR = 5.60;

// 1. Entrada de Dados
rl.question('Digite o valor em dólar (US$): ', (entrada) => {
    
    // Converte a entrada de texto para um número decimal (float)
    const valorEmDolar = parseFloat(entrada);

    // 2. Processamento
    // Calcula o valor em real multiplicando o dólar pela cotação
    const valorEmReal = valorEmDolar * COTACAO_DOLAR;

    // 3. Saída de Dados
    // O '.toFixed(1)' garante que o número mostre 1 casa decimal (ex: 280.0)
    console.log(`SAÍDA: ${valorEmReal.toFixed(1)} (valor em real, considerando a cotação de ${COTACAO_DOLAR.toFixed(2)})`);

    // Encerra a leitura do terminal
    rl.close();
});