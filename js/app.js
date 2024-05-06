const expressionDiv = document.querySelector(".expression")
const currentResult = document.querySelector(".currentResult")

let userWritten = false

// BUTTONS
const buttonAc = document.querySelector("#buttonAc")
const buttonRemove = document.querySelector("#buttonRemove")
const buttonDivision = document.querySelector("#buttonDivision")
const button7 = document.querySelector("#button7")
const button8 = document.querySelector("#button8")
const button9 = document.querySelector("#button9")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")
const button6 = document.querySelector("#button6")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button0 = document.querySelector("#button0")
const buttonDot = document.querySelector("#buttonDot")
const buttonProduct = document.querySelector("#buttonProduct")
const buttonMinus = document.querySelector("#buttonMinus")
const buttonPlus = document.querySelector("#buttonPlus")
const buttonEqual = document.querySelector("#buttonEqual")

const buttonValues = []
buttonValues.push(buttonDivision, button7,button8,button9,button4,button5,button6,button1,button2,button3,button0,buttonDot,buttonProduct,buttonMinus,buttonPlus)

// EVENTS


// BUTTON AC --> Deletes everything >:)
buttonAc.onclick = () => {
    expressionDiv.textContent = ""
    currentResult.textContent = ""
    userWritten = true
}

// BUTTON EQUAL --> Evaluates the expression 

buttonEqual.onclick = () => {
    expressionDiv.textContent = currentResult.textContent
    currentResult.textContent = eval(currentResult.textContent).toFixed(2)
}

// BUTTON ERASER --> Deletes last character of currentResult

buttonRemove.onclick = () => {
    currentResult.textContent = currentResult.textContent.slice(0,-1)
}

// BUTTONS WITH VALUES --> Numbers from 0 to 9 & basic operators

for (let i = 0; i < buttonValues.length; i++) {
    buttonValues[i].onclick = () => {
        if (userWritten) {
            currentResult.textContent += buttonValues[i].value 
        } else {
            currentResult.textContent = ""
            currentResult.textContent += buttonValues[i].value
        }
        userWritten = true
    } 
}


