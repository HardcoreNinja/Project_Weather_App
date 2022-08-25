import { metricWeatherObject, imperialWeatherObject } from '../nav/navLogic';

const getMetricDescription = () => metricWeatherObject.weather[0].description;
const getImperialDescription = () => imperialWeatherObject.weather[0].description;

const getMetricName = () => metricWeatherObject.name;
const getImperialName = () => imperialWeatherObject.name;

const getDate = () => new Date();

const getMetricTemp = () => metricWeatherObject.main.temp;
const getImperialTemp = () => imperialWeatherObject.main.temp;

const getMetricMainDescription = () => metricWeatherObject.weather[0].main;
const getImperialMainDescription = () => imperialWeatherObject.weather[0].main;

export {
  getMetricDescription,
  getImperialDescription,
  getMetricName,
  getImperialName,
  getDate,
  getMetricTemp,
  getImperialTemp,
  getMetricMainDescription,
  getImperialMainDescription,
};
