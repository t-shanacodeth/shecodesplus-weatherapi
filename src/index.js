function displayLocationTemperature(response) {
  let formattedTemperature = Math.round(response.data.temperature.current);
  console.log(formattedTemperature);

  let city = "Sydney";

  let h1 = document.querySelector("h1");
  h1.innerHTML = `The temperature of ${city} is currently ${formattedTemperature}ºC!`;
}

const apiKey = "68b934o4bafcaf00b4452c44bfc46ct3";
const apiUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayLocationTemperature);
