// Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

// Note: There are ONLY integers in the JAVA and C# versions of this Kata.

// '', null, return undefined
// odd num  % 2 !== 0
// cube n x n x n n ^ 3
// let arr = [1, 2, 3, 4];

//find odd, then Math.pow(i, 3);
function cubeOdd(arr) {
  for (let i of arr) {
    if (typeof(i) !== 'number') {
      return undefined;
    }
  }

  let result = arr.filter(x => (x % 2 !== 0));
  if (result.length !== 0) {
    return result.map(y => Math.pow(y, 3)).reduce((accumulator, currentValue) => accumulator + currentValue);
  }

}
