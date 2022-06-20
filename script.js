// const variables for calc buttons and display. QuerySelectorAll gets all elements which match the data attribute specified.
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')   
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// TODO - store variable with all of the number buttons on the page
numberButtons.forEach(button => {
    button.addEventListener('click', () => {

    })
  })

// stored variables for operation buttons on the page
operationButtons.forEach(button => {
    button.addEventListener('click', () => {

    })
})
  
// stored variable for equals button on the page
equalsButton.addEventListener('click', button => {

})
  
// stored variable for AC button on the page
allClearButton.addEventListener('click', button => {

})
  
// stored variable for delete button on the page
deleteButton.addEventListener('click', button => {

})

// TODO - create a current display value variable

// TODO - store variable with the display element of the calculator

// TODO - write a function to update the current display value
function updateCurrentDisplayValue() {}

// TODO - write a function handles the click of number button. This should update the current display value with the new number. 
// e.g. when current value is 1 and the number clicked is 2 the new display value will be 12
// This will call the function above
// Update the display element with the new value (still inside of the function) 

function handleNumberButtonClick(e) {
    let x = e.key;
    let buttonChoice
    switch(x){
        case '1':
            buttonChoice = document.querySelector('#one');
            buttonChoice.click();
            break;
        case '2':
            buttonChoice = document.querySelector('#two');
            buttonChoice.click();
            break;
        case '3':
            buttonChoice = document.querySelector('#three');
            buttonChoice.click();
            break;
        case'4':
            buttonChoice = document.querySelector('#four');
            buttonChoice.click();
            break;
        case '5':
            buttonChoice = document.querySelector('#five');
            buttonChoice.click();
            break;
        case '6':
            buttonChoice = document.querySelector('#six');
            buttonChoice.click();
            break;
        case '7':
            buttonChoice = document.querySelector('#seven');
            buttonChoice.click();
            break;
        case '8':
            buttonChoice = document.querySelector('#eight');
            buttonChoice.click();
            break;
        case '9':
            buttonChoice = document.querySelector('#nine');
            buttonChoice.click();
            break;
        case '0':
            buttonChoice = document.querySelector('#zero');
            buttonChoice.click();
            break;
    }
}

// TODO - loop over all of the number buttons and add click event listeners. Pass it the function created in the step above


// operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if(b === 0) {
        console.error(`Don't you dare divide by 0`);
        return null;
    }
    return a/b;
}

// console log testing
// console.log(add(0, 1) === 1);
// console.log(add(2, 2) === 4);
// console.log(add(3, 1) === 4);
// console.log(add(9, 2) === 11);
// console.log(add(88, 14) === 102);

// console.log(subtract(10, 3) === 7);
// console.log(subtract(25, 12) === 13);

// console.log(multiply(6, 7) === 42);
// console.log(multiply(8, 9) === 72);

// console.log(divide(64, 2) === 32);
// console.log(divide(32, 2) === 16);

// console.log(add(1, 2));
// console.log(subtract(99, 24));
// console.log(divide(100, 4));
// console.log(multiply(24, 2));

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }
}

// console.log(operate('+', 1, 5));
// console.log(operate('-', 1, 5));
// console.log(operate('*', 1, 5));
// console.log(operate('/', 1, 5));
console.log(operate('/', 1, 0));
console.log(operate('hello', 1, 0));