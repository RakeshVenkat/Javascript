function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrLen = A.length
    if(!arrLen) return A
    K = K % arrLen
    console.log(`Rotating the elements of array right by ${K} times`)

    if (K === 0) return A

    let rotateList = [{ indexOriginal: 0, indexRotated: 0 }]
    for (let i = 0; i < arrLen; i++) {
        rotateList[i] = { indexOriginal: i, indexRotated: (i + K) % arrLen }
    }
    console.log(`Rotation list ${rotateList}`)
    let rotatedArray = []
    rotateList.map(rotateIndex => {
        console.log(rotateIndex)
        rotatedArray[rotateIndex.indexRotated] = A[rotateIndex.indexOriginal]
    })
    return rotatedArray
}

A = [0, 0, 0]
K = 2
let result = solution(A, K)
console.log(result)