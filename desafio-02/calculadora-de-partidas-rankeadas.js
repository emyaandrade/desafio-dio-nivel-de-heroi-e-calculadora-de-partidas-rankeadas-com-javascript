function calcularNivelRankeadas(totalDeVitorias, totalDeDerrotas){
    const resultadoFinal = totalDeVitorias - totalDeDerrotas;
    let nivelDoJogador;

    if (totalDeVitorias < 10) {
        nivelDoJogador = "Ferro";
    } else if (totalDeVitorias > 10 && totalDeVitorias <= 20) {
        nivelDoJogador = "Bronze";
    }
}