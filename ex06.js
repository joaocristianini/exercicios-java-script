const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Troca de Valores entre Variáveis ---\n");

// 1. Entrada de Dados
rl.question("Digite o valor para a variável A: ", (inputA) => {
    // Como não faremos operações matemáticas, podemos manter o valor como texto (String)
    // ou converter para número. Aqui, vamos manter direto o que o usuário digitou.
    let A = inputA;

    rl.question("Digite o valor para a variável B: ", (inputB) => {
        let B = inputB;

        // Guardamos o texto de como as variáveis estavam antes da troca
        let estadoAntes = `Antes da troca - A = ${A}, B = ${B}`;

        // 2. Processamento: Efetuar a troca usando a variável temporária (temp)
        let temp = A;
        A = B;
        B = temp;

        // 3. Saída de Dados
        console.log(`\n${estadoAntes}; Após a troca - A = ${A}, B = ${B}`);

        rl.close();
    });
});