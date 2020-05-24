function fizzBuzz(n) {
    // Write your code here
    for(let i=1; i<=n; i++){
        res =  getFizzBuzz(i)
        process.stdout.write(""+res+"\n");
    }
}

function getFizzBuzz(i){
    if(i%3 === 0 && i%5 === 0) return 'FizzBuzz'
    if(i%3 === 0 && i%5 !== 0) return 'Fizz'
    if(i%3 !== 0 && i%5 === 0) return 'Fizz'
    if(i%3 !== 0 && i%5 !== 0) return i
}

console.log(fizzBuzz(15))