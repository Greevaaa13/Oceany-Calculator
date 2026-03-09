function calculate() {
    let display=document.getElementById("display")
    try {
        let result=eval(display.value)
        display.value=result
    } catch (error) {
        alert("Invalid expression")
    }
}

function inputNumber(num){
    let display=document.getElementById("display")
    display.value+=num
}
function inputOperator(operator){
    let display=document.getElementById("display")
    display.value+=operator
}

function clearDisplay(){
    let display=document.getElementById("display")
    display.value=""
}