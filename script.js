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
    humidityDiv.innerHTML = data.main.humidity === undefined ? "N/A" : `<span><strong>humidity \(%\): </strong>${data.main.humidity}</span>`;
    windDiv.innerHTML = data.wind.speed === undefined ? "N/A" : `<span><strong>wind speed \(m.s\): </strong>${data.wind.speed}</span>`;
    windGust.innerHTML = data.wind.gust === undefined ? "<span><strong>wind gust \(m.s\): </strong>N/A</span>" : `<span><strong>wind gust: </strong>${data.wind.gust}</span>`;
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

// Version améliorée ------------------------------------------------------------------------------------------------------------------------------------------------

/* ===========================================================
   Weather App - JavaScript
   Version améliorée et sécurisée
   ===========================================================

const weatherAPI = "https://weather-proxy.freecodecamp.rocks/api/city/<CITY>";

// --- Sélection des éléments DOM ---
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

/* -----------------------------------------------------------
   Fonction pour récupérer la météo depuis l'API
   ----------------------------------------------------------- 
async function getWeather(city) {
  try {
    const response = await fetch(weatherAPI.replace("<CITY>", city));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur API :", error);
    return null; // Retourne null si fetch échoue
  }
}

/* -----------------------------------------------------------
   Fonction pour afficher la météo dans le DOM
   Utilisation des opérateurs ?. et ?? pour sécurité
   ----------------------------------------------------------- 
async function showWeather(city) {
  try {
    const data = await getWeather(city);

    if (!data || data.error) {
      throw new Error(data?.error || "No data received");
    }

    // --- Localisation ---
    locationTitle.innerText = data.name ?? "N/A";

    // --- Icône météo ---
    weatherIcon.src = data.weather?.[0]?.icon ?? "";
    weatherIcon.alt = data.weather?.[0]?.description ?? "weather icon";

    // --- Données principales ---
    mainTemperature.innerHTML = `<span><strong>t°c: </strong>${data.main?.temp ?? "N/A"}</span>`;
    feelsLike.innerHTML = `<span><strong>t°c feels like: </strong>${data.main?.feels_like ?? "N/A"}</span>`;
    humidityDiv.innerHTML = `<span><strong>humidity: </strong>${data.main?.humidity ?? "N/A"}</span>`;
    windDiv.innerHTML = `<span><strong>wind speed: </strong>${data.wind?.speed ?? "N/A"}</span>`;
    windGust.innerHTML = `<span><strong>wind gust: </strong>${data.wind?.gust ?? "N/A"}</span>`;

    // --- Description météo ---
    weatherMain.innerHTML = `<h2>${data.weather?.[0]?.description ?? "N/A"}</h2>`;

    // --- Affichage du conteneur météo ---
    displayWeatherDiv.style.display = "flex";

  } catch (error) {
    alert("Something went wrong, please try again later");
    console.error("Erreur showWeather :", error);
  }
}

/* -----------------------------------------------------------
   Gestion du clic sur le bouton "Get Weather"
   ----------------------------------------------------------- 
getWeatherBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = selectedCity.value;
  if (city) showWeather(city); // Vérifie qu'une ville est sélectionnée
});

*/
