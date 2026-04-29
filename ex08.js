const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Calculadora de Volume de Caixa Retangular ---\n");

// 1. Entrada de Dados
rl.question("Digite o valor do comprimento da caixa: ", (compInput) => {
    let comprimento = parseFloat(compInput);

    rl.question("Digite o valor da largura da caixa: ", (largInput) => {
        let largura = parseFloat(largInput);

        rl.question("Digite o valor da altura da caixa: ", (altInput) => {
            let altura = parseFloat(altInput);

            // 2. Processamento: volume = comprimento * largura * altura
            let volume = comprimento * largura * altura;

            // 3. Saída de Dados
            console.log(`\n${volume} (volume da caixa retangular)`);

            rl.close();
        });
    });
});