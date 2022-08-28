import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleReasponse(response) {
    let temperature = Math.round(response.data.main.temp);
    alert(`The weather in Paris is ${temperature}°C`);
  }
  let apiKey = "f7e96c4687bfb6b134cee7438fc7f3c7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleReasponse);
  return <h4>Hello it is my weather app. You can check the weather here.</h4>;
}
