'use strict';

var find_last_even = require('../../practices/reduce/find_last_even.js');

describe('find_last_even', function() {

  var collection = [1,11,27,20,4,9,15];

  it('', function() {
    var result = find_last_even(collection);

    expect(result).toEqual(4);
  });
});
