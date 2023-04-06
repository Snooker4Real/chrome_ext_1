document.addEventListener('DOMContentLoaded', () => {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const API_KEY="tyzYM7YTA4Ictn/mGsB3jQ==SVMbJZskwhBhlP0s"
    const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair="


    convert.addEventListener('click', () => {
        console.log("hi")
        const amountTotal = amount.value;
        console.log('amountTotal:', amountTotal)
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal + '_EUR';
        console.log('url:', url)

        console.log(currencyTotal)
        console.log(amountTotal)

        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                console.log('rate:', rate);
                const resultPrice = amountTotal * rate;
                console.log('resultPrice:', resultPrice)
                result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} EUR` ;
            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = `An error occured please try again later`;
            })
        
    })
})
