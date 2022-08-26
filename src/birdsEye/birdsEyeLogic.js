// eslint-disable-next-line import/no-cycle
import { metricWeatherObject, imperialWeatherObject } from '../nav/navLogic';
import { createDiv, createSymbol } from '../reusableCode/reusableElements';

function capitalizeFirstLetter(string) {
  console.log(string);
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

const getMetricMainWeatherDescription = () => capitalizeFirstLetter(
  metricWeatherObject.weather[0].description,
);
const getImperialMainWeatherDescription = () => capitalizeFirstLetter(
  imperialWeatherObject.weather[0].description,
);

const getMetricName = () => metricWeatherObject.name;
const getImperialName = () => imperialWeatherObject.name;

const getMetricTemp = () => metricWeatherObject.main.temp;
const getImperialTemp = () => imperialWeatherObject.main.temp;

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

const getMetricWeatherSymbol = () => {
  const div = createDiv('weatherSymbol');
  div.append(findSymbol(`${metricWeatherObject.weather[0].icon}`));
  return div;
};
const getImperialWeatherSymbol = () => {
  const div = createDiv('weatherSymbol');
  div.append(findSymbol(`${imperialWeatherObject.weather[0].icon}`));
  return div;
};

export {
  getMetricMainWeatherDescription,
  getImperialMainWeatherDescription,
  getMetricName,
  getImperialName,
  getMetricTemp,
  getImperialTemp,
  getMetricWeatherSymbol,
  getImperialWeatherSymbol,
};
