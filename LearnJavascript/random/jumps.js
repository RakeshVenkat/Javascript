// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps=[]
    jumps.push(0)
    let arrLen = c.length; console.log(arrLen)
    if(arrLen < 2 || arrLen > 100) return -1
    for(let i=1; i<arrLen; i++){
        if(c[i] === 1){
            if(c[i]+c[i-1] === 1 && i!== 1) jumps.push(i-1)
        }
    }
    jumps.push(arrLen-1)
    return jumps.length
}

A=[0,1,0]
console.log(jumpingOnClouds(A))
