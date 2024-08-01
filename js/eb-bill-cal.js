
function convertUnits() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("result");

    let rate = 0;
    if(input<=50) {
        rate = input * 0.75;
    } 
    else if(input>50 && input<=100) {
        rate = (50 * 0.75) + (input - 50) * 1;
    }
    else if (input>100 && input<=150) {
        rate = (50 * 0.75) + (100 * 1) + (input - 150) * 1.30;
    }
    else if (input>150 && input<=200) {
        rate = (50 * 0.75) + (100 * 1) + (150 * 1.30) + (input - 200) * 1.50;
    }
    result.innerHTML = `The unit is ${input} and your EB bill amount is RS. ${rate} `;
}

