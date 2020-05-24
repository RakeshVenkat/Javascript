function repeatedString(s, n) {
    let strLen = s.length
    if(n<=strLen){
        s = s.substr(0, n); //console.log(s)
    }
    let num = fetchOccurancesOfA(s) ; console.log(num)

    if (strLen < n) {
        num = num * Math.floor(n / strLen)
        s1 = s.substr(0, n % strLen)
        num += fetchOccurancesOfA(s1)
    } else {
        return num
    }
    return num
}

function fetchOccurancesOfA(s) {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'a') num++
    }
    return num
}

let str = 'ababababc';
n = 65
console.log(repeatedString(str, n))