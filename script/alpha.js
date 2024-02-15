// function play(){
//     // hide the home screen

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


function handleKeyboardButtonPress(event){
//     const playerPressed = event.key;
//     console.log('player pressed',playerPressed);
//     const currentAlphabet =document.getElementById('current-alphabet');
//     const targetAlphabet = currentAlphabet.innerText;
//     const expectedAlphabet = targetAlphabet.toLowerCase();
//     console.log(playerPressed,expectedAlphabet);
// // match
// if(playerPressed===expectedAlphabet){
//     console.log('you get a point');
// }
// else{
//     console.log('you missed')
// }
const playerPressed=event.key;
console.log('player pressed',playerPressed);
// stope the game 
if(playerPressed=== 'Escaped'){
    gameOver();
}

const currentAlphabet =document.getElementById('current-alphabet');
const targetAlphabet=currentAlphabet.innerText;
const expectedAlphabet= targetAlphabet.toLowerCase();

// check
if(playerPressed===expectedAlphabet){
    console.log('you got a point');

    const currentScore = getTextElementValueById('current-score');
    console.log(currentScore);
    const updatedScore = currentScore + 1;

    setTextElementValueById('current-score',updatedScore);
// ....................
// update score
// const currentScore=document.getElementById('current-score');
// const currentSoretext=currentScore.innerText;
// const currentRun =parseInt(currentSoretext);
// console.log(currentRun);

// increse the score
// const newScore = currentRun+1;
// // show the update
// currentScore.innerText=newScore;

    // start a new point
    // console.log('you havee pressed correctly',expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you missed the point');

const currentLife =getTextElementValueById('current-life');
const updatedlife= currentLife -1;
setTextElementValueById('current-life',updatedlife);

if(updatedlife===0){
    gameOver();
}


//     // get the current life
//     const currentLife = document.getElementById('current-life');
//     const currentLifeText = currentLife.innerText;
//     const currentvalue=parseInt(currentLifeText);
//     // reduce the life
//    const newlife = currentvalue-1;
// //   display the update
// currentLife.innerText=newlife;

}

}
document.addEventListener('keyup',handleKeyboardButtonPress);



function continueGame(){
    const alphabet  = getRandomAlphabet();
    // console.log('your random alphabet',alphabet);
// set randomly 
const currentAlphabet = document.getElementById('current-alphabet');
currentAlphabet.innerText =alphabet;

// 

addBackgroundColorById(alphabet);

}


function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

// reset score and life
setTextElementValueById('current-life',5);
setTextElementValueById('current-score',0);

    continueGame('');
}

 function gameOver(){
hideElementById('play-ground');
showElementById('final-score');
// update final score
const lastScore =getTextElementValueById('current-score');
console.log(lastScore);
setTextElementValueById('last-score',lastScore);
//clear the last selected alphabet 
const currentAlphabet = getElementTextById('current-alphabet');

removeBackgroundColorById(currentAlphabet);

 }