const weatherData = "https://weather-proxy.freecodecamp.rocks/api/city/<CITY>";

const selectedCity = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");

const locationTitle = document.getElementById("location");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");

const feelsLike = document.getElementById("feels-like");
const humidityDiv = document.getElementById("humidity");
const windDiv = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main")

async function getWeather(city) {
  try {
    const response = await fetch(weatherData);
    const data = await response.json();
    return data;
  } catch (error) {
  console.log(error);
  }
}

async function showWeather(city) {
  try {


  } catch (error) {
    alert("Something went wrong, please try again later")
  }
}
