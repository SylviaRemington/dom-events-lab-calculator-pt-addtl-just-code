// RE-REVIEWED 4/27/25 

// RE-REVIEWED 5/14/25 -- Also, tweaked calculator so color coded and more fun!

// I had created this repo to just send instructor code without all the notes that were helping me from the other repo
// Just the code so it's cleaner & so I can copy and paste this repo with questions for teaching assistant.

/*------------------------ Cached Element References ------------------------*/

// Cached element references just means saving DOM elements in a variable 
// so you don’t have to look them up again and again.

// #calculator -there is an id of 'calculator'
// .row - there are 4 classes of 'row'
// .button & .number- child of row, there are 2 classes of button and number for 12 values



//I did this section first/ Selecting parts of the calculator
const displayElement = document.querySelector('.display'); //telling the DOM to select the display, where the answers will pop out
console.log(displayElement);//verifying element selection is correct
console.dir(displayElement);

const buttonElements = document.querySelectorAll('.button'); //telling the DOM to find and select the button elements
console.log(buttonElements);
console.dir(buttonElements);

const numberButtonElements = document.querySelectorAll('.number'); //telling the DOM to find and select the buttons with numbers on them
console.log(numberButtonElements);
console.dir(numberButtonElements);

const operatorButtonsElements = document.querySelectorAll('.operator'); 
console.log(operatorButtonsElements);
console.dir(operatorButtonsElements);

const equalsButtonElement = document.querySelector('#equals');
console.log(equalsButtonElement);
console.dir(equalsButtonElement);

const clearButtonElement = document.querySelector('#clear');
console.dir(clearButtonElement);

/*-------------------------------- Constants --------------------------------*/

//Selecting more specific parts of the calculator, individual numbers for specific calculations
const buttonNum7 = document.getElementById('7');
console.log(buttonNum7)
const buttonNum8 = document.getElementById('8');
console.log(buttonNum8)
const buttonNum9 = document.getElementById('9');
console.log(buttonNum9)
const buttonNum4 = document.getElementById('4');
console.log(buttonNum4)
const buttonNum5 = document.getElementById('5');
console.log(buttonNum5)
const buttonNum6 = document.getElementById('6');
console.log(buttonNum6)
const buttonNum1 = document.getElementById('1');
console.log(buttonNum1)
const buttonNum2 = document.getElementById('2');
console.log(buttonNum2)
const buttonNum3 = document.getElementById('3');
console.log(buttonNum3)
const buttonNum0 = document.getElementById('0');
console.log(buttonNum0)

// I did querySelector for display, button, number, operator, equals, and clear above
// in Cached Element References


/*-------------------------------- Variables --------------------------------*/

// Variables are names you use to store information in your code.
// e.g. let score = 100;
//Is this where we are defining the variables?
//Alara, I don't understand why I need this section of variables when we already created
// variables with the "Cached Elements Reference" section? I'm confused.


let number = ''; //let the number be whatever it is
console.log(number);//shows blank in console cause empty string

let operator = '';
console.log(operator); //shows blank in console cause empty string

//I'm guessing with all of these below
//Creating empty strings to start with because before click event, user hasn't typed anything.
let inputNow = ''; //what the user is typing in now (e.g. the number 7)
let operatorChosen = '';//the math symbol they clicked (plus, minus, multiply, divide)
let resultingFinalAnswer= ''; //the final result after calculation performed
let clearingOut = ''; //when clearing the numbers to do a new calculation
// The values are empty strings ('') at the start because the user hasn’t done anything yet.
let history = ''; //show calculation history if a kid is using this for homework
let error = false;

// To perform any type of calculation, we need to know what numbers and which operation to use
// let firstNumber = null// why do some people use null?


/*----------------------------- Event Listeners -----------------------------*/

// Event listeners are ways to make your webpage react to something—like a click, key press, or mouse move.
// Listening for button clicks

// const display = document.querySelector('.display');
// const button7 = document.getElementById('7');

buttonNum7.addEventListener('click', function(){ 
    displayElement.innerText += '7';
})

console.log(buttonNum7);
console.dir(buttonNum7);
//Also, now when I click on the #7 button, it registers 7 in the display! Yay!

numberButtonElements.addEventListener('click', some function {

})


// The initial Event Listeners trys that failed:
// buttonElements.addEventListener('click', function() { 
//     console.log('Button was clicked!');
//   });

//   console.log(buttonElements);   // app.js:134 Uncaught TypeError: 
  // buttonElements.addEventListener is not a function at app.js:134:16
//   console.dir(buttonElements); //same error message as above... googled it and it said
  //

// This below is something I want to do
// buttonElements.addEventListener('click', ()=> number 1 = value of number 1 function and then 
// do a function that adds - add num1 and num2 )




/*-------------------------------- Functions --------------------------------*/

// Functions are blocks of code you can reuse. They do a specific job when you call them.
// e.g. 
// function greet() {
//   console.log('Hello!');
// }
// greet(); 

//Delete this below
// This function takes 2 numbers and an operator, then calculates the total

// Functions/Actions that need to happen so that code and clicks can be read 

