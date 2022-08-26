

function getComputerChoice(){
    let computerSelection;
    n = Math.floor(Math.random()*3)
    if (n==0) computerSelection = "rock";
    else if (n == 1) computerSelection = "paper";
    else computerSelection = "scissors";
    return computerSelection;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock'){
        if (computerSelection == 'paper') return 'You loose: Paper defeats Rock.';
        else if (computerSelection == 'scissors') return 'You win: Rock defeats Scissors.';
        else return 'Draw';
    }

    if (playerSelection == 'paper'){
        if (computerSelection == 'rock') return 'You win: Paper defeats Rock';
        else if (computerSelection == 'scissors') return 'You loose: Scissors defeat Paper';
        else return 'draw';
    }

    else{
        if (computerSelection == 'rock') return 'You loose: Rock defeats Scissors';
        else if (computerSelection == 'paper') return 'You win: Scissors defeats paper';
        else return 'draw';
    }
}

// Declaration of all the targets used in DOM manipulation.
const everyDiv = document.querySelectorAll('.div')
const playerSelection = document.querySelectorAll(".tools img");
const playerScore = document.querySelector(".you .score");
const computerScore = document.querySelector(".computer .score");
const body = document.querySelector("body");
const resultDisplay= document.createElement('div'); 
const allDiv = document.querySelectorAll('div.tools  , div.players ');
//Declaration ends here

const playerEvent = function(e){
    this.setAttribute('id', 'afterhover'); 
} ;

playerSelection.forEach(img => img.addEventListener('mouseenter', playerEvent));

playerSelection.forEach(img => img.addEventListener('mouseleave' , function(e) {
    this.removeAttribute('id');
}));

const displayScore = function(e){
    let result = playRound(this.classList, getComputerChoice());
    if ((Number(playerScore.textContent) < 4) && (Number(computerScore.textContent) < 4)){
        if (result.slice(0,7) == 'You win') {
            playerScore.textContent = Number(playerScore.textContent) + 1;
        } 

        else if (result.slice(0,9) == 'You loose') {
            computerScore.textContent = Number(computerScore.textContent) + 1;
        } 
        resultDisplay.textContent = result;
        resultDisplay.classList.add('resultStyle');
        body.appendChild(resultDisplay);
    }

    else{
        allDiv.forEach(div => body.removeChild(div));  // removes all the elements from page
        body.removeChild(resultDisplay);  // removes newly added resultDisplay element from body
        const verdict = document.createElement('div');
        verdict.classList.add('finalResult'); // adds class finalResult to verdict
        
        if (Number(playerScore.textContent)>Number(computerScore.textContent) ) {
            verdict.textContent = 'You Won the game!';
        }
        else if (Number(playerScore.textContent)<Number(computerScore.textContent)) {
            verdict.textContent = 'You Loose the game!';
        }
        else verdict.textContent = 'Draw';

        const resultContainer = document.createElement('div');
        resultContainer.classList.add('resultDiv');
        resultContainer.appendChild(verdict);

        const playAgain = document.createElement('button');
        playAgain.classList.add('retry');
        playAgain.textContent = 'Play Again';
        playAgain.addEventListener('click', function(e){
            playerScore.textContent = '0';
            computerScore.textContent = '0';
            allDiv.forEach(div => body.appendChild(div));
            body.removeChild(resultContainer);
        });
        resultContainer.appendChild(playAgain);
        body.appendChild(resultContainer);
    }
};

playerSelection.forEach(img => img.addEventListener('click' , displayScore));



