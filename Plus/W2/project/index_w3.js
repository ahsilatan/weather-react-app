let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let cityName = prompt("Enter a city...");
cityName = cityName.toLowerCase();
if (weather[cityName] !== undefined) {
  let temperature = weather[cityName].temp;
  let humidity = weather[cityName].humidity;
  let cTemp = Math.round(temperature);
  let fTemp = Math.round((temperature * 9) / 5 + 32);
  alert(
    `It is currently ${cTemp} °C (${fTemp} °F) in ${cityName} with a humidity of ${humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to  https://www.google.com/search?q=weather+${cityName}`
  );
}
