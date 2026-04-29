const prompt = require('prompt-sync')();

console.log("--- Somatório e Média de Dez Valores ---");

// 1. Inicialização do Somatório e Contador
// Iniciamos as variáveis acumuladoras e de controle
let somatorio = 0;
let contador = 0;

// 2. Laço de Iteração
// O laço executa enquanto não atingir 10 entradas
while (contador < 10) {
    
    // Solicitamos o valor numérico real (float)
    let valor = Number(prompt(`Digite o ${contador + 1}º valor: `));
    
    // Adicionamos o valor ao somatório total
    somatorio = somatorio + valor;
    
    // Incrementamos o contador para controlar o laço
    contador++;
}

// 3. Cálculo da Média
// Dividimos o total acumulado pela quantidade de itens (10)
let media = somatorio / 10;

// 4. Saída de Dados
// Apresentamos os resultados finais
console.log("-------------------------------------------");
console.log(`Somatório total: ${somatorio}`);
console.log(`Média dos valores: ${media}`);