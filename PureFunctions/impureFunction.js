// Counter() is Impure as it returns a different result for every invocation
let counter = (function () {
  let initValue = 0;
  return function () {
    initValue++;
    return initValue;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());

// Qtn: so a function calling an API that gives different result is Impure?

// Now, why is the below function impure??
let maleCounter = 0;
let femaleCounter = 0;
const sexCounter = (user) => {
  if (user.sex == "male") maleCounter++;
  else femaleCounter++;
};

const John = {sex: 'male'}
const Linda = {sex: 'female'}
const Kate = {sex: 'female'}
const Matt = { sex: "male" }
const users = [John, Linda, Kate, Matt]
users.forEach(user => sexCounter(user))
console.log(`males:${maleCounter}, females: ${femaleCounter}`);
users.forEach((user) => sexCounter(user));
// males:2, females: 2
console.log(`males:${maleCounter}, females: ${femaleCounter}`);
// males:4, females: 4 ---> OOPS, the global value is changed !!
// This function has side effects, hence making it impure


