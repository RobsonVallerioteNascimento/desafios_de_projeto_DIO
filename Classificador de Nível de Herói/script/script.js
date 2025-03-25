
// Variáveis;
let nomeHeroi = prompt("entre com o nome do Herói: ");
let xp = prompt("Quanto de experiencia" + nomeHeroi + " possui?");
let nivelHeroi = "";
let continua = false;

// Estrutura de repetição;
do {

	if (xp < 0) { // Se a variável xp for menor que 0 o código vai encerrar com essa mensagem;
		alert("XP Inválido!, mude a opção xp para um valor maior ou igual a 0");
        
		//break;
        if (confirm("eseja continuar?")) {
            continua = true;
            nomeHeroi = prompt("entre com o nome do Herói: ");
            xp = prompt("Quanto de experiencia" + nomeHeroi + " possui?");
        } else {
            continua - false;
            xp = -1
            break;
        }
        
	} 

	// Se a variável for maior ou igual a 0 ele ira verificar em qual das opções a variável xp se encaixa;
	if (xp <= 1000) {
		nivelHeroi = "Ferro";

	} else if (xp >= 1001 && xp <= 2000) {
		nivelHeroi = "Bronze";

	} else if (xp >= 2001 && xp <= 6000) {
		nivelHeroi = "Prata";

	} else if (xp >= 6001 && xp <= 7000) {
		nivelHeroi = "Ouro";

	} else if (xp >= 7001 && xp <= 8000) {
		nivelHeroi = "Platina";

	} else if (xp >= 8001 && xp <= 9000) {
		nivelHeroi = "Ascedente";

	} else if (xp >= 9001 && xp <= 10000) {
		nivelHeroi = "Imortal";

	} else {
		nivelHeroi = "Radiante";
	}

	// Mensagem final se a variável xp for maior ou igual a zero, onde a classificação será dada de acordo com a quantidade de xp;
	alert("O Herói de nome " + nomeHeroi + " está no nivel de " + nivelHeroi)
	//break;

    if (confirm("eseja continuar?")) {
        continua = true;
        nomeHeroi = prompt("entre com o nome do Herói: ");
        xp = prompt("Quanto de experiencia" + nomeHeroi + " possui?");
    } else {
        continua - false;
        xp = -1;
        break;
    }

	// Fim da estrutura de repetição:
} while ((xp >= 0) && (continua == true));