

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
        if (computerSelection == 'paper') return 'You loose';
        else if (computerSelection == 'scissors') return 'you win';
        else return 'draw';
    }

    if (playerSelection == 'paper'){
        if (computerSelection == 'rock') return 'you win';
        else if (computerSelection == 'scissors') return 'you loose';
        else return 'draw';
    }

    else{
        if (computerSelection == 'rock') return 'you loose';
        else if (computerSelection == 'paper') return 'you win';
        else return 'draw';
    }
}


// function game(){
//     let score;
//     let count = 0;
//     let playerSelection;
//     for(let i =1; i<=5; i++){
//         playerSelection = (prompt("enter yout choice:(rock, paper, scissors)")).trim().toLowerCase()
//         score = playRound(playerSelection, getComputerChoice());
//         if (score == 'you win') {
//             console.log('win');
//             count += 1;
//         }
//         else if (score == 'you loose'){
//             console.log('loose');
//         }
//         else console.log('draw');
//     }
//     (count > 2)? console.log('You win the game'): console.log('you loose the game');
// }

// game()


