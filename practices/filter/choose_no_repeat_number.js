'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((v, i, arr) => arr.indexOf(v) === i);
}

module.exports = choose_no_repeat_number;
