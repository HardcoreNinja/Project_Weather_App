/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */

import { redrawStats } from '../globalCode/logic';

let metricImperialBool = true;

function toggleMetricImperialBool() {
  metricImperialBool = !metricImperialBool;
  const button = document.querySelector('.displayMetricImperial');

  if (metricImperialBool) { button.innerHTML = 'Display °C'; } else {
    button.innerHTML = 'Display °F';
  }
  redrawStats();
}

export { toggleMetricImperialBool, metricImperialBool };
