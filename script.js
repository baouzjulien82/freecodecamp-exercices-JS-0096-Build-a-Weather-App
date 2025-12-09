const weatherAPI = "https://weather-proxy.freecodecamp.rocks/api/city/<CITY>";

const selectedCity = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");

const locationTitle = document.getElementById("location");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");

const feelsLike = document.getElementById("feels-like");
const humidityDiv = document.getElementById("humidity");
const windDiv = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const displayWeatherDiv = document.getElementById('display-weather-div');

async function getWeather(city) {
  try {
    const response = await fetch(weatherAPI.replace("<CITY>", city));
    const data = await response.json();
    return data;
  } catch (error) {
  console.log(error);
  }
}

async function showWeather(city) {
  try {
    const data = await getWeather(city);
    console.log(data);
    if (data.error) {
    throw new Error(data.error);
    }
    locationTitle.innerText = data.name;
    weatherIcon.setAttribute("src", data.weather[0].icon);
    mainTemperature.innerText = data.main.temp;
    feelsLike.innerText = data.main.feels_like;
    humidityDiv.innerText = data.main.humidity;
    windDiv.innerText = data.wind.speed;
    windGust.innerText = data.wind.gust;
    weatherMain.innerText = data.weather[0].description; 
    displayWeatherDiv.style.display = "flex";

  } catch (error) {
    alert("Something went wrong, please try again later")
  }
}

getWeatherBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const city = selectedCity.value;
      showWeather(city);
})
