
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

guessBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);

function checkGuess() {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "⚠️ Enter a number between 1 and 100";
        return;
    }

    attemptsLeft--;
    attemptsDisplay.textContent = attemptsLeft;

    if (guess === secretNumber) {
        message.textContent = "🥳 Correct! You guessed the number!";
        endGame();
    } else if (attemptsLeft === 0) {
        message.textContent = `💀 Game over! The number was ${secretNumber}`;
        endGame();
    } else if (guess > secretNumber) {
        message.textContent = "📉 Too high!";
    } else {
        message.textContent = "📈 Too low!";
    }

    guessInput.value = "";
}

function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
    restartBtn.disabled = false;
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;

    attemptsDisplay.textContent = attemptsLeft;
    message.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
    restartBtn.disabled = true;
}