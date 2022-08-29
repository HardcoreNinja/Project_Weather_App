/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
import { createLoadingScreen } from './elements';
import { draw } from './logic';

let displayFormatWarning = false;
let latLon = [];
let metricWeatherObject = {};
let imperialWeatherObject = {};
let dateTimeString = '';

let metricForecastObject = {};
let imperialForecastObject = {};

function setFormatWarning(bool) {
  displayFormatWarning = bool;
  const formatWarning = document.querySelector('.formatWarning');

  if (displayFormatWarning) {
    formatWarning.style.display = 'block';
  } else {
    formatWarning.style.display = 'none';
  }
}

async function get5DayForecast() {
  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    metricForecastObject = forcastData;
  } catch (error) {
    console.log(error);
  }

  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=imperial`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    imperialForecastObject = forcastData;
  } catch (error) {
    console.log(error);
  }

  draw();
}

async function getDateTime() {
  try {
    const timeResponse = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=ace80fd4a9364396af8761207fa31b31&location=${metricWeatherObject.coord.lat}, ${metricWeatherObject.coord.lon}`, { mode: 'cors' });
    const timeData = await timeResponse.json();
    const date = new Date(timeData.datetime);

    const timeArray = date.toLocaleString(`en-${metricWeatherObject.sys.country}`, { hour12: 'true' }).split(', ');

    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    const normalizedDate = date.toLocaleString(`en-${metricWeatherObject.sys.country}`, options);
    dateTimeString = `${normalizedDate} ${timeArray[1]}`;
  } catch (error) {
    console.log(error);
  }
}

async function getWeather() {
  try {
    const metricResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const metricWeatherData = await metricResponse.json();
    metricWeatherObject = metricWeatherData;
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
  } catch (error) {
    console.log(`getWeather() Imperial Error: ${error}`);
  }
}

async function getGeoRegion() {
  try {
    const searchBar = document.querySelector('.searchBar');
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=2b45d207be643eaac353397dbb5eccc7`,
      { mode: 'cors' },
    );
    const geoData = await response.json();
    latLon = [geoData[0].lat, geoData[0].lon];
    setFormatWarning(false);
  } catch (error) {
    console.log(`getGeoRegion() Error: ${error}`);
    setFormatWarning(true);
  }
}

async function callAPI() {
  const loadingOverlay = createLoadingScreen();
  await getGeoRegion();
  await getWeather();
  await getDateTime();
  await get5DayForecast().finally(loadingOverlay.remove());
}

export {
  callAPI,
  setFormatWarning,
  displayFormatWarning,
  latLon,
  metricWeatherObject,
  imperialWeatherObject,
  dateTimeString,
  metricForecastObject,
  imperialForecastObject,
};
