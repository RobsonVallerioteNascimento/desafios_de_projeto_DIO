// Utilizado para entrada de dados
//const input = require('readline-sync');

// Classe
class Heroi {

    ataque = "";

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {

        if (this.tipo === "mago") {
            this.ataque = "magia";

        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada";

        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais";

        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken";
            
        } else {
            this.tipo = `- ${this.tipo} - é um TIPO INVÁLIDO`;
            this.ataque = "ATAQUE INVÁLIDO";
        }

        // Saída -> ataque
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }

}


// Laço de repetição para criar herois de forma infinita, até que o usuário digite 'n' após criação e ataque do herói
do {

    let nome = prompt/*input.question*/('Informe do heroi: ');
    let idade = prompt/*input.questionInt*/('Informe a idade do heroi: ');
    let tipo = prompt/*input.question*/('Informe o tipo heroi [mago, guerreiro, monge ou ninja]: ');

    let heroi = new Heroi(nome, idade, tipo.toLowerCase()); // Atribui os valores inseridos pelo usuário
    heroi.atacar(); // Chama o método


    let sair = prompt('Deseja criar um novo heroi? [s/n] ');

    if(sair.toLowerCase() === 'n')
        break;

} while(true);
