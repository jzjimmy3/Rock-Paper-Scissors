
// // function for making a computer play Rock-Paper-Scissors
const userDisplay = document.querySelector('#userDisplay')
const compDisplay = document.querySelector('#compDisplay')
const results = document.querySelector('#results')
let userScore = 0;
let compScore = 0;
let winningScore = 5;
const gameStart = true;


const btnRock = document.querySelector('#btn-rock')
btnRock.addEventListener('click', () => {
    if (gameStart) {
        results.textContent = playOneRound("rock", computerPlay())
        userDisplay.textContent = userScore;
        compDisplay.textContent = compScore;
    }
    if (userScore === winningScore || compScore === winningScore) {
        gameOver();
        results.textContent = "The End"
    }
})

const btnPaper = document.querySelector('#btn-paper')
btnPaper.addEventListener('click', () => {
    if (gameStart) {
        results.textContent = playOneRound("rock", computerPlay())
        userDisplay.textContent = userScore;
        compDisplay.textContent = compScore;
    }
    if (userScore === winningScore || compScore === winningScore) {
        gameOver()
        results.textContent = "The End"
    }
})
const btnScissor = document.querySelector('#btn-scissor')
btnScissor.addEventListener('click', () => {
    if (gameStart) {
        results.textContent = playOneRound("rock", computerPlay())
        userDisplay.textContent = userScore;
        compDisplay.textContent = compScore;
    }
    if (userScore === winningScore || compScore === winningScore) {
        gameOver()
        results.textContent = "The End"
    }
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userDisplay.textContent = 0;
    compDisplay.textContent = 0;
    document.getElementById('btn-rock').disabled = false;
    document.getElementById('btn-paper').disabled = false;
    document.getElementById('btn-scissor').disabled = false;
})
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

function gameOver() {
    document.getElementById('btn-rock').disabled = true;
    document.getElementById('btn-paper').disabled = true;
    document.getElementById('btn-scissor').disabled = true;
    gameStart = false;
}

function playOneRound(playerSelection, computerSelection) {
    if (playerSelection === 'paper' && computerSelection === 'scissor') {
        compScore += 1;
        return "You Lose! Scissor beats Paper"
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore += 1;
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        compScore += 1;
        return "You Lose! Rock beats Scissor"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        userScore += 1;
        return "You Win! Scissor beats Paper"
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore += 1;
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        userScore += 1;
        return "You Win! Rock beats Scissor"
    }
    else {
        return "Tie!"
    }
}
