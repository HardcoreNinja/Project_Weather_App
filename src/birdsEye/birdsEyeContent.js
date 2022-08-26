// eslint-disable-next-line import/no-cycle
import {
  getMetricMainWeatherDescription,
  getImperialMainWeatherDescription,
  getMetricName,
  getImperialName,
  getDate,
  getMetricTemp,
  getImperialTemp,
  getMetricWeatherSymbol,
  getImperialWeatherSymbol,
} from './birdsEyeLogic';

// eslint-disable-next-line import/no-cycle
import { metricImperialBool } from '../nav/navLogic';

import { createDiv, createH1, createP } from '../reusableCode/reusableElements';
import { getBirdsEye } from '../reusableCode/reusableGetters';

const createWidget = () => {
  const container = createDiv('birdsEyeWidgetContainer');
  if (metricImperialBool) {
    const mainWeatherDescription = createH1(getMetricMainWeatherDescription(), 'beMainWeatherDescription');
    const name = createP(getMetricName(), 'beName');
    const date = createP(getDate(), 'beDate');
    const temp = createH1(`${getMetricTemp()} °C`, 'beTemp');
    const weatherSymbol = getMetricWeatherSymbol();
    container.append(mainWeatherDescription, name, date, temp, weatherSymbol);
  } else if (!metricImperialBool) {
    const mainWeatherDescription = createH1(getImperialMainWeatherDescription(), 'beMainWeatherDescription');
    const name = createP(getImperialName(), 'beName');
    const date = createP(getDate(), 'beDate');
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
