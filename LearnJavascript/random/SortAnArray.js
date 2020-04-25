// Create an Ascending sort and return 
let sortedAscArray = ['hello', 'world', 'hi', 'now'].sort((a, b) => a.length - b.length);
console.log(sortedAscArray) // Sorted array
console.log(sortedAscArray.shift()) //smallest element in array

// Create an Descending sort and return 
let sortedDescArray = ['hello', 'world', 'hi', 'now'].sort((a, b) => b.length - a.length);
console.log(sortedDescArray) // Sorted array
console.log(sortedDescArray.shift())