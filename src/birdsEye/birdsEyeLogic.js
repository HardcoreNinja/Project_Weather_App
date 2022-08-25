// eslint-disable-next-line import/no-cycle
import { metricWeatherObject, imperialWeatherObject } from '../nav/navLogic';

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
const getMetricWeatherDescription = () => capitalizeFirstLetter(
  metricWeatherObject.weather[0].description,
);
const getImperialWeatherDescription = () => capitalizeFirstLetter(
  imperialWeatherObject.weather[0].description,
);

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
