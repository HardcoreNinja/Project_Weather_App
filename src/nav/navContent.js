import {
  createForm, createInput, createIcon, createButton,
} from '../reusableCode/reusableElements';
import { getNav } from '../reusableCode/reusableGetters';
import { callOpenWeather } from './navLogic';

const createSearchBar = () => {
  const form = createForm('searchForm');
  const button = createButton('search', '', 'button', 'submitButton');
  button.addEventListener('mouseup', callOpenWeather);
  form.append(createInput('text', true, 'Search location...', 'searchBar'), button);

  return form;
};

const createLogo = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'logo');
  container.append(createIcon('storm'), 'iWeather');
  return container;
};

function createNav() {
  getNav().append(createLogo(), createSearchBar());
}

createNav();
