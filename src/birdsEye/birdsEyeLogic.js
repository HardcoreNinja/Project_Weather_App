import { metricWeatherObject, imperialWeatherObject } from '../nav/navLogic';

const getMetricWeatherDescription = () => metricWeatherObject.weather[0].description;
const getImperialWeatherDescription = () => imperialWeatherObject.weather[0].description;

const getMetricName = () => metricWeatherObject.name;
const getImperialName = () => imperialWeatherObject.name;

const getDate = () => new Date();

const getMetricTemp = () => metricWeatherObject.main.temp;
const getImperialTemp = () => imperialWeatherObject.main.temp;

const getMetricMainWeatherDescription = () => metricWeatherObject.weather[0].main;
const getImperialMainWeatherDescription = () => imperialWeatherObject.weather[0].main;

export {
  getMetricWeatherDescription,
  getImperialWeatherDescription,
  getMetricName,
  getImperialName,
  getDate,
  getMetricTemp,
  getImperialTemp,
  getMetricMainWeatherDescription,
  getImperialMainWeatherDescription,
};
