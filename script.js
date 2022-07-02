const screenCurrent = document.querySelector(".screen-current")
const screenlast = document.querySelector(".screen-last")
const btnnums = document.querySelectorAll(".num")
const btnoperators = document.querySelectorAll(".ops")
const btnequals = document.querySelector(".equals")
const btnclear = document.querySelector(".clear")
const btndelete = document.querySelector(".delete")
const btndot = document.querySelector(".dot")



let resetscreen = false;
screenCurrent.textContent = "0"
screenlast.textContent = ""
let operator = null;
let firstoperand = "";
let secoperand = "";


btndot.addEventListener("click", adddot)

btnnums.forEach((btn) => {
    btn.addEventListener("click", () => addNumber(btn.textContent))
})

btnoperators.forEach((btn) => {
    btn.addEventListener("click", () => addoperator(btn.textContent))
})

btnequals.addEventListener("click", () => evaluate())

btnclear.addEventListener("click", clear)

function clear() {
    screenCurrent.textContent = "0";
    screenlast.textContent = "";
    firstoperand = "";
    secoperand = "";
    operator = null
}

function adddot() {
    if (screenCurrent.textContent.includes(".")) { return }
    screenCurrent.textContent += "."

}

function round(number) {
    return Math.round(number * 1000) / 1000
}

function addoperator(op) {
    if (operator !== null) evaluate()
    firstoperand = screenCurrent.textContent;
    operator = op;
    screenlast.textContent = `${firstoperand}${operator}`
    resetscreen = true;
}

function addNumber(num) {
    if (screenCurrent.textContent === "0" || resetscreen) {
        screenCurrent.textContent = ""
        resetscreen = false
    }
    screenCurrent.textContent += num;
}

function evaluate() {
    if (operator === null || resetscreen) return
    if (operator === "÷" && screenCurrent.textContent === "0") {
        alert("Divide by 0 is not possible!")
        return
    }
    secoperand = screenCurrent.textContent
    screenCurrent.textContent = round(operate(operator, firstoperand, secoperand))
    operator = null;
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

function operate(operator, a, b) {

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