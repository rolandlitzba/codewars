// Given the triangle of consecutive odd numbers:

//             1
//           3     5
//       7     9    11
//   13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1)

// create function that takes in number as parameter
// initialize Array for all numbers
// initialize array for only odd numbers
// Create for loop that pushes all odd numbers between 0 and (including) parameter from first array into second array
// Sum all numbers in second array using reduce
// return solution

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

module.exports = rowSumOddNumbers;
