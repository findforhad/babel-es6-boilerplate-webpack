//Importing async with fetch function from another module
import exchangeData from "./module/data";

//Constructing Front End
const serveFrontEnd = async () => {
  const exchangeRates = await exchangeData();

  //Spliting data
  const dateTime = exchangeRates.time.split(" ");
  document.getElementById("date").innerText = `Date: ${dateTime[0]}`;
  document.getElementById("time").innerText = `Time: ${dateTime[1]}`;

  //Using if statement
  if (exchangeRates)
    //Defineing for loop by using Object.Keys
    for (let currency of Object.keys(exchangeRates.rates)) {
      //Creating data structre
      //Using let for defining variable
      let data = exchangeRates.rates[currency];

      let node = document.createElement("tr");

      //Sending API data Using Template Litral
      document
        .querySelector("#mainBody")
        .appendChild(node).innerHTML = `<th>${currency}</th><th>${
        data.rate
      }</th><th>${data.name}</th>`;
    }
};

//Calling the function for rendering FrontEnd
serveFrontEnd();
