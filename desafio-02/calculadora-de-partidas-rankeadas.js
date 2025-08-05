import chalk from 'chalk';

function calcularNivelRankeadas(totalDeVitorias, totalDeDerrotas){
    const resultadoFinal = totalDeVitorias - totalDeDerrotas;
    let nivelDoJogador;

    if (resultadoFinal <= 10) {
        nivelDoJogador = "Ferro 🏅";
    } else if (resultadoFinal >= 11 && resultadoFinal <= 20) {
        nivelDoJogador = "Bronze 🥉";
    } else if (resultadoFinal >= 21 && resultadoFinal <= 50) {
        nivelDoJogador = "Prata 🥈";
    } else if (resultadoFinal >= 51 && resultadoFinal <= 80) {
        nivelDoJogador = "Ouro ";
    } else if (resultadoFinal >= 81 && resultadoFinal <= 90) {
        nivelDoJogador = "Diamante 💎";
    } else if (resultadoFinal >= 91 && resultadoFinal <= 100) {
        nivelDoJogador = "Lendário🔥";
    } else {
        nivelDoJogador = "Imortal ✨";
    }

    return chalk.bgCyan.italic(`O Herói tem de saldo de ${resultadoFinal} está no nível: ${nivelDoJogador}\n`);
}

console.log(calcularNivelRankeadas(100, 90));
console.log(calcularNivelRankeadas(50, 20));
