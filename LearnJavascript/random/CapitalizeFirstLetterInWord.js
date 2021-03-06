function LetterCapitalize(str) {
    let replacedWords = str.split(' ').map(word => {
        let chars = word.split(''); 
        let repChar = [];
        for (let i = 0; i < chars.length; i++) {
            if (i === 0) { repChar.push(chars[i].toUpperCase()) } else {
                repChar.push(chars[i])
            }
        }
        return repChar.join('')
    });
    return replacedWords.join(' ');
}

// Optimized version 
const convertToSentenceCase = str => {
    return str.split(' ').map(eachWord => { 
        let firstLetter = eachWord.substr(0,1);
        return eachWord.replace(firstLetter, firstLetter.toUpperCase())})
        .join(' ')
}

// keep this function call here 
console.log(LetterCapitalize('hello world q'));

console.log(convertToSentenceCase('hello world q'))
/*

  wordarr = str.split(" ");
  
  for (var i = 0, n = wordarr.length; i < n; i++) {
   wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1); 
  }
  str = wordarr.join(" ");
  
  return str; 

*/