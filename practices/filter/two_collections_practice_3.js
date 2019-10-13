'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter((num) => collection_b.filter(m => num % m === 0).length >= 1);
}

module.exports = choose_divisible_integer;
