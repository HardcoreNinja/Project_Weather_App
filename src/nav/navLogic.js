// eslint-disable-next-line import/no-cycle
import { createBirdsEye } from '../birdsEye/birdsEyeContent';
// eslint-disable-next-line import/no-cycle
import { createStats } from '../stats/statsContent';
// eslint-disable-next-line import/no-cycle
import { get5DayForecast } from '../week/weekLogic';
// eslint-disable-next-line import/no-mutable-exports
let latLon = [];
// eslint-disable-next-line import/no-mutable-exports
let metricWeatherObject = {};
// eslint-disable-next-line import/no-mutable-exports
let imperialWeatherObject = {};
// eslint-disable-next-line import/no-mutable-exports
let metricImperialBool = true;

// eslint-disable-next-line import/no-mutable-exports
let dateTimeString = '';

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

    console.log(`${normalizedDate} ${timeArray[1]}`);

    dateTimeString = `${normalizedDate} ${timeArray[1]}`;
  } catch (error) {
    console.log(error);
  }

  get5DayForecast();
}

async function getWeather() {
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
  getDateTime();
}

async function getGeoRegion() {
  try {
    const searchBar = document.querySelector('.searchBar');
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchBar.value}&limit=5&appid=2b45d207be643eaac353397dbb5eccc7`,
      { mode: 'cors' },
    );
    const geoData = await response.json();
    latLon = [geoData[0].lat, geoData[0].lon];
    getWeather();
  } catch (error) {
    console.log(`getGeoRegion() Error: ${error}`);
  }
}

function toggleMetricImperialBool() {
  metricImperialBool = !metricImperialBool;
  const button = document.querySelector('.displayMetricImperial');

  if (metricImperialBool) { button.innerHTML = 'Display °C'; } else {
    button.innerHTML = 'Display °F';
  }
  createBirdsEye();
  createStats();
}

// eslint-disable-next-line import/prefer-default-export
export {
  getGeoRegion,
  toggleMetricImperialBool,
  latLon,
  metricWeatherObject,
  imperialWeatherObject,
  metricImperialBool,
  dateTimeString,
};
