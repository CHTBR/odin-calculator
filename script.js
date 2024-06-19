const buttonContainer = document.getElementById("button-container");
const display = document.getElementById("display");
let firstNumber = "";
let operation = "";
let secondNumber = "";
let result ="";

buttonContainer.addEventListener("click", event =>{
    const target = event.target;
    if (target.tagName === "BUTTON") {
        console.log("recognised as button")
        if (target.classList.item(0) === "number-button") {
            console.log("recognised as number button")
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
            return String(firstNumber + secondNumber);
        case "substract":
            return String(firstNumber - secondNumber);
        case "multiply":
            return String(returnRoundedNumber(firstNumber * secondNumber));
        case "divide":
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