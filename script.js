let number = ""
let num1 = null
let num2 = null
let operation = ""

function writeNumber(entry) {
    number = number + entry;
    document.getElementById("display").innerHTML = number;
};

function clearNumber() {
    if (number === "") {
        num1 = null;
        num2 = null;
    };
    number = "";
    document.getElementById("display").innerHTML = 0;
}

function enterNumber() {
    if (num1 === null) {
        num1 = Number(number);
    } else {
        num2 = Number(number);
        operate(num1, num2, operation);
    };
};

function chooseOperation(entry) {
    operation = entry;
    enterNumber();
    number = ""
}

function operate(num1, num2, operation) {
    if (operation === "add") {
        answer = num1 + num2;
    };
    if (operation === "subtract") {
        answer = num1 - num2;
    };
    if (operation === "multiply") {
        answer = num1 * num2;
    };
    if (operation === "divide") {
        answer = num1 / num2;
    };
    document.getElementById("display").innerHTML = answer;
}

