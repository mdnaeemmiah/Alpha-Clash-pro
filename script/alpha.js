// function play(){
//     // hide the home screen

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function continueGame(){
    const alphabet  = getRandomAlphabet();
    console.log('your random alphabet',alphabet);
// set randomly 
const currentAlphabet = document.getElementById('current-alphabet');
currentAlphabet.innerText =alphabet;

// 

addBackgroundColorById(alphabet);

}




function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame('');
}