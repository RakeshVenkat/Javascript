const computed = (str) => {
  // Suppose the calculation in the funtion is very time consuming
  console.log("2000s have passed");

  // Suppose it is the result of the function
  return "a result";
};


computed('s')

function cached(fn) {
  // Create an object to store the results returned after each function execution.
  const cache = Object.create(null);

  // Returns the wrapped function
  return function cachedFn(str) {
    // If the cache is not hit, the function will be executed
    if (!cache[str]) {
      let result = fn(str);

      // Store the result of the function execution in the cache
      cache[str] = result;
    }

    return cache[str];
  };
}
// Save the function into another variable and invoke that intead !!
const cachedFunction = cached(computed)
console.log(cachedFunction('s'))
console.log(cachedFunction('s'))
console.log(cachedFunction("s"))
/* 
2000s have passed
2000s have passed
a result
a result
a result 
*/