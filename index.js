let initialprice = document.getElementById("initialPrice");
let quantity = document.getElementById("Quantity");
let CurrentPrice = document.getElementById("CurrentPrice");
let result = document.getElementById("result");
var buttonClick = document.getElementById("clickButton");

buttonClick.addEventListener("click", perform);


function perform() {


    let finalAmount = CurrentPrice.value * quantity.value - initialprice.value * quantity.value;
    console.log(finalAmount);
    if (finalAmount === 0) {
        result.innerHTML = "No pain no gain and no gain no pain";
    }
    if (finalAmount < 0) {
        ``
    }
}