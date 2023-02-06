{
    function welcome() {
        console.log("Witam wszystkich developerów!");
    };


    const calculateResult = (amount, value) => {

        const EUR = 4.7186;
        const USD = 4.3246;
        const CHF = 4.7118;
        const GBP = 5.3648;

        switch (value) {
            case "EUR":
                return amount * EUR;

            case "USD":
                return amount * USD;

            case "CHF":
                return amount * CHF;

            case "GBP":
                return amount * GBP;
        };
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueElement = document.querySelector(".js-value");
        const amountElement = document.querySelector(".js-amount");

        const value = valueElement.value;
        const amount = +amountElement.value;

        const result = calculateResult(amount, value);
        updateResultText(result);
    };


    const init = () => {
        welcome();
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    };

    const onFormReset = () => {
        updateResultText("");
        // resetElement.innerText = "";
    };

    // const clear = () => {
    //     const resetElement = document.querySelector(".js-reset");
    //     resetElement.addEventListener("reset", onFormReset);

    // };

    init();

    // clear();

};




