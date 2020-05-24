function LongestWord(sen) {

    var words = sen.split(' ');
    var prevWordLen = 0;
    var largestWord = '';

    words.forEach(word => {
        word = word.replace(/[^a-z]/gi, '');
        var currWordLen = word.split('').length;
        if (currWordLen > prevWordLen) {
            prevWordLen = currWordLen
            largestWord = word
        }
    });

    // code goes here  
    return largestWord;

}

console.log(LongestWord('I lovee!! dogs@3'))

/*

function LongestWord(sen) {
  
  sen = sen.trim();
  sen = sen.replace(/[^a-zA-Zsd]/g, '');
  
  var arr = sen.split(' ');
  
  arr.sort(function(a, b) {return b.length - a.length});
  
  return arr.shift();

  // code goes here  
  return sen; 
         
*/

let x = ['do' , 'dogs', 'bark', 'all', 'the', 'time??']
x.sort((a,b) => a.length - b.length)
console.log(x)
x.sort((a,b) => b.length - a.length)
console.log(x)
Array.prototype.sort() 