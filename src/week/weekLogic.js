// eslint-disable-next-line import/no-cycle
import { latLon } from '../nav/navLogic';
// eslint-disable-next-line import/no-cycle
import { createBirdsEye } from '../birdsEye/birdsEyeContent';
// eslint-disable-next-line import/no-cycle
import { createStats } from '../stats/statsContent';
// eslint-disable-next-line import/no-cycle
import { createWeek } from './weekContent';

// eslint-disable-next-line import/no-mutable-exports
let metricForecastObject = {};
// eslint-disable-next-line import/no-mutable-exports
let imperialForecastObject = {};

const formatDateTime = (index) => {
  const timeOptions = {
    hour12: 'true',
    timeStyle: 'short',
  };

  const dateOptions = {
    weekday: 'long',
  };

  const date = new Date(metricForecastObject.list[index].dt_txt);
  const normalizedDate = date.toLocaleTimeString(`en-${metricForecastObject.city.country}`, dateOptions);
  const dateArray = normalizedDate.split(' ');
  let normalizedTime = date.toLocaleTimeString(`en-${metricForecastObject.city.country}`, timeOptions);

  if (normalizedTime.charAt(0) === '0' && normalizedTime.charAt(1) === '0') {
    const slicedString = normalizedTime.slice(2, 8);
    normalizedTime = `12${slicedString}`;
  }

  const newString = `${dateArray[0]} ${normalizedTime}`;
  const stringArray = newString.split(' ');
  return stringArray;
};

async function get5DayForecast() {
  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    metricForecastObject = forcastData;
    console.log(metricForecastObject);
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
    console.log(imperialForecastObject);
  } catch (error) {
    console.log(error);
  }

  createBirdsEye();
  createStats();
  createWeek();
}

export {
  formatDateTime,
  get5DayForecast,
  metricForecastObject,
  imperialForecastObject,
};
