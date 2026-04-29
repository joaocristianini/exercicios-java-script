const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Combinação de Operações (4 Números) ---\n");

// 1. Entrada de Dados
rl.question("Digite o 1º número inteiro: ", (num1) => {
    let a = parseInt(num1);
    
    rl.question("Digite o 2º número inteiro: ", (num2) => {
        let b = parseInt(num2);
        
        rl.question("Digite o 3º número inteiro: ", (num3) => {
            let c = parseInt(num3);
            
            rl.question("Digite o 4º número inteiro: ", (num4) => {
                let d = parseInt(num4);

                // 2. Processamento: Realizando as adições e multiplicações
                
                // Função auxiliar para formatar os sinais matemáticos na adição.
                // Se somarmos um número negativo (ex: 5 + -1), isso transforma na string "5-1", igual ao seu Exemplo 2.
                const formatarAdicao = (x, y) => `${x}+${y}`.replace('+-', '-');

                // Montando as strings de adição
                let adicoes = [
                    `${formatarAdicao(a, b)}=${a + b}`,
                    `${formatarAdicao(a, c)}=${a + c}`,
                    `${formatarAdicao(a, d)}=${a + d}`,
                    `${formatarAdicao(b, c)}=${b + c}`,
                    `${formatarAdicao(b, d)}=${b + d}`,
                    `${formatarAdicao(c, d)}=${c + d}`
                ].join(', ');

                // Montando as strings de multiplicação
                let multiplicacoes = [
                    `${a}x${b}=${a * b}`,
                    `${a}x${c}=${a * c}`,
                    `${a}x${d}=${a * d}`,
                    `${b}x${c}=${b * c}`,
                    `${b}x${d}=${b * d}`,
                    `${c}x${d}=${c * d}`
                ].join(', ');

                // 3. Saída de Dados
                console.log(`\nAdições: ${adicoes}`);
                console.log(`Multiplicações: ${multiplicacoes}`);

                rl.close();
            });
        });
    });
});