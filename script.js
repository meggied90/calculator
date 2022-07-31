var number = ""
var num1 = null
var num2 = null
var previousNum2 = null
var operation = ""
var answerGiven = false

var clearCounter = 0
function clearNumber() {
    buttonSubmit.repeatFunction = false
    if (number === "" || clearCounter === 1) {
        num1 = null;
        num2 = null;
        clearCounter = 0;
    };
    number = "";
    clearCounter++;
    document.getElementById("display").innerHTML = 0;
}

function writeNumber(event) {
    buttonSubmit.repeatFunction = false
    if (answerGiven) {
        num1 = null;
        num2 = null
        number = "";
        answerGiven = false;
    }
    if (number.length < 16) {
        number = number + event.currentTarget.param;
    }
    document.getElementById("display").innerHTML = number;
};

function operate(num1, num2) {
    if (operation === "add") {
        answer = num1 + num2;
    }
    else if (operation === "subtract") {
        answer = num1 - num2;
    }
    else if (operation === "multiply") {
        answer = num1 * num2;
    }
    else if (operation === "divide") {
        if (num2 = 0) {
            answer = "That's illegal!"
        } else {
        answer = num1 / num2;
        }
    } else {
        answer = num1;
    }
    return answer;
}

function addOperator(event) {
    buttonSubmit.repeatFunction = false
    submitForCalculation()
    operation = event.currentTarget.param
}

function submitForCalculation() {
        if (num1 !== null) {
        if (buttonSubmit.repeatFunction) {
            num2 = previousNum2;
        } else {
            num2 = Number(number);
        }
        let answer = validateAnswerLength(operate(num1, num2));
        document.getElementById("display").innerHTML = answer;
        num1 = answer;
        number = "";
        previousNum2 = num2;
        num2 = null;
        answerGiven = true;
    } else {
        num1 = Number(number);
        number = "";
    }
}

function validateAnswerLength(answer) {
    if (answer.length > 16) {
        indexDec = answer.indexOf('.')
        if (indexDec < 0 || indexDec > 16) {
            return "ERR: answer too large"
        } else {
            roundLength = 15 - indexDec
            answer = parseFloat(answer).toFixed(roundLength)
            return answer
        }
    } else {
        return answer
    }
}

var buttonOne = document.getElementById('1')
buttonOne.addEventListener('click', writeNumber, false)
buttonOne.param = '1'

var buttonTwo = document.getElementById("2")
buttonTwo.addEventListener('click', writeNumber, false)
buttonTwo.param = '2'

var buttonThree = document.getElementById("3")
buttonThree.addEventListener('click', writeNumber, false)
buttonThree.param = '3'

var buttonFour = document.getElementById("4")
buttonFour.addEventListener('click', writeNumber, false)
buttonFour.param = '4'

var buttonFive = document.getElementById("5")
buttonFive.addEventListener('click', writeNumber, false)
buttonFive.param = '5'

var buttonSix = document.getElementById("6")
buttonSix.addEventListener('click', writeNumber, false)
buttonSix.param = '6'

var buttonSeven = document.getElementById("7")
buttonSeven.addEventListener('click', writeNumber, false)
buttonSeven.param = '7'

var buttonEight = document.getElementById("8")
buttonEight.addEventListener('click', writeNumber, false)
buttonEight.param = '8'

var buttonNine = document.getElementById("9")
buttonNine.addEventListener('click', writeNumber, false)
buttonNine.param = '9'

var buttonZero = document.getElementById("0")
buttonZero.addEventListener('click', writeNumber, false)
buttonZero.param = '0'

var buttonClear = document.getElementById("clear")
buttonClear.addEventListener('click', clearNumber)

var buttonAdd = document.getElementById("add")
buttonAdd.addEventListener('click', (e) => {
    addOperator(e);
    toggleAnswerGiven();
}, false)
buttonAdd.param = "add"

var buttonSubtract = document.getElementById("subtract")
buttonSubtract.addEventListener('click', (e) => {
    addOperator(e);
    toggleAnswerGiven();
}, false)
buttonSubtract.param = "subtract"

var buttonMultiply = document.getElementById("multiply")
buttonMultiply.addEventListener('click', (e) => {
    addOperator(e);
    toggleAnswerGiven();;
}, false)
buttonMultiply.param = "multiply"

var buttonDivide = document.getElementById("divide")
buttonDivide.addEventListener('click', (e) => {
    addOperator(e);
    toggleAnswerGiven();
}, false)
buttonDivide.param = "divide"

function toggleAnswerGiven() {
    answerGiven = false
}

var buttonSubmit = document.getElementById("enter")
buttonSubmit.addEventListener('click',  () => {
    submitForCalculation();
    hitSubmit();
}, false)

function hitSubmit() {
    buttonSubmit.repeatFunction = true
}

var buttonDecimal = document.getElementById("decimal")
buttonDecimal.addEventListener('click', writeNumber, false)
buttonDecimal.param = '.'