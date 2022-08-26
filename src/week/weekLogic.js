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

const getDay = (date) => {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const normalizedDate = date.toLocaleString('en-US', options);

  const stringArray = normalizedDate.split(', ');
  return stringArray[0];
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
  getDay,
  get5DayForecast,
  metricForecastObject,
  imperialForecastObject,
};
