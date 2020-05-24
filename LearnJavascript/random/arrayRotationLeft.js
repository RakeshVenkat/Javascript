function solution(n, d, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(!n) return A
    d = d % n
    console.log(`Rotating the elements of array left by ${d} times`)

    if (d === 0) return A

    let rotateList = [{ indexOriginal: 0, indexRotated: 0 }]
    for (let i = 0; i < n; i++) {
        rotateList[i] = { indexOriginal: i, indexRotated: (n - d + i) % n }
    }
    console.log(`Rotation list ${rotateList}`)
    let rotatedArray = []
    rotateList.map(rotateIndex => {
        console.log(rotateIndex)
        rotatedArray[rotateIndex.indexRotated] = A[rotateIndex.indexOriginal]
    })

    return rotatedArray.join(' ')
}

//n = A.length
n = 1
d = 1
A = [1]
let result = solution(n, d, A)
console.log(result)