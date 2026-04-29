const prompt = require('prompt-sync')();

console.log("--- Cálculo de Potência (Base e Expoente) ---");

// 1. Entrada de Dados
// Solicitamos a base e o expoente ao usuário
let base = Number(prompt("Digite o valor da base: "));
let expoente = Number(prompt("Digite o valor do expoente: "));

// 2. Processamento e Inicialização
// Inicializamos a variável potencia com o valor 1 para garantir o neutro da multiplicação
// O laço FOR percorre de 1 até o valor do expoente
let potencia = 1;

for (let i = 1; i <= expoente; i++) {
    // Multiplicamos a variável potencia pela base sucessivamente
    potencia = potencia * base;
}

// 3. Saída de Dados
// Apresentamos o resultado final da operação
console.log(`${base} elevado a ${expoente} = ${potencia}`);