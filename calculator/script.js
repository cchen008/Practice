let numString = "";
let operation = "";
let firstNumber = 0;
let secondNumber = 0;
let display = document.getElementById('display');

const numButtons = (elem) => {
    let num = elem.id;
    if(numString === "" && num === "0"){
        console.log("Error: leading zero");
    }
    else {
        numString += num;
        display.innerHTML = numString;
    }
}

const opButtons = (elem) => {
    if(numString !== ""){
        firstNumber = parseInt(numString);
        numString = "";
        display.innerHTML = 0;
        operation = elem.id
    }
}

const equalButton = () => {
    if(typeof firstNumber === 'number' && operation !== "") {
        secondNumber = parseInt(numString);
        switch(operation) {
            case 'plus':
                display.innerHTML = firstNumber + secondNumber;
                break;
            case 'minus':
                display.innerHTML = firstNumber - secondNumber;
                break;
            case 'times':
                display.innerHTML = firstNumber * secondNumber;
                break;
            case 'divide':
                display.innerHTML = firstNumber / secondNumber;
                break;
            case 'modulo':
                display.innerHTML = firstNumber % secondNumber;
                break;
        }
    }
}

const clearButton = () => {
    numString = "";
    operation = "";
    firstNumber = 0;
    secondNumber = 0;
    display.innerHTML = 0;
}