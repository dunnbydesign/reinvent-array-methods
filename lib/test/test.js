/* globals describe, it */

'use strict';

var _chai = require('chai');

var _arrayFunctions = require('../arrayFunctions');

var _arrayFunctions2 = _interopRequireDefault(_arrayFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Array Functions', function () {
  var arrayFunctions = new _arrayFunctions2.default();

  it('"push" should add an item to the end of an array and return the length of the array', function () {
    var arr = ['dog', 'bone', 'toy'];
    var arr2 = [];
    (0, _chai.expect)(arrayFunctions.push(arr, 'collar')).to.equal(4);
    (0, _chai.expect)(arr[3]).to.equal('collar');
    (0, _chai.expect)(arr).to.deep.equal(['dog', 'bone', 'toy', 'collar']);
    (0, _chai.expect)(arrayFunctions.push(arr2, 'collar')).to.equal(1);
    (0, _chai.expect)(arr2[0]).to.equal('collar');
    (0, _chai.expect)(arr2).to.deep.equal(['collar']);
  });

  it('"pop" should remove the last item of an array and return its value', function () {
    var arr = ['dog', 'bone', 'toy'];
    var arr2 = [];
    (0, _chai.expect)(arrayFunctions.pop(arr)).to.equal('toy');
    (0, _chai.expect)(arr[2]).to.equal(undefined);
    (0, _chai.expect)(arr.length).to.equal(2);
    (0, _chai.expect)(arr).to.deep.equal(['dog', 'bone']);
    (0, _chai.expect)(arrayFunctions.pop(arr2)).to.equal(undefined);
    (0, _chai.expect)(arr2[0]).to.equal(undefined);
    (0, _chai.expect)(arr2.length).to.equal(0);
    (0, _chai.expect)(arr2).to.deep.equal([]);
  });

  it('"shift" should remove the first item of an array and return its value', function () {
    var arr = ['dog', 'bone', 'toy'];
    var arr2 = [];
    (0, _chai.expect)(arrayFunctions.shift(arr)).to.equal('dog');
    (0, _chai.expect)(arr[2]).to.equal(undefined);
    (0, _chai.expect)(arr[0]).to.equal('bone');
    (0, _chai.expect)(arr.length).to.equal(2);
    (0, _chai.expect)(arr).to.deep.equal(['bone', 'toy']);
    (0, _chai.expect)(arrayFunctions.shift(arr2)).to.equal(undefined);
    (0, _chai.expect)(arr2[0]).to.equal(undefined);
    (0, _chai.expect)(arr2.length).to.equal(0);
    (0, _chai.expect)(arr2).to.deep.equal([]);
  });

  it('"unshift" should add an item to the start of an array and return the length of the array', function () {
    var arr = ['dog', 'bone', 'toy'];
    var arr2 = [];
    (0, _chai.expect)(arrayFunctions.unshift(arr, 'collar')).to.equal(4);
    (0, _chai.expect)(arr[3]).to.equal('toy');
    (0, _chai.expect)(arr[0]).to.equal('collar');
    (0, _chai.expect)(arr).to.deep.equal(['collar', 'dog', 'bone', 'toy']);
    (0, _chai.expect)(arrayFunctions.unshift(arr2, 'collar')).to.equal(1);
    (0, _chai.expect)(arr2[0]).to.equal('collar');
    (0, _chai.expect)(arr2).to.deep.equal(['collar']);
  });

  it('"unique" should return a copy of an array with all the duplicate elements removed', function () {
    var arr = [1, 2, 2, 1, 3, 2, 3, 4, 4];
    var arr2 = [1];
    var arr3 = [];
    var arr4 = [true, false, 0, 5, 0, false, true];
    var arr5 = [true, 'b', 5, -1, 'b', 'a'];
    var arr6 = [true];
    var arr7 = [false];
    var arr8 = [1, 2, 3, 4];
    (0, _chai.expect)(arrayFunctions.unique(arr)).to.deep.equal([1, 2, 3, 4]);
    (0, _chai.expect)(arrayFunctions.unique(arr2)).to.deep.equal([1]);
    (0, _chai.expect)(arrayFunctions.unique(arr3)).to.deep.equal([]);
    (0, _chai.expect)(arrayFunctions.unique(arr4)).to.deep.equal([true, false, 0, 5]);
    (0, _chai.expect)(arrayFunctions.unique(arr5)).to.deep.equal([true, 'b', 5, -1, 'a']);
    (0, _chai.expect)(arrayFunctions.unique(arr6)).to.deep.equal([true]);
    (0, _chai.expect)(arrayFunctions.unique(arr7)).to.deep.equal([false]);
    (0, _chai.expect)(arrayFunctions.unique(arr8)).to.deep.equal([1, 2, 3, 4]);
  });

  it('"frequency2" should return the most common letter(s) for an array of words', function () {
    var arr = ['abcd', 'aabbccdd', 'aaabbbcccddd'];
    var arr2 = ['a', 'a', 'b', 'b', 'c', 'd'];
    var arr3 = ['a', 'b', 'c', 'd'];
    var arr4 = ['aa', 'a', 'bb', 'b', 'c'];
    var arr5 = ['aaa', 'bbbb', 'cc'];
    var arr6 = ['aaaaa'];
    var arr7 = ['aaaa', 'bbb'];
    var arr8 = ['abcd', 'bcde', 'cdef'];
    var arr9 = [];
    (0, _chai.expect)(arrayFunctions.frequency2(arr)).to.deep.equal(['a', 'b', 'c', 'd']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr2)).to.deep.equal(['a', 'b']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr3)).to.deep.equal(['a', 'b', 'c', 'd']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr4)).to.deep.equal(['a', 'b']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr5)).to.deep.equal(['a', 'b', 'c']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr6)).to.deep.equal(['a']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr7)).to.deep.equal(['a', 'b']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr8)).to.deep.equal(['c', 'd']);
    (0, _chai.expect)(arrayFunctions.frequency2(arr9)).to.deep.equal([]);
  });
});