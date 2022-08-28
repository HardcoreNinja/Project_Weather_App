import {
  createForm, createInput, createIcon, createButton, createP,
} from '../reusableCode/reusableElements';
import { getNav } from '../reusableCode/reusableGetters';
import { getGeoRegion, toggleMetricImperialBool } from './navLogic';

const createLogo = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'logo');
  container.append(createIcon('storm'), 'iWeather');
  return container;
};

const createSearchBar = () => {
  const form = createForm('searchForm');
  const button = createButton('search', '', 'button', 'submitButton');
  button.addEventListener('mousedown', getGeoRegion);
  form.append(createInput('text', true, 'Search location...', 'searchBar'), button);

  return form;
};

const createFormatWarning = () => {
  const text = createP('Please format your search the following ways: <br> {Santiago(city), CL(country code)}, {Jacksonville(city), Florida(state)}, {Indianapolis{city}}, {China (country)}', 'formatWarning');
  return text;
};

const createMetricImperialButton = () => {
  const button = createButton('', 'Display °C', 'button', 'displayMetricImperial');
  button.addEventListener('mousedown', toggleMetricImperialBool);
  return button;
};

function createNav() {
  getNav().append(
    createLogo(),
    createSearchBar(),
    createFormatWarning(),
    createMetricImperialButton(),
  );
}

createNav();
