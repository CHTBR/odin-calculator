const buttonCOntainer = document.getElementById("button-container");
const display = document.getElementById("display");
let firstNumber = "";
let operation = "";
let secondNumber = "";
let result ="";

buttonCOntainer.addEventListener("click", event =>{
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