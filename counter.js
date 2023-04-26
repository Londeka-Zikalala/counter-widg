//references for all the elements
const resetButton = document.querySelector('.reset');
const counterDisplay = document.querySelector('.counter');
const multipleInput = document.querySelector('.multiple');
const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');

// Initialise the counter and variables
var counter = 0;
var multiples = 1;
//add event listeners 
function decrementBtn(){
    counter -= multiples;
}
function incrementBtnFunction(){
    counter += multiples;
}
function resetBtnFunction(){
 counter = 0;
}
