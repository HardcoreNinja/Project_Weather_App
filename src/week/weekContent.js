import {
  metricForecastObject, imperialForecastObject, formatDate, get5DayForecast, getDay,
} from './weekLogic';
import { getWeek } from '../reusableCode/reusableGetters';
import { createDiv } from '../reusableCode/reusableElements';
import { metricImperialBool } from '../nav/navLogic';

const createWeekItem = () => {
  const container = createDiv('weekItem');
  const day0 = getDay(new Date(metricForecastObject.list[0].dt_txt));
  console.log(day0);
};

const createWidget = () => {
  const container = createDiv('weekWidgetContainer');
  if (metricImperialBool) {
    createWeekItem();
  } else if (!metricImperialBool) {

  }
  return container;
};

function clearWeek() {
  while (getWeek().firstChild) { getWeek().removeChild(getWeek().firstChild); }
}

function createWeek() {
  clearWeek();
  getWeek().append(createWidget());
}

// eslint-disable-next-line import/prefer-default-export
export { createWeek };
