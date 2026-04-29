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
rl.question('Digite o valor em real (R$): ', (entrada) => {
    
    // Converte a entrada de texto para um número decimal (float)
    const valorEmReal = parseFloat(entrada);

    // 2. Processamento
    // Calcula o valor em dólar dividindo o valor em real pela cotação
    const valorEmDolar = valorEmReal / COTACAO_DOLAR;

    // 3. Saída de Dados
    // O '.toFixed(2)' garante que o resultado tenha exatamente duas casas decimais com arredondamento,
    // batendo perfeitamente com os seus exemplos (ex: 17.86, 89.29, 8.93).
    console.log(`SAÍDA: ${valorEmDolar.toFixed(2)} (valor em dólar, considerando a cotação de ${COTACAO_DOLAR.toFixed(2)})`);

    // Encerra a leitura do terminal
    rl.close();
});