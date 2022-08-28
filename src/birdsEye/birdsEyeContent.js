/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import {
  getMetricMainWeatherDescription,
  getImperialMainWeatherDescription,
  getMetricName,
  getImperialName,
  getMetricTemp,
  getImperialTemp,
  getMetricWeatherSymbol,
  getImperialWeatherSymbol,
} from './birdsEyeLogic';

import { metricImperialBool } from '../nav/navLogic';
import { dateTimeString } from '../globalCode/api';

import { createDiv, createH1, createP } from '../globalCode/elements';
import { getBirdsEye } from '../globalCode/getters';

const createWidget = () => {
  const container = createDiv('birdsEyeWidgetContainer');
  if (metricImperialBool) {
    const mainWeatherDescription = createH1(getMetricMainWeatherDescription(), 'beMainWeatherDescription');
    const name = createP(getMetricName(), 'beName');
    const date = dateTimeString;
    const temp = createH1(`${getMetricTemp()} °C`, 'beTemp');
    const weatherSymbol = getMetricWeatherSymbol();
    container.append(mainWeatherDescription, name, date, temp, weatherSymbol);
  } else if (!metricImperialBool) {
    const mainWeatherDescription = createH1(getImperialMainWeatherDescription(), 'beMainWeatherDescription');
    const name = createP(getImperialName(), 'beName');
    const date = dateTimeString;
    const temp = createH1(`${getImperialTemp()} °F`, 'beTemp');
    const weatherSymbol = getImperialWeatherSymbol();
    container.append(mainWeatherDescription, name, date, temp, weatherSymbol);
  }

  return container;
};

function clearBirdsEye() {
  while (getBirdsEye().firstChild) { getBirdsEye().removeChild(getBirdsEye().firstChild); }
}

function createBirdsEye() {
  clearBirdsEye();
  getBirdsEye().append(createWidget());
}

// eslint-disable-next-line import/prefer-default-export
export { createBirdsEye };
