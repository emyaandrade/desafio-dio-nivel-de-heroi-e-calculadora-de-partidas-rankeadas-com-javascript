import chalk from 'chalk';

class jogo{
    constructor(heroName, heroAge, hero){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.hero = hero;
    }

    atacar(){
        let ataque;

        if (this.hero === "mago"){
            ataque = "magia "
        } else if (this.hero === "guerreiro") {
            ataque = "espada"
        } else if (this.hero === "monge"){
            ataque = "artes marciais"
        } else if (this.hero === "ninja"){
            ataque = "shuriken"
        } else {
            ataque = "ataque desdonhecido"
        }

        console.log(chalk.bgCyan.italic(`O ${this.hero} atacou usando ${ataque}\n`));
    }
}

//testes
let teste01 = new jogo ("Luna", 278, "mago");
teste01.atacar()

let teste02 = new jogo ("Angela", 65, "guerreiro");
teste02.atacar()

