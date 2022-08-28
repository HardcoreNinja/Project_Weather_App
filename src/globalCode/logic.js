/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { createSymbol } from './elements';
import { createBirdsEye } from '../birdsEye/birdsEyeContent';
import { createStats } from '../stats/statsContent';
import { createWeek } from '../week/weekContent';
import { metricWeatherObject, displayFormatWarning, setFormatWarning } from './api';
import {
  d01,
  n01,
  d02,
  n02,
  d03,
  n03,
  d04,
  n04,
  d09,
  n09,
  d10,
  n10,
  d11,
  n11,
  d13,
  n13,
  d50,
  n50,
} from './media';

const findSymbol = (weatherIconCode) => {
  let symbolName = '';
  switch (weatherIconCode) {
    case '01d':
      symbolName = 'clear_day';
      break;
    case '01n':
      symbolName = 'clear_night';
      break;
    case '02d':
      symbolName = 'partly_cloudy_day';
      break;
    case '02n':
      symbolName = 'partly_cloudy_night';
      break;
    case '03d':
      symbolName = 'cloudy';
      break;
    case '03n':
      symbolName = 'cloudy';
      break;
    case '04d':
      symbolName = 'filter_drama';
      break;
    case '04n':
      symbolName = 'filter_drama';
      break;
    case '09d':
      symbolName = 'rainy';
      break;
    case '09n':
      symbolName = 'rainy';
      break;
    case '10d':
      symbolName = 'rainy';
      break;
    case '10n':
      symbolName = 'rainy';
      break;
    case '11d':
      symbolName = 'thunderstorm';
      break;
    case '11n':
      symbolName = 'thunderstorm';
      break;
    case '13d':
      symbolName = 'ac_unit';
      break;
    case '13n':
      symbolName = 'ac_unit';
      break;
    case '50d':
      symbolName = 'foggy';
      break;
    case '50n':
      symbolName = 'foggy';
      break;
    default:
      console.log('INVALID_SWITCH_ENTRY | getMetricWeatherIcon() | birdsEyeLogic.js');
  }
  return createSymbol(symbolName);
};

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

function hideFormatWarning() {
  if (displayFormatWarning) {
    const formatWarning = document.querySelector('.formatWarning');
    formatWarning.style.display = 'none';
    setFormatWarning(false);
    changeBGImage();
  } else if (!displayFormatWarning) {
    changeBGImage();
  }
}

function capitalizeFirstLetter(string) {
  const position = string.search(' ');
  let tempString = '';
  if (position !== -1) {
    const stringArray = string.split(' ');

    for (let i = 0; i < stringArray.length; i += 1) {
      const text = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
      tempString += `${text} `;
    }
  } else {
    tempString = string.charAt(0).toUpperCase() + string.slice(1);
  }

  return tempString;
}

function draw() {
  createBirdsEye();
  createStats();
  createWeek();
  hideFormatWarning();
}

function redrawStats() {
  createBirdsEye();
  createStats();
  createWeek();
}

export {
  findSymbol, draw, redrawStats, capitalizeFirstLetter,
};
