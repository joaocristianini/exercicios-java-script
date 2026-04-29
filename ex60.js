const prompt = require('prompt-sync')();

console.log("--- Quadrados de 15 a 200 (Passo 3) ---");

// 1. Inicialização do Número
// Começamos o intervalo em 15
let numero = 15;

// 2. Laço de Iteração
// O laço continua enquanto o número não ultrapassar 200
while (numero <= 200) {
    
    // Calculamos o quadrado do número atual
    let quadrado = numero * numero;
    
    // Exibimos o resultado formatado
    console.log(`O quadrado de ${numero} é: ${quadrado}`);
    
    // Incrementamos o número em 3 unidades para a próxima iteração
    numero = numero + 3;
}

console.log("-------------------------------------------");
console.log("Cálculo finalizado.");