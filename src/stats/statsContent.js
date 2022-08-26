import { getStats } from '../reusableCode/reusableGetters';
// eslint-disable-next-line import/no-cycle
import {
  getMetricFeelsLike,
  getImperialFeelsLike,
  getMetricHumidity,
  getImperialHumidity,
  getMetricWindSpeed,
  getImperialWindSpeed,
} from './statsLogic';

import {
  createDiv, createH1, createP, createSymbol,
} from '../reusableCode/reusableElements';
// eslint-disable-next-line import/no-cycle
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

const createHumidityContainer = (metricImperial) => {
  const humidityContainer = createDiv('statsItem');
  const humidityText = createDiv('statsText');
  const humidityP = createP('Humidity');
  let humidityH1;
  if (metricImperial) { humidityH1 = createH1(`${getMetricHumidity()} %`); } else if (!metricImperial) { humidityH1 = createH1(`${getImperialHumidity()} %`); }
  humidityText.append(humidityP, humidityH1);
  humidityContainer.append(createSymbol('humidity_mid'), humidityText);
  return humidityContainer;
};

const createWindSpeedContainer = (metricImperial) => {
  const windSpeedContainer = createDiv('statsItem');
  const windSpeedText = createDiv('statsText');
  const windSpeedP = createP('Wind Speed');
  let windSpeedH1;
  if (metricImperial) { windSpeedH1 = createH1(`${getMetricWindSpeed()} km/h`); } else if (!metricImperial) { windSpeedH1 = createH1(`${getImperialWindSpeed()} mph`); }
  windSpeedText.append(windSpeedP, windSpeedH1);
  windSpeedContainer.append(createSymbol('air'), windSpeedText);
  return windSpeedContainer;
};

const createWidget = () => {
  const container = createDiv('birdsEyeWidgetContainer');
  if (metricImperialBool) {
    container.append(
      createFeelsLikeContainer(metricImperialBool),
      createHumidityContainer(metricImperialBool),
      createWindSpeedContainer(metricImperialBool),
    );
  } else if (!metricImperialBool) {
    container.append(
      createFeelsLikeContainer(metricImperialBool),
      createHumidityContainer(metricImperialBool),
      createWindSpeedContainer(metricImperialBool),
    );
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
