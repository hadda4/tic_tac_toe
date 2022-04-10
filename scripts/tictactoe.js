console.log("TicTacToe - GAME");

/* GLOBAL DEFINITIONS */
const playOptions = ["Rock", "Paper", "Scissors"];


/* MAIN */
const playerSelection = getPlayerSelection();
const opponentSelection = getOpponentsSelection();
console.log("Player: " + playerSelection);
console.log("\tagainst");
console.log("Computer: " + opponentSelection);
console.log(playRound(playerSelection, opponentSelection));



/* FUNCTIONS */

/**
 * get a randomly choosen Selection 
 * Rock, Paper or Scisscor
 * for the opponentTurn
 *  
 * @returns String (Rock, Paper, Scisscor) in UPPERCASE
 */
function getOpponentsSelection() {
    const randNum = Math.floor(Math.random() * playOptions.length);
    const opponentTurn = playOptions[randNum].toLocaleUpperCase();
    // console.log(randNum, playOptions[randNum].toLocaleUpperCase());
    return opponentTurn;
}

/**
 * get PlayerSelection
 * Rock, Paper or Scisscor
 * via Prompt
 *  
 * @returns String (Rock, Paper, Scisscor) in UPPERCASE
 */
function getPlayerSelection() {
    return prompt("Choose ROCK, SCISSOR or PAPER", "").toLocaleUpperCase();
}


function playRound(playerSelection, opponentSelection) {
    if (playerSelection == opponentSelection) {
        return `TIE!\n${playerSelection} against ${opponentSelection}`
    } else if (playerSelection == 'ROCK' && opponentSelection == 'PAPER' ||
        playerSelection == 'SCISSCORS' && opponentSelection == 'ROCK' ||
        playerSelection == 'PAPER' && opponentSelection == 'SCISSCORS'
    ) {
        return `YOU LOSE!\n${playerSelection} looses against ${opponentSelection}`
    } else {
        return `YOU WIN!\n${playerSelection} wins against ${opponentSelection}`
    }
}

