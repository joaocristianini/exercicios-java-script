// Importa o módulo 'readline'
const readline = require('readline');

// Configura a interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Entrada de Dados
rl.question('Digite o primeiro número: ', (entrada1) => {
    const num1 = parseFloat(entrada1);

    rl.question('Digite o segundo número: ', (entrada2) => {
        const num2 = parseFloat(entrada2);

        rl.question('Digite o terceiro número: ', (entrada3) => {
            const num3 = parseFloat(entrada3);

            // 2. Processamento
            // Calcula o quadrado de cada número e os soma
            const q1 = num1 * num1;
            const q2 = num2 * num2;
            const q3 = num3 * num3;
            const somaQuadrados = q1 + q2 + q3;

            // 3. Saída de Dados
            console.log(`SAÍDA: ${somaQuadrados} (${num1}² + ${num2}² + ${num3}² = ${q1} + ${q2} + ${q3} = ${somaQuadrados})`);

            // Encerra a leitura
            rl.close();
        });
    });
});