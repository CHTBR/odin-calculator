const buttonContainer = document.getElementById("button-container");
const display = document.getElementById("display");
let firstNumber = "";
let operation = "";
let secondNumber = "";
let result ="";

buttonContainer.addEventListener("click", event =>{
    const target = event.target;
    if (target.tagName === "BUTTON") {
        if (target.classList.item(0) === "number-button") {
            if (!operation) {
                if (firstNumber.length < 6) {
                    firstNumber += target.id;
                    updateDisplay(firstNumber);
                }
            } else {
                if (secondNumber.length < 6) {
                    secondNumber += target.id;
                    updateDisplay(secondNumber);
                }
            }
        } else if (target.classList.item(1) === "operation") {
            if (secondNumber) {
                firstNumber = returnEvaluatedExpression(firstNumber, secondNumber, operation);
                operation = target.id;
                secondNumber = "";
            } else if (firstNumber) {
                operation = target.id;
            } else if (result) {
                firstNumber = result;
                operation = target.id;
                secondNumber = "";
            }
            updateDisplay("");
        } else if (target.id === "evaluate") {
            if (firstNumber && secondNumber && operation) {
                result = returnEvaluatedExpression(firstNumber, secondNumber, operation);
                if (result === "Infinity" || result === "-Infinity") {
                    result = "Out of range";
                }
                firstNumber = "";
                secondNumber = "";
                operation = "";
                updateDisplay(result);
            }
        } else if (target.id === "clear") {
            firstNumber = "";
            secondNumber = "";
            operation = "";
            result = "";
            updateDisplay("");
        }
    }
});

function updateDisplay(text) {
    display.textContent = text;
}

function returnEvaluatedExpression(firstNumber, secondNumber, operation) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    switch (operation) {
        case "add":
            return String(returnRoundedNumber(firstNumber + secondNumber));
        case "substract":
            return String(returnRoundedNumber(firstNumber - secondNumber));
        case "multiply":
            return String(returnRoundedNumber(firstNumber * secondNumber));
        case "divide":
            if (secondNumber === 0) {
                return "lol, no";
            }
            return String(returnRoundedNumber(firstNumber / secondNumber));
    }
}

function returnRoundedNumber(number) {
    if (number > 1 || number < -1) {
        return String(number.toPrecision(6));
    } else {
        longNumber = (number).toExponential();
        shortNumber = longNumber.match(/[\d.]{6}/) + longNumber.match(/e-\d+/);
        return shortNumber;
    }
}