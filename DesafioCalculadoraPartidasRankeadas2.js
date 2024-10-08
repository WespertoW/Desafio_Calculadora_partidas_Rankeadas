// lista de Elos  (Elo, valor mínimo, valor máximo)
let eloListTable = [
    ["Ferro", 0, 10],
    ["Bronze", 11, 20],
    ["Prata", 21, 50],
    ["Ouro", 51, 80],
    ["Diamante", 81, 90],
    ["Lendário", 91, 100],
    ["Imortal", 101]
];

// Função para encontrar o intervalo na tabela eloListTable
function findRangeTable(list, winBalance) {
    for (const [name, levelMin, levelMax] of list) {
        if (levelMin <= winBalance && ( winBalance <= levelMax || levelMax == null)) {
            return name;
        }
    }
    return "Valor Esperado Vitorias e Derrotas ex: 10, 20";
}

// Calcula Valor de vitorias e derrotas para verificar o elo.
let winBalance = 10 - 5;

// Chama a função para encontrar o intervalo
let elo = findRangeTable(eloListTable, winBalance);
//Saida
console.log (`O Herói tem o saldo de ${winBalance} vitorias está no Elo ${elo}`)