/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let playerOneCurrentScore = document.getElementById('current-0'); 
let playerOneGlobalScore = document.getElementById('score-0');
let playerOneName = document.getElementById('name-0');

let playerTwoCurrentScore = document.getElementById('current-1');
let playerTwoGlobalScore = document.getElementById('score-1');
let playerTwoName = document.getElementById('name-1');

let newGameButton = document.getElementById('new-game');
let rollDiceButton = document.getElementById('roll-game');
let holdButton = document.getElementById('hold-game');

 let diceImage6 = document.getElementById('dice6');
 let diceImage5 = document.getElementById('dice5');
 let diceImage4 = document.getElementById('dice4');
 let diceImage3 = document.getElementById('dice3');
 let diceImage2 = document.getElementById('dice2');
 let diceImage1 = document.getElementById('dice1');




newGameButton.addEventListener('click', newGame);
rollDiceButton.addEventListener('click', randomizeDiceImage);
holdButton.addEventListener('click', updateGlobalScore);



function newGame(){
    playerOneCurrentScore.textContent = 0;
    playerOneGlobalScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;
    playerTwoGlobalScore.textContent = 0;
    diceImage6.style.visibility = 'hidden';
    diceImage5.style.visibility = 'hidden';
    diceImage4.style.visibility = 'hidden';
    diceImage3.style.visibility = 'hidden';
    diceImage2.style.visibility = 'hidden';
    diceImage1.style.visibility = 'hidden';
}

let randomnum;
let currentScoreArray = [];

function randomizeDiceImage() {
   newGame();
    randomnum = randomize();
    switch(randomnum) {
        case 1:
            diceImage1.style.visibility = 'visible';  
            console.log(playerOneCurrentScore.textContent);
            playerOneCurrentScore.textContent = 0;
            break;
        case 2:
            diceImage2.style.visibility = 'visible';   
            break;
        case 3:
            diceImage3.style.visibility = 'visible';   
            break;
        case 4:
            diceImage4.style.visibility = 'visible';  
            break;
        case 5:
            diceImage5.style.visibility = 'visible';   
            break;
        default:
            diceImage6.style.visibility = 'visible';   
            break;       
    }
    calculateCurrentScore();
}

function randomize(){
    return Math.floor(Math.random() * 6) + 1 ;
}

let reducedScore;

function calculateCurrentScore() {
    playerOneCurrentScore.textContent = randomnum;
    currentScoreArray.push(playerOneCurrentScore.textContent);
    reducedScore = currentScoreArray.reduce((acc, score) => {
        return acc + parseInt(score);
        
    }, 0);
    playerOneCurrentScore.textContent = reducedScore;    
}

function updateGlobalScore() {
    newGame();
    playerOneGlobalScore.textContent = reducedScore;
     

}
