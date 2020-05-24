A = [9, 3, 9, 3, 9, 5, 9, 3, 3] // should return 5

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort()
    for (let index = 0; index < A.length; index++) {
        if (index === 0) {
            if (A[0] === A[1]) continue;
            return A[0]
        } else if (index === A.length - 1) {
            if (A[A.length - 1] === A[A.length - 2]) continue;
            return A[A.length - 1]
        } else {
            if (A[index] === A[index - 1] || A[index] === A[index + 1]) continue
            return A[index]
        }
    }
}

let oddElement = solution(A)
console.log(oddElement)