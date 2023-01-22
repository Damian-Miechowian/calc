console.log("Witam wszystkich developerów!");

let formElement = document.querySelector(".js-form");
let valueElement = document.querySelector(".js-value");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");


let EUR = 4.6938;
let USD = 4.4127;
let CHF = 4.7438;
let GBP = 5.3085;


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

    
    // w wyniku po wyczyszczeniu bedzie puste pole, ale bylo zalecenie żeby zrobić to poza -submit-

// formElement.addEventListener("reset", () => {
//     event.preventDefault();

//     resultElement.innerText = "";
})

formElement.addEventListener("reset", () => {
        resultElement.innerText = ""; 
})




// w wyniku po wyczyszczeniu będzie 0:
 // formElement.addEventListener("reset", () => {
    //     event.preventDefault();

    //     resultElement.innerText = result * 0;
    // })


