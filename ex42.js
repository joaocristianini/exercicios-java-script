const prompt = require('prompt-sync')();

console.log("--- Quadrados na Faixa de Valores (15 a 200) ---");

// 1. Inicialização
// Criamos uma variável para controlar o laço e outra para o cálculo
let numero;
let quadrado;

// 2. Laço de Iteração e 3. Saída de Dados
// Utilizamos o "for" para percorrer a faixa de 15 até 200
for (numero = 15; numero <= 200; numero++) {
    
    // Calculamos o quadrado do número atual
    quadrado = numero * numero;
    
    // Apresentamos o resultado de cada iteração
    console.log(`O quadrado de ${numero} é: ${quadrado}`);
}