import { createBirdsEye } from '../birdsEye/birdsEyeContent';

// eslint-disable-next-line import/no-mutable-exports
let metricWeatherObject = {};
// eslint-disable-next-line import/no-mutable-exports
let imperialWeatherObject = {};
// eslint-disable-next-line import/no-mutable-exports
let metricImperialBool = true;

async function getWeather(latLon) {
  try {
    const metricResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const metricWeatherData = await metricResponse.json();
    metricWeatherObject = metricWeatherData;
    console.log(metricWeatherObject);
  } catch (error) {
    console.log(`getWeather() Metric Error: ${error}`);
  }

  try {
    const imperialResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=imperial`,
      { mode: 'cors' },
    );
    const imperialWeatherData = await imperialResponse.json();
    imperialWeatherObject = imperialWeatherData;
    console.log(imperialWeatherObject);
  } catch (error) {
    console.log(`getWeather() Imperial Error: ${error}`);
  }

  createBirdsEye();
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

function callOpenWeather() {
  getGeoRegion();
}

function toggleMetricImperialBool() {
  metricImperialBool = !metricImperialBool;
  const button = document.querySelector('.displayMetricImperial');

  if (metricImperialBool) { button.innerHTML = 'Display °C'; } else {
    button.innerHTML = 'Display °F';
  }

  createBirdsEye();
}

// eslint-disable-next-line import/prefer-default-export
export {
  callOpenWeather,
  toggleMetricImperialBool,
  metricWeatherObject,
  imperialWeatherObject,
  metricImperialBool,
};
