console.log("TicTacToe - GAME");

/* GLOBAL DEFINITIONS */
const playOptions = ["ROCK", "PAPER", "SCISSCORS"];


/* MAIN */
// const playerSelection = getPlayerSelection();
// const opponentSelection = getOpponentsSelection();
// console.log("Player: " + playerSelection);
// console.log("\tagainst");
// console.log("Computer: " + opponentSelection);
// console.log(playRound(playerSelection, opponentSelection));
const numGames = 5;
let playerWinCounter = 0;
let opponentWinCounter = 0;
game();


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
    console.log("Player: " + playerSelection);
    console.log("\tagainst");
    console.log("Computer: " + opponentSelection);
    if (playerSelection == opponentSelection) {
        return `TIE!\n${playerSelection} against ${opponentSelection}`
    } else if (playerSelection == 'ROCK' && opponentSelection == 'PAPER' ||
        playerSelection == 'SCISSCORS' && opponentSelection == 'ROCK' ||
        playerSelection == 'PAPER' && opponentSelection == 'SCISSCORS'
    ) {
        opponentWinCounter++;
        return `YOU LOSE!\n${playerSelection} looses against ${opponentSelection}`;
    } else {
        playerWinCounter++;
        return `YOU WIN!\n${playerSelection} wins against ${opponentSelection}`;
    }
}


function game() {
    for (let round = 1; round <= numGames; round++) {
        console.log(`Round ${round}/${numGames}!`);
        console.log(playRound(getPlayerSelection(), getOpponentsSelection()));
        console.log(`PLAYER: ${playerWinCounter} \t COMPUTER: ${opponentWinCounter}`);
    }
    if (playerWinCounter > opponentWinCounter)
        console.log("GRATULATION - YOU WON THE GAME!!!");
    else if (playerWinCounter < opponentWinCounter)
        console.log("DAMN - YOU LOST THE GAME!!!");
    else
        console.log("The GAME is TIE!");
}