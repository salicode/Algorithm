// function fibonannci(n){
//     const fib = [0, 1]
//     for (let i= 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib 
// }
// console.log(fibonannci(1), 'When n is 1')
// console.log(fibonannci(2), 'when n is 2')
// console.log(fibonannci(3), 'when n is 3')
// console.log(fibonannci(4), 'when n is 4')
// console.log(fibonannci(5), 'when n is 5')
// console.log(fibonannci(6), 'when n is 6')
// console.log(fibonannci(7), 'when n is 7')
// console.log(fibonannci(8), 'when n is 8')
// console.log(fibonannci(9), 'when n is 9')
// console.log(fibonannci(10), 'when n is 10')

// The answer is simple - because for n equal to 0 or 1, we can return that number, because as we already know - F(0) = 0, F(1) = 1.
//The time complexity for this solution is linear - O(n), because we run the loop from 2 to n
// The space complexity is O(1) because it does not matter if we run fibonacci(10) or fibonacci(100), the space required remains the same.


//Recussice Fibonnaci sequence 

function RecursiveFibonacci(n){
    result = []
    if (n >2){

    return n
    }

    return result = RecursiveFibonacci(n -1) + RecursiveFibonacci(n -2)

}

console.log(RecursiveFibonacci(5))

//  function Factorial(n){
//     let result = 1
//     for (let i = 2; i <=n; i++){
//         result = result * i
//     }
//     return result
//  }

//  console.log(Factorial(5))
//  console.log(Factorial(10))

//  // Recursive Factorial
//  // Big o(n)

//  function RecursiveFactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * RecursiveFactorial(n - 1)
//  }
//  console.log(RecursiveFactorial(5))