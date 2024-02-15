function hideElementById(elementId){

    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){

    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets  = alphabetString.split('');


    const randomNumber = Math.random()*25;
    const index =Math.round(randomNumber);

const alphabet = alphabets[index];
return alphabet;

}
function addBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-300');
}





// function getRandomAlphabet(){
//     // creat alphabets array
//     const  alphabetString ='abcdefghijklmnopqrstuvwxyz';
//     const aplhabets = alphabetString.split('');
//     // console.log(aplhabets);
//     // random 
//     const randomNumber  = Math.random()*25;
//     const index = Math.round(randomNumber);


//     const alphabet =aplhabets[index];
//     // console.log(index,alphabet);
//     return alphabet;

// }