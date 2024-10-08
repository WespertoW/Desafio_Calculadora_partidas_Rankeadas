//Calculadora de partidas Rankeadas
/*- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
*/


// Função para encontrar o intervalo com base no balance
function findbalance(balance) {
    if (balance >= 0 && balance <= 10) {
        return "Ferro";
    } else if (balance >= 11 && balance <= 20) {
        return "Bronze";
    } else if (balance >= 21 && balance <= 50) {
        return "Prata";
    } else if (balance >= 51 && balance <= 80) {
        return "Ouro";
    } else if (balance >= 81 && balance <= 90) {
        return "Diamante";
    } else if (balance >= 91 && balance <= 100) {
        return "Lendário";
    } else if (balance >= 101) {
        return "Imortal";
    } 
}

// Função para calcular o balance de vitórias e derrotas
function calcbalance(win, def) {
    return win - def; 
}

// Vitórias e derrotas (numeros inteiros)
let win = 100;
let def = 0;

// Calcula o balance
let balance = calcbalance(win, def);

// Verifica se balance é um número inteiro e faz a verificação correta
if (Number.isInteger(balance)) {
    // Chama a função para encontrar o intervalo
    let name = findbalance(balance);

    // Exibe a mensagem com o balance e o nível do herói
    console.log(`O Herói tem balance de ${balance} (Vitórias: ${win}, Derrotas: ${def}) e está no nível ${name}`);
} else {
    // Exibe mensagem de erro se não for um número inteiro
    console.log("Valor Esperado: win e Def ex: 10, 20");
}
