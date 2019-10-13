'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((num, index, array) => array.indexOf(num) === index); 
}

module.exports = choose_no_repeat_number;
