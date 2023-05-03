let mainContainer = document.querySelector("#mainContainer");
let exchangeRateUrl = "https://openexchangerates.org/api/latest.json?app_id=c0de237c94ad45e9b9ee4932324e9aa0&base=USD";
let currencyType = document.querySelector("#currencyType");
let currencyTypeTwo = document.querySelector("#currencyTypeTwo");
let inputForm = document.querySelector("#inputForm");
let moneyBox = document.querySelector("moneyBox");
let equalsTo = document.querySelector("#equalsTo");
let convert = document.querySelector("#convert");


fetch(exchangeRateUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json"}
})

.then (function (response){
    return response.json()
})
.then ((data) => {
    console.log(exchangeRateUrl);
    console.log(data)

    // let currencies = Object.keys(data.rates);
    

    }


})

