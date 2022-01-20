let previousNumber = "";
let currentNumber = "";
let operator = "";
let historyString = "";

const display = document.querySelector("#display-current");
const history = document.querySelector("#display-history");
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
const undoButton = document.querySelector("#button-undo");
undoButton.addEventListener("click", () => undo());
const decimalButton = document.querySelector("#button-decimal");
decimalButton.addEventListener("click", () => addDecimal());
const equalsButton = document.querySelector("#button-equals");
equalsButton.addEventListener("click", () => equals());

function equals() {
    if(operator !== "") {
        let answer = operate(operator, +previousNumber, +currentNumber);
        historyString += currentNumber + " = ";
        currentNumber = answer;
        updateDisplay();        
        updateHistory();
    }
}

function clear() {
    previousNumber = "";
    currentNumber = "";
    operator = "";
    historyString = "";
    updateDisplay();
    updateHistory();
}

function undo() {
    if(currentNumber !== "") {
        currentNumber = currentNumber.slice(0, -1);
        updateDisplay();
    }
}

function addOperator(op) {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
    updateDisplay();
    historyString += previousNumber + " " + operator + " ";
    updateHistory();
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

function updateHistory() {
    history.innerHTML = historyString;
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