//Creaeing data fetching arrow function with async and fetch api
const fetchExchangeRatesFromAPI = async () =>
  //Javascript fetch API
  await fetch("https://apiv2.bitcoinaverage.com/constants/exchangerates/local")
    .then(res => res.json())
    .then(data => data);

//Exporting data fetching async function
export default fetchExchangeRatesFromAPI;
