'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayFunctions = (function () {
  function ArrayFunctions() {
    _classCallCheck(this, ArrayFunctions);
  }

  _createClass(ArrayFunctions, [{
    key: 'push',
    value: function push(array, item) {
      // Find the length of the array and add a new index at the end which contains the item
      array[array.length] = item;
      return array.length;
    }
  }, {
    key: 'pop',
    value: function pop(array) {
      if (array.length > 0) {
        // Store the last item in the array before you alter the array
        var lastItem = array[array.length - 1];

        // Alter the array (by removing its last item) and return the last item of the array
        array.length = array.length - 1;
        return lastItem;
      } else {
        return undefined;
      }
    }
  }, {
    key: 'shift',
    value: function shift(array) {
      if (array.length > 0) {
        // Store the first item in the array before you alter the array
        var firstItem = array[0];

        // Alter the array (by removing its first item) and return the first item of the array
        for (var i = 0; i < array.length; i++) {
          if (i === array.length - 1) {
            array.length = array.length - 1;
          } else {
            array[i] = array[i + 1];
          }
        }
        return firstItem;
      } else {
        return undefined;
      }
    }
  }, {
    key: 'unshift',
    value: function unshift(array, item) {
      // Starting with the index that is 1 higher than the last index in the array, assign the associated element's value equal to that of the element with the preceding index (1 less)
      if (array.length > 0) {
        for (var i = array.length; i > 0; i--) {
          array[i] = array[i - 1];
        }
      }
      array[0] = item;
      return array.length;
    }
  }, {
    key: 'unique',
    value: function unique(array) {
      // Copy the array argument to a new array to ensure that we don't alter it
      var arr = [];
      array.forEach(function (element) {
        arr.push(element);
      });

      // For each element in the array, search continuously for a match in the elements to the right, and then remove any element when it is matched
      // The loop searching for matches on the current index ends when no match can be found
      var match = undefined;
      for (var i = 0; arr[i] !== undefined; i++) {
        while ((match = arr.indexOf(arr[i], i + 1), match === -1 ? false : true)) {
          arr.splice(match, 1);
        }
      }
      return arr;
    }
  }, {
    key: 'frequency2',
    value: function frequency2(array) {
      var _this = this;

      // For each element in the array, split it into an array of unique letters that is pushed to the new array
      var arr = [];
      array.forEach(function (element) {
        arr.push(_this.unique(element.split('')));
      });

      // Create an object that keeps track of every unique letter and the number of words (an element in the original array argument) where it is contained
      var letters = {};
      arr.forEach(function (element) {
        element.forEach(function (e) {
          if (e in letters) {
            letters[e]++;
          } else {
            letters[e] = 1;
          }
        });
      });

      var max = 0;
      var maxLetters = [];
      for (var letter in letters) {
        if (letters[letter] > max) {
          maxLetters = [];
          maxLetters.push(letter);
          max = letters[letter];
        } else if (letters[letter] === max) {
          maxLetters.push(letter);
        }
      }
      return maxLetters;
    }
  }]);

  return ArrayFunctions;
})();

exports.default = ArrayFunctions;