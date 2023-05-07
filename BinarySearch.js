// Problem statement:- Given a sorted element array of 'n' eleemnts andd a target element 't', find the index of 't' in thr array. Return -1 if the target element is not found, binary search only on sorted array 
// if the array is empty return -1 as the element can not be found
// if the array has elements, find the middle element in the array.if target is equal to the middle element, return the middle element index
// is target is less than the middle element,binary search left half of the array

// if target element is greater thwn the middle element, binary search right half of the array

// function BinarySearch(arr, target){
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
    
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )
//         if(target === middleIndex){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         } else [
//             leftIndex = middleIndex + 1
//         ]

//     }
//     return -1

// }

// console.log([-5, 2, 4, 6, 10], 10)
// console.log([-5, 2, 4, 6, 10], 6)
// console.log([-5, 2, 4, 6, 10], 20)
// console.log([-5, 2, 4, 6, 10], 2 )


// Recurssive binary search

function RecursiveBinarySearch(arr, target){

    return RecursiveSearch(arr, target, 0, arr.length - 1)

}

function RecursiveSearch(arr, target, leftIndex, rightIndex){
    if (leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )
    if (target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
        return   RecursiveSearch(arr, target, leftIndex, middleIndex - 1)
    } else {
        return  RecursiveSearch(arr, target, middleIndex + 1, rightIndex)
    }

}

console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 10))
console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 6))
console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 20))
console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 2))