//variáveis com informações dos heróis
let nomeHeroi = "Escarlate";
let quantidadeXP = 10.000;
//variável para guardar o nivel do herói
let nivelHeroi;

//Descobrir XP e definir o nível do herói
if (quantidadeXP < 1.000) {
    nivelHeroi = "Ferro";
} else if (quantidadeXP >= 1.001 && quantidadeXP <= 2.000){
    nivelHeroi = "Bronze";
} else if (quantidadeXP >= 2.001 && quantidadeXP <= 5.000){
    nivelHeroi = "Prata";
} else if (quantidadeXP >= 5.001 && quantidadeXP <= 7.000){
    nivelHeroi = "Ouro";
} else if (quantidadeXP >= 7.001 && quantidadeXP <= 8.000){
    nivelHeroi = "Platina";
} else if (quantidadeXP >= 8.001 && quantidadeXP <= 9.000){
    nivelHeroi = "Ascendente";
} else if (quantidadeXP >= 9.001 && quantidadeXP <= 10.000){
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log("O Herói de nome: " +nomeHeroi + "\nEstá no nível: " +nivelHeroi +" com " +quantidadeXP + "xp")

