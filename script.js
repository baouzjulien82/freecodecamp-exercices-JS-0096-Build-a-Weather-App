const weatherData = "https://weather-proxy.freecodecamp.rocks/api/city/<CITY>";

async function getWeather() {
  try {
    const response = await fetch(weatherData);
    const data = await response.json();
  } catch (error) {
  console.log(error);
  }
}
