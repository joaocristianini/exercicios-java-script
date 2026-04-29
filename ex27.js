const prompt = require('prompt-sync')();
 console.log("--- Cálculo da Diferença (Maior - Menor) ---");
  // 1. Entrada de Dados  
// Usamos o parseInt porque o exercício pede números inteiros 
let num1 = Number(prompt("Digite o primeiro número inteiro: "));
let num2 = Number(prompt("Digite o segundo número inteiro: ")); 
// 2. Processamento let diferenca;
if (num1 > num2) { diferenca = num1 - num2; 
} else { diferenca = num2 - num1; 
} 
// 3. Saída de Dados 
console.log( `A diferença entre o maior e o menor é: ${diferenca} `);