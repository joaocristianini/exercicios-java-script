const prompt = require('prompt-sync')();

console.log("--- Resolução de Equação do 2º Grau ---");

// 1. Entrada de Dados
// Usamos o Number para permitir valores inteiros ou decimais nos coeficientes
let a = Number(prompt("Digite o valor de A: "));
let b = Number(prompt("Digite o valor de B: "));
let c = Number(prompt("Digite o valor de C: "));

// 2. Processamento
// Calculamos primeiro o discriminante (delta)
// A fórmula matemática é: $$ \Delta = b^2 - 4ac $$
let delta = (b * b) - (4 * a * c);
let resultado;

if (delta < 0) {
    resultado = "A equação não possui raízes reais.";
} else {
    // Calculamos as duas raízes usando a fórmula de Bhaskara:
    // $$ x = \frac{-b \pm \sqrt{\Delta}}{2a} $$
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    resultado = `x1 = ${x1}, x2 = ${x2}`;
}

// 3. Saída de Dados
console.log(`Resultado: ${resultado}`);