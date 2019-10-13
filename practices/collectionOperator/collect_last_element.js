'use strict';

function collect_last_element(collection) {
  return collection.reduce((cur, next) => next);
}

module.exports = collect_last_element;
