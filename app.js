
// // function for making a computer play Rock-Paper-Scissors
const userDisplay = document.querySelector('#userDisplay')
const compDisplay = document.querySelector('#compDisplay')
const results = document.querySelector('#results')
let userScore = 0;
let compScore = 0;
let winningScore = 0;


const btnRock = document.querySelector('#btn-rock')
btnRock.addEventListener('click', () => {
    results.textContent = playOneRound("rock", computerPlay())
})




const btnPaper = document.querySelector('#btn-paper')
btnPaper.addEventListener('click', () => {
    alert('Paper')
})
const btnScissor = document.querySelector('#btn-scissor')
btnScissor.addEventListener('click', () => {
    alert('Scissor')
})

// userDisplay.textContent = userScore;

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

function playOneRound(playerSelection, computerSelection) {
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
