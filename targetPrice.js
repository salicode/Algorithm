function findPrices(arr, target) {
  const priceWithIndices = {}; // Create an empty object to store prices we are looking for and their indices.

  for (let i = 0; i < arr.length; i++) { // Loop through each price in the array.
    const missingPrice = target - arr[i]; // Calculate the missing price needed to reach the target sum.
    if (missingPrice in priceWithIndices) { // Check if the missing price is already in the map object.
      return [priceWithIndeces[missingPrice], i]; // If it is, return an array containing the indices of the two prices that add up to the target sum.
    }
    priceWithIndeces[arr[i]] = i; // Add the current price and its index to the priceWithIndeces object.
}

  return null; // If no pair of prices is found that add up to the target sum, return null.
}


const prices = [10, 20, 30, 40, 50];
const target = 90;
const indices = findPrices(prices, target);
console.log(indices); // Output: [3, 4]


// function findPrices(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// // Example usage
// const prices = [10, 20, 30, 40, 50];
// const target = 70;
// const indices = findPrices(prices, target);
// console.log(indices); // Output: [1, 3]



// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     const obj = {};
//   for(let i =0; i < nums.length; i++){
//     const missingNum = target - nums[i];
//     if(missingNum in obj){
//         return  [obj[missingNum], i];
//     }
//    obj[nums[i]] = i;
//   }
//   return null;
// };