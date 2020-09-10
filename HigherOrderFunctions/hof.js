// What is a HOC? or hor do you identify a hoc:

// a HOC does any of the following:
// 1. Takes one or more args as a fn
// 2. Its a function returning a function

// example: convert an array of nums to another array

// Without HOC:
const arr1 = [1, 2, 3];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}

// With HOC: the Array.map() is a HOC.
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function (item) {
  return item * 2;
});
console.log(arr2);

// Wow !! now this code is  more concise and efficient.