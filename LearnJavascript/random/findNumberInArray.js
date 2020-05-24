function findNumber(arr, k) {
    // Write your code here
    for(const i of arr){
        if(k === i) return 'YES'
    }
    return 'NO'

}


console.log(findNumber([1,2,3,4,5], 1))
console.log(findNumber([2,3,1], 5))