/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import { metricWeatherObject, imperialWeatherObject } from '../globalCode/api';
import { createDiv } from '../globalCode/elements';
import { findSymbol, capitalizeFirstLetter } from '../globalCode/logic';

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
