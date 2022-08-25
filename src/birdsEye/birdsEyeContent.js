// eslint-disable-next-line import/no-cycle
import {
  getMetricWeatherDescription,
  getImperialWeatherDescription,
  getMetricName,
  getImperialName,
  getDate,
  getMetricTemp,
  getImperialTemp,
  getMetricMainWeatherDescription,
  getImperialMainWeatherDescription,
} from './birdsEyeLogic';

// eslint-disable-next-line import/no-cycle
import { metricImperialBool } from '../nav/navLogic';

import { createDiv, createH1, createP } from '../reusableCode/reusableElements';
import { getBirdsEye } from '../reusableCode/reusableGetters';

const createWidget = () => {
  const container = createDiv('birdsEyeWidgetContainer');
  if (metricImperialBool) {
    const weatherDescription = createH1(getMetricWeatherDescription(), 'beWeatherDescription');
    const name = createP(getMetricName(), 'beName');
    const date = createP(getDate(), 'beDate');
    const temp = createH1(getMetricTemp(), 'beTemp');
    const mainWeatherDescription = createP(getMetricMainWeatherDescription(), 'beMainWeatherDescription');
    container.append(weatherDescription, name, date, temp, mainWeatherDescription);
  } else if (!metricImperialBool) {
    const weatherDescription = createH1(getImperialWeatherDescription(), 'beWeatherDescription');
    const name = createP(getImperialName(), 'beName');
    const date = createP(getDate(), 'beDate');
    const temp = createH1(getImperialTemp(), 'beTemp');
    const mainWeatherDescription = createP(getImperialMainWeatherDescription(), 'beMainWeatherDescription');
    container.append(weatherDescription, name, date, temp, mainWeatherDescription);
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
