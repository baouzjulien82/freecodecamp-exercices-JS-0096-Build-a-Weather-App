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
    locationTitle.innerText = data.name === undefined ? "N/A" : data.name;
    weatherIcon.setAttribute("src", data.weather[0].icon === undefined? "" : data.weather[0].icon);
    mainTemperature.innerHTML = data.main.temp === undefined ? "N/A" : `<span><strong>t°c: </strong>${data.main.temp}</span>`;
    feelsLike.innerHTML = data.main.feels_like === undefined ? "N/A" : `<span><strong>t°c feels like: </strong>${data.main.feels_like}</span>`;
    humidityDiv.innerHTML = data.main.humidity === undefined ? "N/A" : `<span><strong>humidity: </strong>${data.main.humidity}</span>`;
    windDiv.innerHTML = data.wind.speed === undefined ? "N/A" : `<span><strong>wind speed: </strong>${data.wind.speed}</span>`;
    windGust.innerHTML = data.wind.gust === undefined ? "<span><strong>wind gust: </strong>N/A</span>" : `<span><strong>wind gust: </strong>${data.wind.gust}</span>`;
    weatherMain.innerHTML = data.weather[0].description === undefined ? "N/A" : `<h2>${data.weather[0].description}</h2>`; 
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
