
// Pure fuinctions always return same output for a given input
const hello = (name) => console.log(`hello ${name}`)
hello('Yay!!')
hello("Yay!!")
hello("Yay!!")


// Why pure functions??
// 1 Pure functions are much clearer and easier to read
// 2 The compiler can do more optimization on pure functions
for (let i = 0; i < 1000; i++){
    console.log(fun(10));
}
// If fun were not a pure function, 
// then fun(10) would need to be executed 1,000 times while this code is running.
// If fun were a pure function, the editor would be able to optimize the code at compile time. The optimized code might look like this:
let result = fun(10)
for (let i = 0; i < 1000; i++){
    console.log(result);
}
// 3 Pure functions are easier to test. They will not be context dependent

