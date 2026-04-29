// Importa o módulo 'readline' nativo do Node.js para ler dados do terminal
const readline = require('readline');

// Configura a interface de entrada (teclado) e saída (tela)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Entrada de Dados
rl.question('Digite o primeiro número inteiro (num1): ', (entrada1) => {
    // Converte a primeira entrada (texto) para número inteiro
    const num1 = parseInt(entrada1);

    rl.question('Digite o segundo número inteiro (num2): ', (entrada2) => {
        // Converte a segunda entrada (texto) para número inteiro
        const num2 = parseInt(entrada2);

        // 2. Processamento
        // Calcula a diferença do primeiro pelo segundo
        const diferenca = num1 - num2;

        // 3. Saída de Dados
        console.log(`SAÍDA: ${diferenca} (${num1} - ${num2})`);

        // Encerra a leitura do terminal
        rl.close();
    });
});