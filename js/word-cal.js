function calculateWord() {
    let words = document.getElementById("input").value;
    let calculate = words.split(" ");
    let count = calculate.length;
    console.log(count);
    let result = document.getElementById("result");
    result.innerHTML = count + " Words";

}