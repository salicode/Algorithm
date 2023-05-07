// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand [0, 1, 2, 4, 5, 6, 7]  might become [4, 5, 6, 7, 0, 1, 2]  find the minimum element

const findMin = (nums) => {
  let leftIndex = 0;
  let rightIndex  = nums.length - 1;

   while(leftIndex < rightIndex) {
     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
     if(nums[middleIndex > nums[rightIndex]]) leftIndex = middleIndex + 1;
     else rightIndex = middleIndex
     
   }
  return nums[leftIndex];
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([0, 1, 2, 4, 5, 6, 7]));
console.log(findMin([-1, 1, 2, 4, 5, 6, 7]));