const prompt = require('prompt-sync')();

console.log("--- Conversor de temperatura ---");

let fahrenheit = Number(prompt("Insira a temperatura em graus fahrenheit: "));

let celsius = (fahrenheit - 32) * 5/9;

console.log(`temperatura de ${fahrenheit}°F convertida em fahrenheit é: ${celsius}°C`);
