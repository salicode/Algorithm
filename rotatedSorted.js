
// suppose an array of sorted in ascending order is rotated at some pivot unknown to you beforehand eg [, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2]







const search = (num, target) => {
    let leftIndex = 0;
    let rightIndex = num.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2) 
        if(num[middleIndex] === target) 
            return middleIndex;
        // determine which segment is sorted
        if(num[leftIndex] <= num[middleIndex]){
            if(num[leftIndex] <= target && target <= num[middleIndex]) rightIndex = middleIndex - 1;
            else leftIndex = middleIndex + 1;
        } else {
            if(num[middleIndex] <= target && target <= num[rightIndex]) leftIndex = middleIndex + 1;
            else rightIndex = middleIndex - 1;
        }
    }
    return -1;
}

console.log(search([4, 5, 6, 7, 8, 0, 1, 2], 8));

// console.log(search([1, 2,  3, 4, 5, 6, 7]))
// console.log(search([4, 5, 6, 7, 9, 11, 12]))
// console.log(search([4, 5, 6, 7, 8, 9, 10]))