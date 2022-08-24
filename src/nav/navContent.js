import {
  createForm, createInput, createIcon, createButton,
} from '../reusableCode/reusableElements';
import { getNav } from '../reusableCode/reusableGetters';

const createSearchBar = () => {
  const form = createForm('searchForm');

  form.append(createInput('text', true, 'Search location...', 'searchBar'), createButton('search', '', 'submit', 'submitButton'));

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
