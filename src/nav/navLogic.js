async function getWeather(latLon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(`getWeather() Error: ${error}`);
  }
}

async function getGeoRegion() {
  try {
    const searchBar = document.querySelector('.searchBar');
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=2b45d207be643eaac353397dbb5eccc7`,
      { mode: 'cors' },
    );
    const geoData = await response.json();
    const latLon = [geoData[0].lat, geoData[0].lon];
    getWeather(latLon);
  } catch (error) {
    console.log(`getGeoRegion() Error: ${error}`);
  }
}

export function callOpenWeather() {
  getGeoRegion();
}
