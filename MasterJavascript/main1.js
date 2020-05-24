// Default function params
function multiply(x, y) {
	if (typeof y === 'undefined') y = 1;
	return x * y;
}
multiply(3); // NaN
multiply(3, 4);

function divide(x, y = 1) {
	return x / y;
}
divide(3);

const greet = (person, greeting = 'Hi', punctuation = '!') => `${greeting} person ${punctuation}`;
greet('Tim'); // "Hi person"
greet('Tim', 'Hey'); // "Hey person"
greet('Tim', '!'); // "! person !"
// default params always come at the end of your mandatory params.

// SPREAD PARAMS: expanded
// 1) in function call
Math.max(3, 4, 1, 99); // 99
Math.min(3, 4, 1, 99); // 1
//Math.max(...nums)

function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

const colors = [ 'red', 'green', 'blue', 'yellow' ];
giveMeFour(colors);
// a (4) ["red", "green", "blue", "yellow"]
// b undefined
// c undefined
// d undefined

giveMeFour(...colors);
//a red
//b green
//c blue
//d yellow

const str = 'GOAT';
giveMeFour(...str);
// a G
// b O
// c A
// d T

// 2) in array : iterable and spreads . copy of a new array
const cephlapods = [ 'dumbo octopus', 'humboldt squid', 'glamboyant cuttlefish' ];
const gastropods = [ 'gaint african snail', 'banana slug', 'varaiable neon slug' ];
const cnidaria = [ 'fire coral', 'moon jelly' ];

const mollusca = [ ...cephlapods, ...gastropods ];
// ["dumbo octopus", "humboldt squid", "glamboyant cuttlefish", "gaint african snail", "banana slug", "varaiable neon slug"]

const cephCopy = [ ...cephlapods ];
cephCopy === cephlapods; // false
// COPY arrays as a new clone. But works only for one level
// If you have a nested array then you cant as the refence is same

// [...'abcde', 'hello']
// ["a", "b", "c", "d", "e", "hello"]

// 3) in object
const feline = {
	legs: 4,
	family: 'Felidae'
};

const canine = {
	family: 'Canine',
	furry: true
};

const dog = {
	...canine,
	isPet: true,
	adorable: true
};
// {family: "Canine", furry: true, isPet: true, adorable: true}
const houseCat = {
	...canine,
	isGrumpy: true,
	personality: 'unpredictable'
};
// {family: "Canine", furry: true, isGrumpy: true, personality: "unpredictable"}
const pets = {
	...dog,
	...houseCat
};
// {adorable: true,family: "Canine",furry: true,isGrumpy: true,isPet: true,personality: "unpredictable"}

// Order matters !! legs get updated to 3
const tripod = {
	...dog,
	legs: 3
};
// {family: "Canine", furry: true, isPet: true, adorable: true, legs: 3}

const petClone = { ...pets };
petClone === pets; // false

// Math.max(..dogs) // Dogs is not iterable

// {...[9,778]}
// {0: 9, 1: 778}

const random = [ ...'hello', { ...houseCat } ];
// ["h", "e", "l", "l", "o", {…}]

pets.family = 'dogcats';
// {family: "dogcats", furry: true, isPet: true, adorable: true, isGrumpy: true, …}
dog.family;
// Canine
dog.family = 'newcanine';
pets.family; // dogcats

// You cant create a CLONE of objects props that are one level deep
const carDynamics = {
	engine: 'Volvo-3456',
	wheelProps: {
		num: 4,
		type: 'alloys'
	}
};

const truckDynamics = { ...carDynamics };
// Copied the reference of wheelProps into truckDynamics
// Why? This is one level deep
truckDynamics.wheelProps.num = 8;
carDynamics.wheelProps.num; // Chnaged from 4 to 8

// REST:: Collects things into one:: OPPOSITE of spread
// I need a function that can take upto 100 params
function sum(a, b, c, d, e, f, g, h, i, k, l, m) {
	// return arg[100] / arg[99]
}
// How do you do this

function sumRest(...args) {
	return arg[100] / arg[99];
}
// Every function has the keyword called arguments
// This is available
// Note: defining another variable called arguments overwrites this!!
// Note: When you pass other arguments as well, the arguments array will also contain those params
function sumArgs(x, y) {
	console.log(arguments);
	// return arguments.array.forEach(element => { });
	// Uncaught TypeError: Cannot read property 'forEach' of undefined
	// Its an array l;ike object
	const args = [ ...arguments ];
	console.log(args);
	// [2, 3, 4, 5, 6, 67] // x=2, y=3, rest are argumants
	console.log(arguments[0]); // 2 // is also 2
	console.log(x, y); // 2,3
}
sumArgs(2, 3, 4, 5, 6);
// [2, 3, 4, 5, 6, 67, callee: ƒ..]

// REST :: Creates a real array
// Syntax :: in a function arg you use ... and give it a name. This name is an actual array
function getTotal(...n) {
	return n.reduce((t, v) => t + v);
}
getTotal(4, 5, 6); // 15

const fullName = (first, last, ...props) => {
	console.log(props.length);
	return `${first} ${last} ${props}`;
};

const multiplyRest = (...nums) => nums.reduce((p, v) => p * v);
multiplyRest(3, 4, 5, 6); // 360

//const testRest = (...rest, h) => {return }
//Uncaught SyntaxError: Rest parameter must be last formal parameter

// DESCTRUCTURING ARRAYS
// Unpacking, unloading from a van each item at a time
const raceResults = [ 'mercedes williams', 'ferrari', 'red bull' ];

