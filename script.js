let previousNumber = "";
let currentNumber = "0";
let operator = "";

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        addDigit(numberButton.value);
        updateDisplay();
    })
});
const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        addOperator(operatorButton.value);
    })
})
const clearButton = document.querySelector("#button-clear");
clearButton.addEventListener("click", () => clear());
const decimalButton = document.querySelector("#button-decimal");
decimalButton.addEventListener("click", () => addDecimal());

function clear() {
    previousNumber = "";
    currentNumber = "0";
    operator = "";
    updateDisplay();
}

function addOperator(op) {
    previousNumber = currentNumber;
    currentNumber = "0";
    operator = op;
    updateDisplay();
}

function addDecimal() {
    if(!haveDecimal(currentNumber)) {
        currentNumber += ".";
    }
}

function addDigit(digit) {
    if(currentNumber === "0") {
        currentNumber = digit;
    } else {
        currentNumber += digit;
    }    
}

function haveDecimal(number) {
    if (number.includes(".")) return true;
    else return false;
}

function updateDisplay() {
    display.innerHTML = currentNumber;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch(op) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }
}