
addEventListener("click", displayStat)

function displayStat() {
    let dropDown = document.getElementById("select");
    let city = dropDown.options[dropDown.SelectedIndex].value;
    console.log(city);
    let population = 0, language = "", literacyRate = 0;
    let text = `The Indian City of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}.`

    switch (city) {
        case "Bangalore": 
            population: 140080000;
            language: "Kannada";
            literacyrate: 88.69;
            break;
        case "Chennai":
            population: 12053697;
            language: "Tamil"
            literacyrate: 90.23;
            break;
        case "Andra":
            population: 26690000;
            language: "Teleungu"
            literacyrate: 67.02;
            break;
        case "Kerala":
            population: 359567000;
            language: "Malaiyalam"
            literacyrate: 94.00;
            break;
    }
}

