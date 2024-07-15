function checking() {
    const input = document.getElementById("input").value;
    const oldInput = input.split("").join();
    // console.log(oldInput);
    const newInput = input.split("").reverse().join();
    // console.log(newInput)
    const result = document.getElementById("result");

    if(oldInput == newInput) {
        result.innerHTML = "It is a palindrome word" ;
    } else {
        result.innerHTML = "It is not a palindrome word";
    }

    
}