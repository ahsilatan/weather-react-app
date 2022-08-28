let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let currentDate = document.querySelector("#current-data");
currentDate.innerHTML = `${day} ${hour}:${minute}`;
//
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let inputCity = document.querySelector("#input-city");
  city.innerHTML = inputCity.value;
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);
//
function convertToFtemp(event) {
  event.preventDefault();
  let tempElemets = document.querySelector("#temp");
  let temperature = tempElemets.innerHTML;
  tempElemets.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
let fTemperature = document.querySelector("#fTemp");
fTemperature.addEventListener("click", convertToFtemp);
//
function convertToCtemp(event) {
  event.preventDefault();
  let tempElemets = document.querySelector("#temp");
  let temperature = 16;
}
let cTemperature = document.querySelector("#fTemp");
cTemperature.addEventListener("click", convertToCtemp);
//
