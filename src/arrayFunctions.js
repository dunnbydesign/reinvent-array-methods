'use strict'

export default class ArrayFunctions {
  push (array, item) {
    // Find the length of the array and add a new index at the end which contains the item
    array[array.length] = item
    return array.length
  }

  pop (array) {
    if (array.length > 0) {
      // Store the last item in the array before you alter the array
      const lastItem = array[array.length - 1]

      // Alter the array (by removing its last item) and return the last item of the array
      array.length = array.length - 1
      return lastItem
    } else {
      return undefined
    }
  }

  shift (array) {
    if (array.length > 0) {
      // Store the first item in the array before you alter the array
      const firstItem = array[0]

      // Alter the array (by removing its first item) and return the first item of the array
      for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
          array.length = array.length - 1
        } else {
          array[i] = array[i + 1]
        }
      }
      return firstItem
    } else {
      return undefined
    }
  }

  unshift (array, item) {
    // Starting with the index that is 1 higher than the last index in the array, assign the associated element's value equal to that of the element with the preceding index (1 less)
    if (array.length > 0) {
      for (let i = array.length; i > 0; i--) {
        array[i] = array[i - 1]
      }
    }
    array[0] = item
    return array.length
  }

  unique (array) {
    // Copy the array argument to a new array to ensure that we don't alter it
    let arr = []
    array.forEach(element => {
      arr.push(element)
    })

    // For each element in the array, search continuously for a match in the elements to the right, and then remove any element when it is matched
    // The loop searching for matches on the current index ends when no match can be found
    let match
    for (let i = 0; arr[i] !== undefined; i++) {
      while (match = arr.indexOf(arr[i], i + 1), match === -1 ? false : true) {
        arr.splice(match, 1)
      }
    }
    return arr
  }

  frequency2 (array) {
    // For each element in the array, split it into an array of unique letters that is pushed to the new array
    let arr = []
    array.forEach(element => {
      arr.push(this.unique(element.split('')))
    })

    // Create an object that keeps track of every unique letter and the number of words (an element in the original array argument) where it is contained
    let letters = {}
    arr.forEach(element => {
      element.forEach(e => {
        if (e in letters) {
          letters[e]++
        } else {
          letters[e] = 1
        }
      })
    })

    let max = 0
    let maxLetters = []
    for (let letter in letters) {
      if (letters[letter] > max) {
        maxLetters = []
        maxLetters.push(letter)
        max = letters[letter]
      } else if (letters[letter] === max) {
        maxLetters.push(letter)
      }
    }
    return maxLetters
  }
}
