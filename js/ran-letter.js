function randomLetter() {
    let input = document.getElementById("input").value;
    let arr = input.split("");
    let letter = arr[Math.floor(Math.random () * arr.length)];
    let h3 = document.getElementById("answer");
    h3.innerHTML = letter + " ->is a Random letter of your name"   
}