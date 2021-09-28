let initialprice = document.getElementById("initialPrice");
let quantity = document.getElementById("Quantity");
let CurrentPrice = document.getElementById("CurrentPrice");
let result = document.getElementById("result");
var buttonClick = document.getElementById("clickButton");
var backgroundC = document.getElementById("container");

buttonClick.addEventListener("click", perform);

function perform() {
    // let quantityValue = Number(quantity.value);
    let initialValue = Number(initialprice.value);
    let currentValue = Number(CurrentPrice.value);
    let quantityValue = Number(quantity.value);

    if (!initialValue || !currentValue || !quantityValue) {
        alert(
            "inital price or Quantity or current price can't be empty ,zero or negative"
        );
        return;
    }

    if (initialValue < 1 || currentValue < 1 || quantityValue < 1) {
        alert("inputs can't be negative");
        return;
    }

    let finalAmount = currentValue * quantityValue - quantityValue * initialValue;

    console.log(finalAmount);
    if (finalAmount === 0) {
        result.innerHTML = "<h3>No pain no gain and no gain no pain</h3>";
        backgroundC.style.backgroundImage = "url('neutral.gif')";
    }
    if (finalAmount < 0) {
        const lossPer = (finalAmount * 100) / (initialValue * quantityValue);

        result.innerHTML =
            "<h3>Sorry you lost " +
            -1 * finalAmount +
            "rs    " +
            -1 * lossPer.toFixed(2) +
            "% :(</h3>";
        backgroundC.style.backgroundImage = "url('raindrops-raining.gif')";
    }
    if (finalAmount > 0) {
        const profPer = (finalAmount * 100) / (initialValue * quantityValue);

        result.innerHTML =
            "<h3>congrats you gained " +
            finalAmount +
            "rs    " +
            profPer.toFixed(2) +
            "% :)</h3>";
        backgroundC.style.backgroundImage = "url('happy.gif')";
    }
}