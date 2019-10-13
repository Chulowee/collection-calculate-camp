'use strict';

function grouping_count(collection) {
    return collection.filter((num, index, array) => array.indexOf(num) === index);
}
module.exports = grouping_count;
