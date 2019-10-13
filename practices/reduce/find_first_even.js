'use strict';

function find_first_even(collection) {
  return collection.filter(number => number%2==0)
  .reduce((curNum,nextNum) => curNum);
}

module.exports = find_first_even;

