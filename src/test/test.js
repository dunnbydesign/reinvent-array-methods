/* globals describe, it */

'use strict'

import { expect } from 'chai'
import ArrayFunctions from '../arrayFunctions'

describe('Array Functions', () => {
  const arrayFunctions = new ArrayFunctions()

  it('"push" should add an item to the end of an array and return the length of the array', () => {
    const arr = ['dog', 'bone', 'toy']
    const arr2 = []
    expect(arrayFunctions.push(arr, 'collar')).to.equal(4)
    expect(arr[3]).to.equal('collar')
    expect(arr).to.deep.equal(['dog', 'bone', 'toy', 'collar'])
    expect(arrayFunctions.push(arr2, 'collar')).to.equal(1)
    expect(arr2[0]).to.equal('collar')
    expect(arr2).to.deep.equal(['collar'])
  })

  it('"pop" should remove the last item of an array and return its value', () => {
    const arr = ['dog', 'bone', 'toy']
    const arr2 = []
    expect(arrayFunctions.pop(arr)).to.equal('toy')
    expect(arr[2]).to.equal(undefined)
    expect(arr.length).to.equal(2)
    expect(arr).to.deep.equal(['dog', 'bone'])
    expect(arrayFunctions.pop(arr2)).to.equal(undefined)
    expect(arr2[0]).to.equal(undefined)
    expect(arr2.length).to.equal(0)
    expect(arr2).to.deep.equal([])
  })

  it('"shift" should remove the first item of an array and return its value', () => {
    const arr = ['dog', 'bone', 'toy']
    const arr2 = []
    expect(arrayFunctions.shift(arr)).to.equal('dog')
    expect(arr[2]).to.equal(undefined)
    expect(arr[0]).to.equal('bone')
    expect(arr.length).to.equal(2)
    expect(arr).to.deep.equal(['bone', 'toy'])
    expect(arrayFunctions.shift(arr2)).to.equal(undefined)
    expect(arr2[0]).to.equal(undefined)
    expect(arr2.length).to.equal(0)
    expect(arr2).to.deep.equal([])
  })

  it('"unshift" should add an item to the start of an array and return the length of the array', () => {
    const arr = ['dog', 'bone', 'toy']
    const arr2 = []
    expect(arrayFunctions.unshift(arr, 'collar')).to.equal(4)
    expect(arr[3]).to.equal('toy')
    expect(arr[0]).to.equal('collar')
    expect(arr).to.deep.equal(['collar', 'dog', 'bone', 'toy'])
    expect(arrayFunctions.unshift(arr2, 'collar')).to.equal(1)
    expect(arr2[0]).to.equal('collar')
    expect(arr2).to.deep.equal(['collar'])
  })

  it('"unique" should return a copy of an array with all the duplicate elements removed', () => {
    const arr = [1, 2, 2, 1, 3, 2, 3, 4, 4]
    const arr2 = [1]
    const arr3 = []
    const arr4 = [true, false, 0, 5, 0, false, true]
    const arr5 = [true, 'b', 5, -1, 'b', 'a']
    const arr6 = [true]
    const arr7 = [false]
    const arr8 = [1, 2, 3, 4]
    expect(arrayFunctions.unique(arr)).to.deep.equal([1, 2, 3, 4])
    expect(arrayFunctions.unique(arr2)).to.deep.equal([1])
    expect(arrayFunctions.unique(arr3)).to.deep.equal([])
    expect(arrayFunctions.unique(arr4)).to.deep.equal([true, false, 0, 5])
    expect(arrayFunctions.unique(arr5)).to.deep.equal([true, 'b', 5, -1, 'a'])
    expect(arrayFunctions.unique(arr6)).to.deep.equal([true])
    expect(arrayFunctions.unique(arr7)).to.deep.equal([false])
    expect(arrayFunctions.unique(arr8)).to.deep.equal([1, 2, 3, 4])
  })

  it('"frequency2" should return the most common letter(s) for an array of words', () => {
    const arr = ['abcd', 'aabbccdd', 'aaabbbcccddd']
    const arr2 = ['a', 'a', 'b', 'b', 'c', 'd']
    const arr3 = ['a', 'b', 'c', 'd']
    const arr4 = ['aa', 'a', 'bb', 'b', 'c']
    const arr5 = ['aaa', 'bbbb', 'cc']
    const arr6 = ['aaaaa']
    const arr7 = ['aaaa', 'bbb']
    const arr8 = ['abcd', 'bcde', 'cdef']
    const arr9 = []
    expect(arrayFunctions.frequency2(arr)).to.deep.equal(['a', 'b', 'c', 'd'])
    expect(arrayFunctions.frequency2(arr2)).to.deep.equal(['a', 'b'])
    expect(arrayFunctions.frequency2(arr3)).to.deep.equal(['a', 'b', 'c', 'd'])
    expect(arrayFunctions.frequency2(arr4)).to.deep.equal(['a', 'b'])
    expect(arrayFunctions.frequency2(arr5)).to.deep.equal(['a', 'b', 'c'])
    expect(arrayFunctions.frequency2(arr6)).to.deep.equal(['a'])
    expect(arrayFunctions.frequency2(arr7)).to.deep.equal(['a', 'b'])
    expect(arrayFunctions.frequency2(arr8)).to.deep.equal(['c', 'd'])
    expect(arrayFunctions.frequency2(arr9)).to.deep.equal([])
  })
})
