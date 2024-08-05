const numbers = document.getElementById("select");
numbers.addEventListener("click", calculate);


function calculate() {
    const values = numbers.options[numbers.selectedIndex].value;
    // console.log(values);
    let operand1 = Number(document.getElementById("operand-1").value);
    let operand2 = Number(document.getElementById("operand-2").value);
    let addition = "+",substraction = "-",multiplication = "*", division = "/" ;
    switch (values) {
        case "addition" :
            console.log(operand1 + operand2)
            break
        case "substraction":
            console.log(operand1 - operand2)
            break
        case "multiplication" :
            console.log(operand1 * operand2)
            break
        case "division" :
            console.log(operand1 / operand2)
            break

    }
    

}