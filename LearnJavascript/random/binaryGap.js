
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    N = N.toString(2)
    let zc = -1
    let maxZc = 0
    let nums = N.split('')
    nums.forEach(n => {
        if (n == 1) {
            if (zc != -1 && zc > maxZc) {
                maxZc = zc
            }
            zc = 0
        }
        if (n == 0) {
            if (zc > -1) {
                zc++
            }
        }
    })
    return maxZc
}

let res = solution(529) // 9,2 ; 529,4
console.log(res)