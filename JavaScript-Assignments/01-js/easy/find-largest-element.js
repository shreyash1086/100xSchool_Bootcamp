/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  return numbers.sort(function (a, b) {
    return a - b;
  })[numbers.length - 1];
}

// console.log(findLargestElement([15, 27, 8, 12]));

module.exports = findLargestElement;