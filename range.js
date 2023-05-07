function dataFinder(arr) {
  return function(minRange, maxRange, value) {
    if (minRange < 0 || maxRange >= arr.length) {
      console.log('Invalid Range')
    }
    for (let i = minRange; i <= maxRange; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
}


const arr = [1, 2, 3, 4, 5];
const findValueInRange = dataFinder(arr);
console.log(findValueInRange(1, 3, 2)); // Output: true
console.log(findValueInRange(0, 2, 4)); // Output: false
console.log(findValueInRange(-1, 3, 2)); // Throws an error
console.log(findValueInRange(1, 2, 4, 6)); // throw error 
