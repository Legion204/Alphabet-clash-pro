function play() {
    hideElementById('game-start-menu');
    hideElementById('final-score');
    showElementById('playground');
    // reset score and life
    const currentScore = document.getElementById('current-score');
    currentScore.innerText = 0;

    const currentLife = document.getElementById('current-life');
    currentLife.innerText = 5;

    continueGame()
}

function gameOver() {
    hideElementById('playground')
    showElementById('final-score')
    // update finale score

    const currentScore = document.getElementById('current-score').innerText;
    const score = document.getElementById('score');
    score.innerText = currentScore;

    // clear the last selected key
    const currentAlphabetElement = document.getElementById('current-alphabet').innerText;
    removeKeyboardBackground(currentAlphabetElement);

}

function continueGame() {
    const currentAlphabet = getRandomAlphabet()
    const screen = document.getElementById('current-alphabet');
    screen.innerText = currentAlphabet;
    setKeyboardBackground(currentAlphabet);

}


function handelKeyboardButtonPress(event) {
    const pressedKey = event.key
    // scape game
    if(pressedKey === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet').innerText;
    const currentAlphabet = currentAlphabetElement.toLowerCase();

    if (pressedKey === currentAlphabet) {

        // update score
        const currentScore = document.getElementById('current-score');
        const currentScoreText = currentScore.innerText;
        const score = parseInt(currentScoreText);
        let updatedScore = score + 1;
        currentScore.innerText = updatedScore;
        // continue game
        removeKeyboardBackground(currentAlphabet);
        continueGame()
    }
    else {
        // update life line
        const currentLife = document.getElementById('current-life');
        const currentLifeText = currentLife.innerText;
        const life = parseInt(currentLifeText);
        let updatedLife = life - 1;
        currentLife.innerText = updatedLife;
        // game over 
        if (updatedLife < 0) {
            gameOver()
        }
    }
}

document.addEventListener('keyup', handelKeyboardButtonPress);

