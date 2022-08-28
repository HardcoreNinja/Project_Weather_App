/* eslint-disable import/prefer-default-export */
import { createSymbol } from './elements';

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

export { findSymbol };
