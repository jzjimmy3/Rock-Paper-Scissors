
// // function for making a computer play Rock-Paper-Scissors
const btn = document.querySelector('#btn');

let playerGameCounter = 0;
let computerGameCounter = 0;

function computerPlay() {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return 'rock'
    }
    else if (rand === 1) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = "rock";
    computerSelection = computerPlay();
    if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return "You Lose! Scissor beats Paper"
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissor"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return "You Win! Scissor beats Paper"
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return "You Win! Rock beats Scissor"
    }
    else {
        return "Tie!"
    }
}
