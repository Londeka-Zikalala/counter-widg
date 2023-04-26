//references for all the elements
const resetButton = document.querySelector('.reset');
const counterDisplay = document.querySelector('.counter');
const multipleInputElem = document.querySelector('.multiple');
const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');

// Initialise the counter and variables
var counter = 0;
var multiples = 1;
//add event listeners 

function decrementBtnFunction(){
    counter -= multiples;
    alert(counterDisplay = counter)
}
function incrementBtnFunction(){
    counter += multiples;
   alert(counterDisplay = counter)
}
function resetBtnFunction(){
 counter = 0;
 alert(counterDisplay = counter)
}

function inputText () {
    multipleInputElem= Number(multipleInputElem.value);
}

decrementBtn.addEventListener('click', decrementBtnFunction);
incrementBtn.addEventListener('click', incrementBtnFunction);
resetButton.addEventListener('click', resetBtnFunction);
multipleInputElem.addEventListener('click', inputText);