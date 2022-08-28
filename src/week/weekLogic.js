/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
import { latLon, metricWeatherObject, displayFormatWaring } from '../nav/navLogic';
import { createBirdsEye } from '../birdsEye/birdsEyeContent';
import { createStats } from '../stats/statsContent';
import { createWeek } from './weekContent';

import d01 from '../resources/images/01d.jpg';
import n01 from '../resources/images/01n.jpg';
import d02 from '../resources/images/02d.jpg';
import n02 from '../resources/images/02n.jpg';
import d03 from '../resources/images/03d.jpg';
import n03 from '../resources/images/03n.jpg';
import d04 from '../resources/images/04d.jpg';
import n04 from '../resources/images/04n.jpg';
import d09 from '../resources/images/09d.jpg';
import n09 from '../resources/images/09n.jpg';
import d10 from '../resources/images/10d.jpg';
import n10 from '../resources/images/10n.jpg';
import d11 from '../resources/images/11d.jpg';
import n11 from '../resources/images/11n.jpg';
import d13 from '../resources/images/13d.jpg';
import n13 from '../resources/images/13n.jpg';
import d50 from '../resources/images/50d.jpg';
import n50 from '../resources/images/50n.jpg';

let metricForecastObject = {};
let imperialForecastObject = {};

function hideFormatWarning() {
  if (displayFormatWaring) {
    const formatWarning = document.querySelector('.formatWarning');
    formatWarning.style.display = 'none';
    displayFormatWaring = false;
  }
}
function changeBGImage() {
  const root = document.documentElement;
  root.style.backgroundImage = `url('${d01}')`;

  switch (`${metricWeatherObject.weather[0].icon}`) {
    case '01d':
      root.style.backgroundImage = `url('${d01}')`;
      break;
    case '01n':
      root.style.backgroundImage = `url('${n01}')`;
      break;
    case '02d':
      root.style.backgroundImage = `url('${d02}')`;
      break;
    case '02n':
      root.style.backgroundImage = `url('${n02}')`;
      break;
    case '03d':
      root.style.backgroundImage = `url('${d03}')`;
      break;
    case '03n':
      root.style.backgroundImage = `url('${n03}')`;
      break;
    case '04d':
      root.style.backgroundImage = `url('${d04}')`;
      break;
    case '04n':
      root.style.backgroundImage = `url('${n04}')`;
      break;
    case '09d':
      root.style.backgroundImage = `url('${d09}')`;
      break;
    case '09n':
      root.style.backgroundImage = `url('${n09}')`;
      break;
    case '10d':
      root.style.backgroundImage = `url('${d10}')`;
      break;
    case '10n':
      root.style.backgroundImage = `url('${n10}')`;
      break;
    case '11d':
      root.style.backgroundImage = `url('${d11}')`;
      break;
    case '11n':
      root.style.backgroundImage = `url('${n11}')`;
      break;
    case '13d':
      root.style.backgroundImage = `url('${d13}')`;
      break;
    case '13n':
      root.style.backgroundImage = `url('${n13}')`;
      break;
    case '50d':
      root.style.backgroundImage = `url('${d50}')`;
      break;
    case '50n':
      root.style.backgroundImage = `url('${n50}')`;
      break;
    default:
      console.log('INVALID_SWITCH_ENTRY | function changeBGImage() | weekLogic.js');
  }
}
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
  changeBGImage();
  createBirdsEye();
  createStats();
  createWeek();
  hideFormatWarning();
}

export {
  formatDateTime,
  get5DayForecast,
  metricForecastObject,
  imperialForecastObject,
};
