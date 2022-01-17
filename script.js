let previousNumber = "";
let currentNumber = "";
let operator = "";

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        addDigit(numberButton.value);
        updateDisplay();
    })
});

function addDigit(digit) {
    currentNumber += digit;
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