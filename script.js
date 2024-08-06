const button = document.querySelector('.convert-button')
const firstSelectCurrency = document.querySelector('.select-currency-to-convert')
const secondSelectCurrency = document.querySelector('.select-currency')

function convertValue(){
    const inputValue = document.querySelector('.input-value').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValue = document.querySelector('.currency-value')

    const taxaDolarReal = 5.2; // Taxa de câmbio do dólar para real
    const taxaEuroReal = 6.2; // Taxa de câmbio do euro para real

    const convertedRealToDolar = inputValue / taxaDolarReal
    const convertedRealToEuro = inputValue / taxaEuroReal

    const convertedDolarToReal = inputValue * taxaDolarReal
    const convertedDolarToEuro = convertedDolarToReal / taxaEuroReal

    const convertedEuroToReal = inputValue * taxaEuroReal
    const convertedEuroToDolar = convertedEuroToReal / taxaDolarReal


    // Se o select de CIMA for Dólar, cair aqui
    if(firstSelectCurrency.value == 'dolar'){
        currencyValueToConvert.innerHTML = currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue)
    }

    // Se o select de CIMA for Euro, cair aqui
    if(firstSelectCurrency.value == 'euro'){
        currencyValueToConvert.innerHTML = currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue)
    }

    // Se o select de CIMA for Real, cair aqui
    if(firstSelectCurrency.value == 'real'){
        currencyValueToConvert.innerHTML = currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValue)
    }


    if(firstSelectCurrency.value == secondSelectCurrency.value){
        if(secondSelectCurrency.value == 'dolar'){
            currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputValue)
        }
    
        // Se o select de BAIXO for Euro, cair aqui
        if(secondSelectCurrency.value == 'euro'){
            currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputValue)
        }
    
        // Se o select de BAIXO for Real, cair aqui
        if(secondSelectCurrency.value == 'real'){
            currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputValue)
        }
    }



    // Se o select de BAIXO for Dólar, cair aqui
    if(firstSelectCurrency.value == 'real' && secondSelectCurrency.value == 'dolar'){
        currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(convertedRealToDolar)
    }

    // Se o select de BAIXO for Euro, cair aqui
    if(firstSelectCurrency.value == 'real' && secondSelectCurrency.value == 'euro'){
        currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(convertedRealToEuro)
    }

    // Se o select de BAIXO for Real, cair aqui
    if(firstSelectCurrency.value == 'dolar' && secondSelectCurrency.value == 'real'){
        currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(convertedDolarToReal)
    }

    if(firstSelectCurrency.value == 'dolar' && secondSelectCurrency.value == 'euro'){
        currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(convertedDolarToEuro)
    }

    if(firstSelectCurrency.value == 'euro' && secondSelectCurrency.value == 'real'){
        currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(convertedEuroToReal)
    }

    if(firstSelectCurrency.value == 'euro' && secondSelectCurrency.value == 'dolar'){
        currencyValue.innerHTML = currencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(convertedEuroToDolar)
    }

}

function changeCurrency(){
    const secondCurrencyName = document.getElementById('second-currency-name')
    const secondCurrencyImage = document.querySelector('.second-image-currency')
    
    if(secondSelectCurrency.value == 'dolar'){
        secondCurrencyName.innerHTML = 'Dólar americano'
        secondCurrencyImage.src = './assets/eua.svg'
    }

    if(secondSelectCurrency.value == 'euro'){
        secondCurrencyName.innerHTML = 'Euro'
        secondCurrencyImage.src = './assets/euro.svg'
    }

    if(secondSelectCurrency.value == 'real'){
        secondCurrencyName.innerHTML = 'Real'
        secondCurrencyImage.src = './assets/brasil.svg'
    }

    convertValue()
    
}

function changeFirstCurrency(){
    const firstCurrencyName = document.getElementById('first-currency-name')
    const firstCurrencyImage = document.querySelector('.first-image-currency')

    if(firstSelectCurrency.value == 'dolar'){
        firstCurrencyName.innerHTML = 'Dólar americano'
        firstCurrencyImage.src = './assets/eua.svg'
    }

    if(firstSelectCurrency.value == 'euro'){
        firstCurrencyName.innerHTML = 'Euro'
        firstCurrencyImage.src = './assets/euro.svg'
    }

    if(firstSelectCurrency.value == 'real'){
        firstCurrencyName.innerHTML = 'Real'
        firstCurrencyImage.src = './assets/brasil.svg'
    }

    convertValue()
}

firstSelectCurrency.addEventListener('change', changeFirstCurrency)
secondSelectCurrency.addEventListener('change', changeCurrency)
button.addEventListener('click', convertValue)