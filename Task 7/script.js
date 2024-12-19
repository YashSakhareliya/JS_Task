let randomNumber;
let minNumber;
let maxNumber;
let attempts = 0;

function startGame() {
    // Get the input range
    minNumber = parseInt(document.getElementById('min').value);
    maxNumber = parseInt(document.getElementById('max').value);

    if (isNaN(minNumber) || isNaN(maxNumber) || minNumber >= maxNumber) {
        alert("Please enter a valid range where the minimum is less than the maximum.");
        return;
    }

    // Generate a random number
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    // Reset attempts
    attempts = 0;

    // Hide setup, show game
    document.getElementById('setup').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    document.getElementById('message').textContent = "Make a guess!";
    document.getElementById('feedback').textContent = "";
}

function makeGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);

    if (isNaN(userGuess)) {
        alert("Please enter a valid number.");
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
        document.getElementById('resetButton').style.display = 'block';
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = "📉 Too low. Try again!";
    } else {
        document.getElementById('feedback').textContent = "📈 Too high. Try again!";
    }
}

function resetGame() {
    // Reset UI
    document.getElementById('setup').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';

    // Clear inputs and messages
    document.getElementById('min').value = "";
    document.getElementById('max').value = "";
    document.getElementById('guess').value = "";
    document.getElementById('message').textContent = "";
    document.getElementById('feedback').textContent = "";
}
