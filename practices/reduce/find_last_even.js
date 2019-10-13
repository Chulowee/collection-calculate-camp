'use strict';

function find_last_even(collection) {
  return collection.filter(number => number%2==0)
  .reduce((curNum,nextNum) => nextNum);
}

module.exports = find_last_even;
