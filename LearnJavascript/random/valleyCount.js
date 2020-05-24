function countingValleys(n, s) {
    let arr = s.split('')
    var c = 0;
    let vc = 0;
    for(let i=1; i<=n; i++){ 
        if(arr[i-1] === 'U') {
            if(c < -1) { 
                vc++; c=0;
            } 
        } 
        if(arr[i-1] === 'D') c--
    }
    return vc
}

let n=12;
let s='DDUUDDUDUUUD'

n=8;
s='UDDDUDUU'
countingValleys(n, s)