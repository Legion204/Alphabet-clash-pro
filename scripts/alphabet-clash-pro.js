function play(){
    hideElementById('game-start-menu');
    showElementById('playground')
    continueGame()
    
}

function continueGame(){
    const alphabet= getRandomAlphabet()
    const screen= document.getElementById('current-alphabet');
    screen.innerText=alphabet;

    setKeyboardBackground(alphabet);

}

