console.log("TicTacToe - GAME");

/* GLOBAL DEFINITIONS */
const playOptions = ["Rock", "Paper", "Scissors"];


/* MAIN */
console.log(playOpponentsTurn());




/* FUNCTIONS */

/**
 * play the Opponents Turn
 * randomly Choosen (Rock, Paper, Scisscor)
 * 
 * @returns opponentTurn (Rock, Paper, Scisscor)
 */
function playOpponentsTurn(){
    const randNum =  Math.floor(Math.random() * playOptions.length);
    const opponentTurn = playOptions[randNum].toLocaleUpperCase();
    // console.log(randNum, playOptions[randNum].toLocaleUpperCase());
    return opponentTurn;
}


