import { getStats } from '../reusableCode/reusableGetters';
import {
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
} from './statsLogic';

import {
  createDiv, createH1, createP, createSymbol,
} from '../reusableCode/reusableElements';
import { metricImperialBool } from '../nav/navLogic';

const createFeelsLikeContainer = (metricImperial) => {
  const feelsLikeContainer = createDiv('statsItem');
  const feelsLikeText = createDiv('statsText');
  const feelsLikeP = createP('Feels Like');
  let feelsLikeH1;
  if (metricImperial) { feelsLikeH1 = createH1(`${getMetricFeelsLike()} °C`); } else if (!metricImperial) { feelsLikeH1 = createH1(`${getImperialFeelsLike()} °F`); }
  feelsLikeText.append(feelsLikeP, feelsLikeH1);
  feelsLikeContainer.append(createSymbol('thermostat'), feelsLikeText);
  return feelsLikeContainer;
};
const createWidget = () => {
  const container = createDiv('birdsEyeWidgetContainer');
  if (metricImperialBool) {
    container.append(createFeelsLikeContainer(metricImperialBool));
  } else if (!metricImperialBool) {
    container.append(createFeelsLikeContainer(metricImperialBool));
  }

  return container;
};

function clearStats() {
  while (getStats().firstChild) { getStats().removeChild(getStats().firstChild); }
}

function createStats() {
  clearStats();
  getStats().append(createWidget());
}

// eslint-disable-next-line import/prefer-default-export
export { createStats };
