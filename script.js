const screenCurrent = document.querySelector(".screen-current")
const screenlast = document.querySelector(".screen-last")
const btnnums = document.querySelectorAll(".num")
const btnoperators = document.querySelectorAll(".ops")
const btnequals = document.querySelector(".equals")



let resetscreen = false;
screenCurrent.textContent = "0"
let operator = "";
let firstoperand = "";
let secoperand = "";

btnnums.forEach((btn) => {
    btn.addEventListener("click", () => addNumber(btn.textContent))
})

btnoperators.forEach((btn) => {
    btn.addEventListener("click", () => addoperator(btn.textContent))
})

btnequals.addEventListener("click", () => evaluate())

function addoperator(op) {
    firstoperand = screenCurrent.textContent;
    operator = op;
    screenlast.textContent = `${firstoperand}${operator}`
    resetscreen = true;
}

function addNumber(num) {
    if (screenCurrent.textContent === "0" || resetscreen) {
        screenCurrent.textContent = ""
    }
    screenCurrent.textContent += num;
}

function evaluate() {
    secoperand = screenCurrent.textContent
    screenCurrent.textContent = eval(operator, firstoperand, secoperand)
}


function add(a, b) {
    return a + b;
}

function substrate(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function eval(operator, a, b) {

    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b)
        case "-":
            return substrate(a, b)
        case "*":
            return multiply(a, b)
        case "÷":
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }

}