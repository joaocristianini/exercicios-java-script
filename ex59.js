const prompt = require('prompt-sync')();

console.log("--- Divisão Inteira por Subtração ---");

// 1. Entrada de Dados
// Solicitamos os valores ao usuário
let num1 = Number(prompt("Digite o dividendo (número a ser dividido): "));
let num2 = Number(prompt("Digite o divisor (número que divide): "));

// 2. Cálculo da Divisão Inteira
// Inicializamos as variáveis conforme a descrição
let resultado = 0;
let dividendo = num1;
let divisor = num2;

// Verificação para evitar divisão por zero
if (divisor === 0) {
    console.log("Erro: Divisão por zero não é permitida.");
} else {
    // Enquanto o dividendo for maior ou igual ao divisor,
    // retiramos o divisor de dentro do dividendo.
    while (dividendo >= divisor) {
        dividendo = dividendo - divisor;
        resultado = resultado + 1;
    }

    // 3. Saída de Dados
    // O 'resultado' aqui representa o quociente e o 'dividendo' final representa o resto
    console.log("-------------------------------------------");
    console.log(`Resultado da divisão inteira: ${resultado}`);
    console.log(`Resto da divisão: ${dividendo}`);
}