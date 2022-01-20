let previousNumber = "";
let currentNumber = "";
let operator = "";
let historyString = "";

// Calculator Buttons
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

//Keyboard Input
window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "0": addDigit("0"); break;
        case "1": addDigit("1"); break;
        case "2": addDigit("2"); break;
        case "3": addDigit("3"); break;
        case "4": addDigit("4"); break;
        case "5": addDigit("5"); break;
        case "6": addDigit("6"); break;
        case "7": addDigit("7"); break;
        case "8": addDigit("8"); break;
        case "9": addDigit("9"); break;
        case ".": addDecimal(); break;
        case "+": addOperator("+"); break;
        case "-": addOperator("-"); break;
        case "*": addOperator("*"); break;
        case "/": addOperator("/"); break;
        case "Clear": clear(); break;
        case "Enter": equals(); break;
        default: return;
    }
});

//Functions
function equals() {
    if(operator === "/" && currentNumber === "0") {
        alert("Do not divide by zero!");
        return;
    }
    if(operator !== "") {
        let answer = operate(operator, +previousNumber, +currentNumber);
        historyString += currentNumber + " = ";
        currentNumber = +answer.toFixed(4).toString();
        operator = "";
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
        updateDisplay();
    }
}

function addDigit(digit) {
    if(currentNumber === "0") {
        currentNumber = digit;
    } else {
        currentNumber += digit;
    }
    updateDisplay();  
}

function haveDecimal(number) {
    number = number.toString();
    if (number.includes(".")) return true;
    else return false;
}

function updateDisplay() {
    display.innerHTML = currentNumber;
}

function updateHistory() {
    history.innerHTML = historyString;
}

//Math Functions
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