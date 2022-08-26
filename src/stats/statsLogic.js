// eslint-disable-next-line import/no-cycle
import { metricWeatherObject, imperialWeatherObject } from '../nav/navLogic';

const getMetricFeelsLike = () => metricWeatherObject.main.feels_like;

const getImperialFeelsLike = () => imperialWeatherObject.main.feels_like;

const getMetricHumidity = () => metricWeatherObject.main.humidity;

const getImperialHumidity = () => imperialWeatherObject.main.humidity;

const getMetricPressure = () => metricWeatherObject.main.pressure;

const getImperialPressure = () => imperialWeatherObject.main.pressure;

const getMetricTempMax = () => metricWeatherObject.main.temp_max;

const getImperialTempMax = () => imperialWeatherObject.main.temp_max;

const getMetricTempMin = () => metricWeatherObject.main.temp_min;

const getImperialTempMin = () => imperialWeatherObject.main.temp_min;

const getMetricWindSpeed = () => metricWeatherObject.wind.speed;

const getImperialWindSpeed = () => imperialWeatherObject.wind.speed;

export {
  getMetricFeelsLike,
  getImperialFeelsLike,
  getMetricHumidity,
  getImperialHumidity,
  getMetricPressure,
  getImperialPressure,
  getMetricTempMax,
  getImperialTempMax,
  getMetricTempMin,
  getImperialTempMin,
  getMetricWindSpeed,
  getImperialWindSpeed,
};
