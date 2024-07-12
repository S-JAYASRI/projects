function convert() {
    let celcius = document.getElementById("celcius").value;
    let calFaren = celcius * 9/5 + 32;
    let result = document.getElementById("result");
    result.innerHTML = `${calFaren} degree Farenheit `
}