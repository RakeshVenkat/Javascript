function twoStrings(s1, s2) {
    let s2Chars = s2.split('');
    let charCombinations = []; charCombinations
    for (let i = 0; i < s2Chars.length; i++) {
        let temp = '';
        for (let j = i; j < s2Chars.length; j++) {
            temp += s2Chars[j];
            charCombinations.push(temp)
        }
    }

/*     let commonChars = []
    charCombinations.forEach(el => {
        if (s1.search(el) !== -1) commonChars.push(el)
    }); */
    for (let index = 0; index < charCombinations.length; index++) {
        if (s1.search(charCombinations[index]) !== -1) return 'YES'
    }
    return 'NO'
    //return commonChars.length > 0 ? 'Yes' : 'No'
}

a = 'hello'
b = 'world'
twoStrings(a, b) 
//twoStrings('hi','world')