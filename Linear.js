// Problem statement: Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element ids not found. arr=[-5, 2, 10, 4, 6] and target element t=10, it will return 2
// Linear search algorithm 
// start at first element in the array and move towords the last, at each element, check if the element is equal to the target element

// arr = [-5, 2, 10, 4, 6]

function LinearSearch(arr, target){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(LinearSearch([-5, 2, 10, 4, 6], 10), "target element is 10 so it will return 2 since 10 is at index 2")
console.log(LinearSearch([-5, 2, 10, 4, 6], 4), "Target element is 4 so it will return 3 since 4 is at index 3")
console.log(LinearSearch([-5, 2, 10, 4, 6], 6), "The target element is 6 so it will return 4 since 4 is at index 4")
console.log(LinearSearch([-5, 2, 10, 4, 6, 8], 8), "the target element is 8 so it will return 5 since 8 is at index 5")