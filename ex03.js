const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Calculadora de Volume de Lata de Óleo ---\n");

// 1. Entrada de Dados
rl.question("Digite o valor do raio da base da lata (em cm): ", (raioInput) => {
    let raio = parseFloat(raioInput);

    rl.question("Digite o valor da altura da lata (em cm): ", (alturaInput) => {
        let altura = parseFloat(alturaInput);

        // 2. Processamento: V = π * raio^2 * altura
        // Usamos Math.PI para o valor de π e Math.pow para elevar ao quadrado
        let volume = Math.PI * Math.pow(raio, 2) * altura;

        // 3. Saída de Dados
        console.log(`\nVolume da lata de óleo: ${volume} cm³`);

        rl.close();
    });
});