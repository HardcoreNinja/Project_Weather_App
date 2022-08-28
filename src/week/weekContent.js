/* eslint-disable import/no-cycle */
import {
  formatDateTime, metricForecastObject, imperialForecastObject,
} from './weekLogic';
import { getWeek } from '../globalCode/getters';
import { createDiv, createP, createH1 } from '../globalCode/elements';
import { metricImperialBool } from '../nav/navLogic';
import { findSymbol, capitalizeFirstLetter } from '../globalCode/logic';

const createMetricWeekItems = (weekWidgetContainer) => {
  for (let i = 0; i < metricForecastObject.list.length; i += 1) {
    const weekItemContainer = createDiv('weekItem');
    const timeDateArray = formatDateTime(i);
    const day = createP(`${timeDateArray[0]}`, '');
    const time = createP(`${timeDateArray[1]} ${timeDateArray[2]}`, '');
    const temp = createH1(`${metricForecastObject.list[i].main.temp} °C`, '');
    const description = createP(
      capitalizeFirstLetter(
        metricForecastObject.list[i].weather[0].description,
      ),
    );
    weekItemContainer.append(
      day,
      time,
      temp,
      findSymbol(metricForecastObject.list[i].weather[0].icon),
      description,
    );
    weekWidgetContainer.append(weekItemContainer);
  }
};

const createImperialWeekItems = (weekWidgetContainer) => {
  for (let i = 0; i < imperialForecastObject.list.length; i += 1) {
    const weekItemContainer = createDiv('weekItem');
    const timeDateArray = formatDateTime(i);
    const day = createP(`${timeDateArray[0]}`, '');
    const time = createP(`${timeDateArray[1]} ${timeDateArray[2]}`, '');
    const temp = createH1(`${imperialForecastObject.list[i].main.temp} °F`, '');
    const description = createP(
      capitalizeFirstLetter(
        imperialForecastObject.list[i].weather[0].description,
      ),
    );
    weekItemContainer.append(
      day,
      time,
      temp,
      findSymbol(imperialForecastObject.list[i].weather[0].icon),
      description,
    );

    weekWidgetContainer.append(weekItemContainer);
  }
};

const createWidget = () => {
  const weekWidgetContainer = createDiv('weekWidgetContainer');
  if (metricImperialBool) {
    createMetricWeekItems(weekWidgetContainer);
  } else if (!metricImperialBool) {
    createImperialWeekItems(weekWidgetContainer);
  }

  return weekWidgetContainer;
};

function clearWeek() {
  while (getWeek().firstChild) { getWeek().removeChild(getWeek().firstChild); }
}

const createTitle = () => {
  const title = createH1('5-Day Forecast', '');

  return title;
};

function createWeek() {
  clearWeek();
  getWeek().append(createTitle(), createWidget());
}

// eslint-disable-next-line import/prefer-default-export
export { createWeek };
