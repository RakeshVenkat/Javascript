function solution(A){
    A.sort()
    let len = A.length
    for(let i=0; i<len; i++){
        if(A[i] !== A[i+1]-1 ) return A[i]+1
    }
}

A=[2,3,1,4]
console.log(solution(A))