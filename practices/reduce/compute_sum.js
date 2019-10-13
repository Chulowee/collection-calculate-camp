'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((cur,next) => cur+next);
}

module.exports = calculate_elements_sum;

