// wait for the dom content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // get references to html elements
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amount = document.getElementById('amount');
    const result = document.getElementById('result');

    // fetch currency codes from a free api (https://free.currconv.com/)
    fetch('https://free.currconv.com/api/v7/currencies?apiKey=729c709f3c3e606e8ca1')
        .then(response => response.json())  // parse the response as json
        .then(data => {
            // extract currency data from the api response
            const currencies = data.results;

            // loop through the currencies and add them as options to the dropdowns
            for (const currency in currencies) {
                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                option1.text = currency;
                option2.text = currency;
                fromCurrency.add(option1);
                toCurrency.add(option2);
            }
        });
});

// function to handle the currency conversion
function convert() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const query = `${from}_${to}`;

    // fetch the conversion rate from the api
    fetch(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=729c709f3c3e606e8ca1`)
        .then(response => response.json())  // parse the response as json
        .then(data => {
            // extract the conversion rate from the api response
            const rate = data[query];

            // calculate the converted amount and display the result
            const convertedAmount = (amount.value * rate).toFixed(2);
            result.innerText = `${amount.value} ${from} is equal to ${convertedAmount} ${to}`;
        })
        .catch(error => {
            // handle errors, such as network issues or api response errors
            console.error('Error:', error);
            result.innerText = 'Conversion failed. Please try again.';
        });
}