const [ pole, p1, p2 ] = raceResults;
// pole "mercedes williams"
// p1 "ferrari"
// p2 "red bull"
// raceResults ["mercedes williams", "ferrari", "red bull"]

const [ first, , third ] = raceResults;
// third "red bull"
// YOu can use REST for getting the remaining into a variable
const [ winner, ...others ] = raceResults;
// winner "mercedes williams"
// others ["ferrari", "red bull"]

// REST with Object
const runner = {
	firstN: 'Michael',
	lastN: 'Jordan',
	ratings: 9.9,
	title: 'Star'
};
const { firstN, lastN } = runner;
const { ratings } = runner;
// ratings: 9.9
const { ratings: star } = runner;
// star : 9.9

const nbaPlayer = {
	firstName: firstN,
	lastName: lastN
};
// fetch the rest
const { title, ...props } = runner;
// props {firstN: "Michael", lastN: "Jordan", ratings: 9.9}

// Nested destructuring: its possible
const results = [
	{
		first: 'joe',
		last: 'smith',
		country: 'Kenya'
	},
	{
		first: 'sharma',
		last: 'kumar',
		country: 'India'
	}
];

const [ { first: FirstName }, { country } ] = results;
// country: India
// FirstName: joe

// PARAM DESTRUCTURING
const print = ({ firstN, lastN }) => {
	//return person.firstN + person.lastN
	return firstN + lastN;
};

// "MichaelJordan"

const response = [ 'HTTP/1.1', '200 OK', 'application/json' ];

function fetchResponse([ protocol, statusCode, mimeType ]) {
	return statusCode;
}

fetchResponse(response);
// 200 OK

// OBJECT SHORTHAND PROPS: ES2015
const sum1 = 10,
	max1 = 25;
const ages = { sum1, max1 };

// SYNTAX ADDITION: COMPUTED PROPERTIES
const role1 = 'host';
const person1 = 'Joles keene';
const role2 = 'manager';
const person2 = 'Bryant Ooles';

const user1 = {};
user1[role1] = person1;
// {host: "Joles keene"}
const user2 = {
	[role2]: person2
};
// No need to create an empty object and later assign the key

let model = 'SUV';
let brand = 'Audi';
const myVehicle = {
	[model]: brand
};
//myVehicle
// {'SUV': 'Audi'}
model = 'Sedan';
brand = 'BMW';
myVehicle[model] = brand;
// {SUV: "Audi", Sedan: "BMW"}
let myVehicle2 = {
	[model]: brand,
	['20' + '25']: 2025,
	[1 + 6 + 9]: 'sixteen'
};
// myVehicle2 // {Sedan: 'BMW', '2025': 2025, 16: 'sixteen'}

// Create a new object with a new prop being added
function addNewProp(obj, k, v) {
	let copy = { ...obj };
	copy[k] = v;
	return copy;
}

myVehicle2 = addNewProp(myVehicle2, 'price', '$50000');
// {16: "sixteen", 2025: 2025, Sedan: "BMW", price: "$50000"}

const addNewPropV2 = (obj, k, v) => {
	return { ...obj, [k]: v };
};

myVehicle2 = addNewPropV2(myVehicle2, 'year', '2025')
// {16: "sixteen", 2025: 2025, Sedan: "BMW", price: "$50000", year: "2025"}


const sumValues = function (x,y) { return x + y }
const multilplyValues = function (x,y) { return x * y }
// ADD functions into a object
// Functions became methods of an object !!
const calculator = {
    sumValues,
    multilplyValues
}
// {sumValues: ƒ, multilplyValues: ƒ}
calculator.sumValues(2,3) // 5
calculator.multilplyValues(2,3) // 6

// METHOD SHORTHAND SYNTAX
const authv0 = {
    login : function () {
        console.log('There is no need for the : sytnax anymore')
    }
}
// {login: ƒ}
const auth = {
    login(){ console.log('logged you in')}
}
// {login: ƒ}

// THIS
this; // gives the reference of the current execution scope

function sayHi() {
    console.log('hi')
    console.log(this)
}

// this -> Window{...... ,sayHi: f sayHi(),....}

const greetMe = function() {
    console.log(this) // Window
}

greetMe() // Window

const person3 = {
    first: 'Charline',
    last: 'thereu',
    nickname: 'cherry',
    fullname() {
        console.log(this)
        console.log(`${this.first} ${this.last} AKA ${this.nickname}`)
    },
    getName() {
        console.log(this)
        const {first, last} = this
        return `${first} ${last}`
    },
    laugh: () => {
        console.log(this)
        console.log(`${this.nickname}`)
    }
}

person3.fullname() // {first: "Charline", last: "thereu", nickname: "cherry", fullname: ƒ}
// Not the window, the current object
person3.fullname() // {} .. Charline thereu AKA cherry

person3.getName() // "Charline thereu"

// Access to Window or the object its contained in

// INVOCATION CONTEXT
const getName = person3.getName;

// NOTE:::
// getName() // this: Window
// person3.getName() // this: person
// person3.laugh() // this: window

const x = [1,2,3]
const testThisArrow = () => {
 console.log(`Window object : ${this}`)

}
testThisArrow()

// When you use an arraow function to define a function, the this doesnot eqal to the current object
// NEVER use Arrow functions to define methods inside an object (unless you have no dependency on this)
const testThisObj = {
    a: 'a',
    b: 'b',
    m1() {
        return `${this.a} ${this.b}`
    },
    m2 : () => {
        return `${this.a} ${this.b}`
    }
}
// testThisObj.m1() // a b
// testThisObj.m2() // undefined undefined










