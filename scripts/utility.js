function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setKeyboardBackground(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-amber-400')
}
function removeKeyboardBackground(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-amber-400')
}

function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetString.split('');
    
    const randomNum= Math.random()*25;
    const index = Math.round(randomNum);

    const alphabet= alphabets[index];
    return alphabet;
}

