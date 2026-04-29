const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Calculadora de Prestação em Atraso ---\n");

// 1. Entrada de Dados
rl.question("Digite o valor original da prestação: ", (valorInput) => {
    let valor_original = parseFloat(valorInput);

    rl.question("Digite o número de meses em atraso: ", (mesesInput) => {
        // Usamos parseInt aqui porque meses geralmente são números inteiros
        let meses_atraso = parseInt(mesesInput);

        rl.question("Digite a taxa de juros mensal (em %): ", (taxaInput) => {
            let taxa_juros = parseFloat(taxaInput);

            // 2. Processamento: valor = valor_original * (1 + (taxa_juros / 100) * meses_atraso)
            let valor = valor_original * (1 + (taxa_juros / 100) * meses_atraso);

            // 3. Saída de Dados
            console.log(`\nO valor da prestação em atraso é de ${valor} reais.`);

            rl.close();
        });
    });
});