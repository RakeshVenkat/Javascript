// Find the smallest positive integer that does not occur in a given sequence.
/* Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]. */


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sortedArray = A.sort(); console.log(sortedArray)
    let arrayOfPositives = sortedArray.filter(el => el > 0); console.log(arrayOfPositives)
    if (arrayOfPositives.length) {
        let min = arrayOfPositives[0]
        let max = arrayOfPositives[arrayOfPositives.length - 1]
        for (let i = min + 1; i < max; i++) {
            if (arrayOfPositives.find(el => el === i) === undefined) return i
        }
        return max + 1
    } else {
        return 1
    }
}

let a = [1, 2, 3] // 4
let b = [1, 3, 6, 4, 1, 2] // 5
let c = [-1, -3] // 1

console.log(solution(a))
console.log(solution(b))
console.log(solution(c))