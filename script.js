var number = ""
var num1 = null
var num2 = null
var operation = ""
var answerGiven = false

function writeNumber(event) {
    if (answerGiven) {
        num1 = null;
        number = "";
        answerGiven = false;
    }
    number = number + event.currentTarget.param;
    document.getElementById("display").innerHTML = number;
};

function clearNumber() {
    if (number === "" || answerGiven) {
        num1 = null;
        num2 = null;
    };
    number = "";
    document.getElementById("display").innerHTML = 0;
    answerGiven = false
}

function enterNumber(event) {
    num2 = null
    operation = event.currentTarget.param
    num1 = Number(number)
    number = ""
    answerGiven = false
}

var submitNumbers = function submitNumbers() {
    if (answerGiven === false) {
        num2 = Number(number)
    }
    let answer = operate()
    document.getElementById("display").innerHTML = answer
    num1 = answer
    number = String(answer)
    answerGiven = true
}

function operate() {
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
    return answer;
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
buttonAdd.addEventListener('click', enterNumber, false)
buttonAdd.param = "add"

var buttonSubtract = document.getElementById("subtract")
buttonSubtract.addEventListener('click', enterNumber, false)
buttonSubtract.param = "subtract"

var buttonMultiply = document.getElementById("multiply")
buttonMultiply.addEventListener('click', enterNumber, false)
buttonMultiply.param = "multiply"

var buttonDivide = document.getElementById("divide")
buttonDivide.addEventListener('click', enterNumber, false)
buttonDivide.param = "divide"

var buttonSubmit = document.getElementById("enter")
buttonSubmit.addEventListener('click', submitNumbers, false)

var buttonDecimal = document.getElementById("decimal")
buttonDecimal.addEventListener('click', writeNumber, false)
buttonDecimal.param = '.'