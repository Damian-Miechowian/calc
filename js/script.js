console.log("Witam wszystkich developerów!");

let formElement = document.querySelector(".js-form");
let valueElement = document.querySelector(".js-value");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");


let EUR = 4.7186;
let USD = 4.3246;
let CHF = 4.7118;
let GBP = 5.3648;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = valueElement.value;
    let amount = amountElement.value;


    switch (value) {
        case "EUR":
            result = amount * EUR;
            break;
        case "USD":
            result = amount * USD;
            break;
        case "CHF":
            result = amount * CHF;
            break;
        case "GBP":
            result = amount * GBP;
            break
    }

    resultElement.innerText = result.toFixed(2);

})


formElement.addEventListener("reset", () => {
    resultElement.innerText = "";
})




