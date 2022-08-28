/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-cycle
import { metricWeatherObject, imperialWeatherObject } from '../nav/navLogic';
import { createDiv } from '../globalCode/elements';
import { findSymbol } from '../globalCode/logic';

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
  capitalizeFirstLetter,
  getMetricMainWeatherDescription,
  getImperialMainWeatherDescription,
  getMetricName,
  getImperialName,
  getMetricTemp,
  getImperialTemp,
  getMetricWeatherSymbol,
  getImperialWeatherSymbol,
};
