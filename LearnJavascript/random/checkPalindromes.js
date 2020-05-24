function countPalindromes(s) {
    let palindromeCount = 0
    try {
        let allSubStrings = getAllSubStrings(s)
        if(allSubStrings.length === 0) return 0

        for (let index = 0; index < allSubStrings.length; index++) {
            if (isPalindrome(allSubStrings[index])) palindromeCount++
        }
    } catch (err) {
        return palindromeCount
    }
    return palindromeCount
}

function isPalindrome(str) {
    const strLen = str.length
    if (strLen === 1) return true

    for (let index = 0; index < strLen / 2; index++) {
        if (str[index] !== str[strLen - 1 - index]) {
            return false;
        }
    }
    return true
}

function getAllSubStrings(str) {
    let strChars = str.split('');
    let charCombinations = []; charCombinations
    for (let i = 0; i < strChars.length; i++) {
        let temp = '';
        for (let j = i; j < strChars.length; j++) {
            temp = temp.concat(strChars[j]);
            charCombinations.push(temp.concat(strChars[j]))
        }
    }
    return charCombinations
}

function getAllSubStringsv2(str) {
    let charCombinations = []
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            charCombinations.push(str.slice(i, j));
        }
    }
    return charCombinations
}

//getAllSubStringsv2('daata') 

const res = countPalindromes('daata')
console.log(res)
