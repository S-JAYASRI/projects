
let button = document.querySelector("button");
button.addEventListener("click", displayStat);
let div = document.createElement("div");
div.id = "result";
document.querySelector(".main-box").appendChild(div);


function displayStat() {
    const select = document.getElementById("select");
    const city = select.options[select.selectedIndex].value;
    // console.log(city);
    let population = 0, language = "", literacyRate = 0;
    switch (city) {
        case 'Bangalore': 
            population = 140080000
            language = "Kannada"
            literacyRate = 88.69
            break
        case 'Chennai':
            population = 12053697
            language = "Tamil"
            literacyRate = 90.23
            break
        case 'Andra':
            population = 26690000
            language = "Teleungu"
            literacyRate = 67.02
            break
        case 'Kerala':
            population = 359567000
            language = "Malayalam"
            literacyRate = 94.00
            break
    }

    let text = `The Indian City of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}.`
    document.getElementById("result").innerHTML = text;
    
}

