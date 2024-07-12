function convert() {
    const input = document.getElementById("input").value;
    const calCm = input/2.54;
    const result = document.getElementById("result");
    result.innerHTML = calCm.toFixed(2) + " inches";
    }