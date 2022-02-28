import _ from 'lodash';

import * as Rox from 'rox-browser';

// Create a Roxflag in the flags container class
const flags = {
  titleColors: new Rox.RoxString('White', ['White', 'Blue', 'Green', 'Yellow']),
};

async function initRollout() {
  const options = {}

  // Register the flags with Rollout
  Rox.register('', flags);

  // Setup the Rollout key
  await Rox.setup('61fbf485db6c64dd15713f3d', options);
}


function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', flags.titleColors.getValue()], ' ');

  return element;
}

initRollout().then(function() {
  console.log('Done loading Rollout');
});

document.body.appendChild(component());
