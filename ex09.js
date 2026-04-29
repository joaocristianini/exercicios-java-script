// 1. Entrada de Dados (Simulada via parâmetro da função)
function calcularQuadrado(num) {
    
    // 2. Processamento: multiplicando o número por ele mesmo
    let quadrado = num * num; 
    
    // 3. Saída de Dados
    console.log(`ENTRADA: ${num}`);
    console.log(`SAÍDA: ${quadrado} (${num} elevado ao quadrado)`);
    console.log("-----------------------");
}

// Testando os exemplos do exercício
calcularQuadrado(5);
calcularQuadrado(-3);
calcularQuadrado(0);