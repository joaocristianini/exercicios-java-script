const prompt = require('prompt-sync')();

console.log("--- Conversor de temperatura ---");

let celsius = Number(prompt("Insira a temperatura em graus celsius: "));

let fahrenheit = celsius * 9/5 + 32;

console.log(`temperatura de ${celsius}°C convertida em fahrenheit é: ${fahrenheit}°F`);
