const TwoSum = (arr, target) => {
        storage = {};
        
     for(let i = 0; i < arr.length; i++){
        const missingNum = target - arr[i];
        if (storage[missingNum] !== undefined) {
                return [storage[missingNum], i];
                } 

        storage[arr[i]] = i;

     }

}

const prices = [10, 20, 30, 40, 50];
const target = 90;
console.log(TwoSum(prices, target));