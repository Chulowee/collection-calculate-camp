'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(function(res, v1, idx) {
    var v2 = collection_b[idx]; 
    return res && v1 === v2; 
}, true);
}

module.exports = compare_collections;


