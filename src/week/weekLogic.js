// eslint-disable-next-line import/no-cycle
import { latLon } from '../nav/navLogic';
// eslint-disable-next-line import/no-cycle
import { createBirdsEye } from '../birdsEye/birdsEyeContent';
// eslint-disable-next-line import/no-cycle
import { createStats } from '../stats/statsContent';

let metricForecastObject = {};
let imperialForecastObject = {};

async function get5DayForecast() {
  try {
    const forcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon[0]}&lon=${latLon[1]}&appid=2b45d207be643eaac353397dbb5eccc7&units=metric`,
      { mode: 'cors' },
    );
    const forcastData = await forcastResponse.json();
    metricForecastObject = forcastData;
    console.log(metricForecastObject.list[0]);
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
    console.log(imperialForecastObject.list[0]);
  } catch (error) {
    console.log(error);
  }

  createBirdsEye();
  createStats();
}

// eslint-disable-next-line import/prefer-default-export
export { get5DayForecast };
