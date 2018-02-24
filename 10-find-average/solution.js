// Write function avg which calculates average of numbers in given list.
// https://www.codewars.com/kata/calculate-average/train/javascript

function find_average(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
  }

