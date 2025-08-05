//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(gets());
// Função principal que simula a mineração
function simularMineração(golpes) {
  const minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];
  
  for (let i = 1; i <= golpes; i++) {
    const minaIndex = (i - 1) % minerais.length;
    print(`${i}: ${minerais[minaIndex]}`);
  }
}
// Chamada da função principal
simularMineração(quantidadeGolpes);