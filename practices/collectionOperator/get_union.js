'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.map(n => collection_b.includes(n));
}

module.exports = get_union;

