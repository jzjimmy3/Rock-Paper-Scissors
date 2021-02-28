
// // function for making a computer play Sword-Shield-Scissors
const userDisplay = document.querySelector('#userDisplay')
const compDisplay = document.querySelector('#compDisplay')
const results = document.querySelector('#results')
let compStorage;
let userScore = 0;
let compScore = 0;
let winningScore = 5;
const gameStart = true;


const btnSword = document.querySelector('#btn-sword')
btnSword.addEventListener('click', () => {
    if (gameStart) {
        results.textContent = playOneRound("sword", computerPlay())
        userDisplay.textContent = userScore;
        compDisplay.textContent = compScore;
        commentate.textContent = "You chose Sword Opponent chose: " + compStorage
    }
    if (userScore === winningScore || compScore === winningScore) {
        gameOver();
        results.textContent = "The End"
    }
})

const btnShield = document.querySelector('#btn-shield')
btnShield.addEventListener('click', () => {
    if (gameStart) {
        results.textContent = playOneRound("shield", computerPlay())
        userDisplay.textContent = userScore;
        compDisplay.textContent = compScore;
        commentate.textContent = "You chose Shield Opponent chose: " + compStorage
    }
    if (userScore === winningScore || compScore === winningScore) {
        gameOver()
        results.textContent = "The End"
    }
})

const btnSpear = document.querySelector('#btn-spear')
btnSpear.addEventListener('click', () => {
    if (gameStart) {
        results.textContent = playOneRound("spear", computerPlay())
        userDisplay.textContent = userScore;
        compDisplay.textContent = compScore;
        commentate.textContent = "You chose Spear Opponent chose: " + compStorage
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
    document.getElementById('btn-sword').disabled = false;
    document.getElementById('btn-shield').disabled = false;
    document.getElementById('btn-spear').disabled = false;
    commentate.textContent = "";
    results.textContent = "";
})
function computerPlay() {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return 'sword'
    }
    else if (rand === 1) {
        return 'shield'
    } else {
        return 'spear'
    }
}

function gameOver() {
    document.getElementById('btn-sword').disabled = true;
    document.getElementById('btn-shield').disabled = true;
    document.getElementById('btn-spear').disabled = true;
    gameStart = false;
}

function playOneRound(playerSelection, computerSelection) {
    if (playerSelection === 'shield' && computerSelection === 'spear') {
        compScore += 1;
        compStorage = "Spear";
        return "You Lose! Spear beats Shield"
    }
    else if (playerSelection === 'shield' && computerSelection === 'sword') {
        userScore += 1;
        compStorage = "Sword";
        return "You Win! Shield beats Sword"
    }
    else if (playerSelection === 'spear' && computerSelection === 'sword') {
        compScore += 1;
        compStorage = "Sword";
        return "You Lose! Sword beats Spear"
    }
    else if (playerSelection === 'spear' && computerSelection === 'shield') {
        userScore += 1;
        compStorage = "Shield";
        return "You Win! Spear beats Shield"
    }
    else if (playerSelection === 'sword' && computerSelection === 'shield') {
        compScore += 1;
        compStorage = "Shield"
        return "You Lose! Shield beats Sword"
    }
    else if (playerSelection === 'sword' && computerSelection === 'spear') {
        userScore += 1;
        compStorage = "Spear"
        return "You Win! Sword beats Spear"
    }
    else {
        compStorage = playerSelection
        return "Tie!"
    }
}
