const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Calculadora de Combustível da Viagem ---\n");

// 1. Entrada de Dados
rl.question("Digite a distância percorrida (em km): ", (distanciaInput) => {
    let distancia = parseFloat(distanciaInput);

    rl.question("Digite o consumo do veículo (em km/l): ", (consumoInput) => {
        let consumo = parseFloat(consumoInput);

        // 2. Processamento: litros = distância / consumo
        let litros = distancia / consumo;

        // 3. Saída de Dados
        console.log(`\nA quantidade de combustível gasta na viagem é de ${litros} litros.`);

        rl.close();
    });
});