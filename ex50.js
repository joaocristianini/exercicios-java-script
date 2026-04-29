const prompt = require('prompt-sync')();

console.log("--- Sequência de Fibonacci (Até o 15º Termo) ---");

// 1. Inicialização dos Termos
// Definimos os dois primeiros valores da sequência conforme o padrão matemático
let termo1 = 0;
let termo2 = 1;

// Exibimos os dois primeiros termos antes de entrar no laço
console.log(`1º termo: ${termo1}`);
console.log(`2º termo: ${termo2}`);

// 2. Geração dos Termos e 3. Saída de Dados
// Começamos o contador no 3, pois já exibimos os dois primeiros termos
let i = 3;

while (i <= 15) {
    // Cada novo termo é a soma dos dois anteriores
    let proximoTermo = termo1 + termo2;
    
    // Exibimos o termo atual da iteração
    console.log(`${i}º termo: ${proximoTermo}`);
    
    // Atualizamos as variáveis para a próxima rodada (deslocamento)
    termo1 = termo2;
    termo2 = proximoTermo;
    
    // Incrementamos o contador
    i++;
}