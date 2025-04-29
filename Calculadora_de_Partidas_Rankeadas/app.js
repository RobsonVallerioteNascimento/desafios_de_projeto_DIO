let rankedBalance;

function winBalanceCalculator() {
    let numberOfVictories = parseInt(prompt("Digite o número de vitórias: "));
    let numberOfDefeats = parseInt(prompt("Digite o número de derrotas: "));
    return rankedBalance = numberOfVictories - numberOfDefeats;
}

function levelCalculator() {
    winBalanceCalculator();
    let rankLevel;

    if(rankedBalance <= 10) {
        rankLevel = "Ferro";
    } else if(rankedBalance >= 11 && rankedBalance <= 20) {
        rankLevel = "Bronze";
    } else if(rankedBalance >= 21 && rankedBalance <= 50) {
        rankLevel = "Prata";
    } else if(rankedBalance >= 51 && rankedBalance <= 80) {
        rankLevel = "Ouro";
    } else if(rankedBalance >= 81 && rankedBalance <= 90) {
        rankLevel = "Diamante";
    } else if(rankedBalance >= 91 && rankedBalance <= 100) {
        rankLevel = "Lendário";
    } else {
        rankLevel = "Imortal";
    }


    console.log(`O Herói tem de saldo de ${rankedBalance} está no nível de ${rankLevel}` );
}

levelCalculator();