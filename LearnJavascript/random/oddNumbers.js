function oddNumbers(l, r) {
    // Write your code here
    let oddNums = []
    for(let i=l; i<=r;i++){
        if(i%2 !== 0) oddNums.push(i)
    } 
    return oddNums 
}

oddNumbers(3,9)
oddNumbers(2,5)