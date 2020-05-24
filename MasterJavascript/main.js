/*
if (1 === 1) {
	console.log('this runs');
}

// ex2
let rating = 2;

if (rating === 3) console.log('SUPERSTAR');
else if (rating === 2) console.log('MEETS EXPECTATIONS');
else if (rating === 1) console.log('NEEDS IMPROVEMENT');
else console.log('INVALID RATING!!');

// Example 3
let num = 38;

if (num % 2 === 0) console.log('even number');
else console.log('odd number');

// Example 4: nesting of conditionals
// Password should be min length of 6 chars without spaces
let password = 'hellokitty';

if (password.length >= 6) {
	if (password.indexOf(' ') !== -1) {
		console.log('Password cannot contain white spaces.');
	} else {
		console.log('Thats a valid password :)');
	}
} else console.log('Password must have atleast 6 characaters!!');

// Truthy or Falsy
// null, undefined, '', 0 => Falsy
let mystery = undefined;

if (mystery) console.log('Truthy');
else console.log('Falsy');

// Ex:
let isLoggedIn = undefined;
if (isLoggedIn) console.log('You are logged in');
else console.log('Please Log In');

// Logical Operators : && || !
console.log(1 < 4 && 'a' === 'a');
null && console.log('This doesnt run');
null || console.log('This does run');

password = 'chikenGal';
if (password.length >= 6 && password.indexOf(' ') === -1) console.log('Valid password');
else console.log('Invalid pasword');

// Number gusessing
num = 3;

if (num >= 1 && num <= 10) console.log('Number is between 1 and 10');
else console.log('Number is not bewteen 1 and 10');

// Under 6 yrs or over 65 tickets are free
let age = 30;

if (age < 6 || age >= 65) console.log('Tickets are free');
else console.log('You must pay!!');

// Check colors are one of purple, orchid, violet

let color = 'blue';

if (color === 'purple' || color === 'orchid' || color === 'violet') console.log('Great choice');
else console.log("That's not a good choice!! wanna try again?");

// Not
if (!isLoggedIn) console.log('Hello, guest!!');

let flavour = 'Watermelon';
if (flavour !== 'Grape' && flavour !== 'Cherry') console.log('We dont have that flovour');
if (!(flavour === 'Grape' && flavour === 'Cherry')) console.log('We dont have that flovour');

// Operator precedence
let x = 7;
console.log(x == 7 || (x === 3 && x > 10));
console.log((x == 7 || x === 3) && x > 10);
// Look at operator precedence in MDN. Just use paranthesis
// Ex: () , !, &&, ||

// Switch
let day = 'TUESDAY';

switch (day) {
	case 'MONDAY':
		console.log('MONDAY');
	case 'TUESDAY':
		console.log('TUESDAY');
	case 'WEDNESDAY':
		console.log('WEDNESDAY');
	case 'THURSDAY':
		console.log('THURSDAY');
	case 'FRIDAY':
		console.log('FRIDAY');
	case 'SATURDAY':
		console.log('SATURDAY');
	case 'SUNDAY':
		console.log('SUNDAY');
	default:
		console.log('INVALID DAY');
}

// sad face || happy face => yellow
let emoji = 'sad face';
switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
	default:
		console.log('unknown!!');
}

// TERNARY OPERATOR : if and else in one single line of code
// condition ? expIfTrue : expIfFalse
// 3 pieces : hence ternary

num = 2;
num === 7 ? console.log('lucky') : console.log('unlucky');

let status = 'offline';
color = status === 'offline' ? 'red' : 'green';
console.log(status, color);

// ARRAYS
let students = [];

colors = [ 'red', 'orange', 'purple' ];

let shopppingList = [ 'cereal', 'cheese', 'ice' ];

let latto = [ 45, 12, 23, 25, 34 ];

// Put whatever you want in JS
let myCollection = [ 12, 'dog', null, true, NaN ];

console.log(myCollection);
console.log(colors[0], colors[1], colors[2], colors[3]);
console.log(colors.length);
console.log(colors[colors.length - 1]);

// Unlike a string, arrays are mutable
console.log(shopppingList);
shopppingList[0] = 'milk';
console.log(shopppingList);
shopppingList[shopppingList.length] = 'Tomatoes';
shopppingList[shopppingList.length] = 'Potatoes';
console.log(shopppingList);
shopppingList[0] = 'Bread';
console.log(shopppingList);

// Push and Pop - End of array
let topSongs = [ 'First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life on Mars' ];
console.log(topSongs.push('Fortunate Son'));
console.log(topSongs);
topSongs.push(true);
console.log(topSongs.pop());
console.log(topSongs);
const nextSong = topSongs.pop();
console.log(nextSong);
console.log(topSongs);

// Shift and Unshift - Start of array
let dishesToDo = [ 'big platter' ];
console.log(dishesToDo.unshift('large plate'));
console.log(dishesToDo.unshift('small plate'));
console.log(dishesToDo.unshift('cereal bowl'));
console.log(dishesToDo.unshift('mug'));
console.log(dishesToDo);
console.log(dishesToDo.shift());
console.log(dishesToDo.shift());
console.log(dishesToDo.shift());
console.log(dishesToDo.shift());
console.log(dishesToDo.shift());
console.log(dishesToDo);
console.log(dishesToDo.unshift('fork', 'knife'));
console.log(dishesToDo.unshift('small spoon'));
console.log(dishesToDo.unshift('large spoon'));
console.log(dishesToDo);
console.log(dishesToDo.unshift('cutting board', 'vessel'));
console.log(dishesToDo);
// Order of adding multiple elements with unshift matters !!

// Concat
let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'bruseel sprouts' ];
let meats = [ 'steak', 'chicken breasts' ];
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
console.log(fruits);
console.log(veggies);
let allFoods = fruits.concat(veggies, meats);
console.log(allFoods);

// Includes: Yes or No: Boolean: Present??
let ingredients = [ 'water', 'corn starch', 'flour', 'brown sugar', 'shrimp', 'eel', 'butter' ];

console.log(ingredients.includes('fish'));
console.log(ingredients.includes('corn starch'));
console.log(ingredients.includes('corn starch', ingredients.length / 2));

if (ingredients.includes('flour')) {
	console.log('I am gluten free. I cant eat that!!');
}

// indexOf(): Number : -1 if not present: Where??
console.log(ingredients.indexOf('flour'));
console.log(ingredients.indexOf('flour', ingredients.length));

// Reverse: Mutates original array
let letters = [ 'T', 'C', 'E', 'P' ];
letters.reverse();
console.log(letters);

// Join : Spits out a String from array
console.log(letters.join());
console.log(letters.join('&'));
console.log(letters.reverse().join());
console.log([ 1, 2, 3, true ].join());

// slice: Doesnt mutate the original one
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
console.log(animals.slice(1, 4));
let swimmers = animals.slice(0, 3);
console.log(swimmers);
let mammals = animals.slice(3, 4);
console.log(mammals);
let reptiles = animals.slice(4, 5);
console.log(reptiles);
let quadrapeds = animals.slice(-3);
console.log(quadrapeds);
let clone = animals.slice();
console.log(clone);

//splice: Removes/ Replaces/ Add within: Mutates the original array
// start, deleteCount, replace
console.log(animals.splice(1, 0, 'octopus'));
console.log(animals); // Insert
console.log(animals.splice(3, 2));
console.log(animals); // remove
console.log(animals.splice(2, 0, 'snake', 'frog'));
console.log(animals);
console.log(animals.splice(0, 2, 'Shark', 'Octopus'));
console.log(animals);

// Sort
let people = [ 'Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];
console.log(people);
console.log(people.sort());

let numbers = [ -4, 6, 99, 78, 100000 ];
console.log(numbers.sort());

// Reference Types: refrence of array in memory is stored

let nums = [ 1, 2, 3, 9, 10 ]; // nums = 12564256362
let otherNums = nums; //otherNums = 12564256362
nums.push(23);
console.log(otherNums);
console.log(otherNums.pop());
console.log(otherNums.pop());
console.log(otherNums.pop());
console.log(nums);

// const and arrays: use const for all arrays henceforth
// Change the internals of an array, but not point to a new array
const PI = 3.14;
//PI=45
const foods = [ 'candy' ];
console.log(foods);
foods.unshift('milk', 'chocolate'); // Allowed
foods.pop();
foods.pop();
foods.pop();
console.log(foods);
// foods = ['berry']  // Not allowed !!

// NEST arrays
const colorVariants = [ [ 'red', 'crimson' ], [ 'orange', 'dark orange' ] ];

// Why use a nested array when there is no order??
const animalPairs = [ [ 'doe', 'buck' ], [ 'ewe', 'ram' ], [ 'peahen', 'peacock' ] ];

console.log(animalPairs[0][1]);
animalPairs[0][1] = 'stag';
console.log(animalPairs[0][1]);

// Example: nest a game: tic-tac-toe : when there is order
const board = [ [ '0', null, 'X' ], [ null, 'X', '0' ], [ 'X', '0', null ] ];

console.log(board[1][1]);

// Objects
const fitBitData = {
	totalSteps: 308727,
	totalMiles: 211.7,
	avgCalorieBurn: 5711,
	workoutsThisWeek: '5 of 7',
	avgGoodSleep: '2:13'
};

console.log(fitBitData);
console.log(fitBitData.avgCalorieBurn);
// The keys are converted to strings

fitBitData[45] = '45';

console.log(fitBitData[45]);
// The trailing comma is optional
let data = { a: 1, b: 2, c: 3 }; // There can be a comma at the end. This is default
console.log(data);

// All keys are concverted to string
// 100 => '100', 16 => '16'
const myNumbers = {
	100: 'one hundred',
	16: 'sixteen',
	'67 trombones': 'great song'
};

//console.log(myNumbers.100) // you cant access it this way
console.log(myNumbers[100]); // one hundred
console.log(myNumbers['100']); // one hundred
console.log(myNumbers['67 trombones']);

const palette = {
	red: 'red',
	green: 'green',
	blue: 'blue'
};
// Use a variable or dynamic value use []
console.log(palette['yellow']); // undefined
console.log(palette['r' + 'e' + 'd']); // red

const userReviews = {};
userReviews['queenbee49'] = 4.0; // Initialize
userReviews.mrsmith = 3.5;
console.log(userReviews);

userReviews.queenbee49 += 2; // Access and update
userReviews.mrsmith++;
console.log(userReviews);

// Arrays and Objects
const student = {
	firstName: 'David',
	lastName: 'Jones',
	strengths: [ 'Music', 'Art' ],
	exams: {
		midTerm: 92,
		final: 80
	}
};
const avg = (student.exams.midTerm + student.exams.final) / 2;

console.log(student, avg);

const shoppingCart = [
	{
		product: 'Jenga Classic',
		price: 6.88,
		quantity: 1
	},
	{
		product: 'Echo Dot',
		price: 29.99,
		quantity: 3
	},
	{
		product: 'Fire Stick',
		price: 39.99,
		quantity: 2
	}
];

const gameBoard = {
	player1: { userName: 'Blue', alias: 'X' },
	player2: { userName: 'Muffins', alias: 'Y' },
	board
};

console.log(gameBoard);

console.log(palette);
const palette2 = palette; // Reference to same memory location!!
palette2.blue = 'yellow';
console.log(palette);

// Tip: Use const for both arrays and objects!!

// Equality
let myNums = [ 1, 2, 3 ];
let newMystery = [ 1, 2, 3 ];
console.log(myNums === newMystery); // false // Comparing the addresses

let moreNums = myNums;
console.log(moreNums === myNums); // true // Comparing the addresses

const user = {
	userName: 'CherryGarcia',
	email: 'garcia@gmail.com',
	notifications: [ 'message', 'alert' ]
};

if (user.notifications.length) console.log(user.notifications);

console.log({} === {}); // false
console.log({ a: 1 } === { a: 1 }); // false

// Loops
console.log('Perfect Squares:');
for (let i = 1; i < 21; i++) {
	console.log(`${i}*${i}= ${i * i}`);
}

console.log('Counting down by decrements of 25...');
for (let i = 200; i > -1; i -= 25) {
	console.log(`${i}`);
}

console.log('The table of 13!!');
let table = 13;
for (let index = 1; index < 11; index++) {
	console.log(`${table} * ${index} = ${index * table}`);
}

const examScores = [ 98, 87, 56, 89, 76 ];
for (let i = 0; i < examScores.length; i++) console.log(examScores[i]);

for (const iterator of examScores) {
	console.log(iterator);
}

const myStudents = [
	{
		firstName: 'Zeus',
		grade: 86
	},
	{
		firstName: 'Artemis',
		grade: 88
	},
	{
		firstName: 'Hera',
		grade: 78
	},
	{
		firstName: 'Appolo',
		grade: 98
	}
];

for (let i = 0; i < myStudents.length; i++)
	console.log(`${myStudents[i].firstName} is in grade ${myStudents[i].grade}`);
// Loop backwards
const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i > -1; i--) {
	console.log(word[i]);
	reversedWord += word[i];
	console.log(reversedWord);
}

// Choosing i for inner loop is confusing, dont use it!!
for (let i = 0; i < 11; i++) {
	console.log('OUTER LOOP:', i);
	for (let j = 10; j > -1; j -= 2) console.log('  INNER LOOP:', j);
}

const myGameBoard = [ [ 4, 32, 8, 4 ], [ 64, 8, 32, 2 ], [ 8, 32, 16, 4 ], [ 2, 8, 4, 2 ] ];

let totalScore = 0;
for (let i = 0; i < 4; i++) {
	let row = myGameBoard[i];
	console.log(row);
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
		totalScore += row[j];
	}
}
console.log(totalScore);


// While loop: dont know how many times you would loop
let j=0
while (j<10){
	console.log(j)
	j++
}

let noOfLives = 200
while(noOfLives> 0 || totalScore< 2048){
//
}
*/
// Number guessing game
console.log('The number guessing game!!');
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
console.log(`Guess the target: ${target}`);
while (guess !== target) {
	guess = Math.floor(Math.random() * 10);
	console.log(`GUESS:${guess}. TARGET: ${target}`);
}
console.log('Congrats. You got it :)');

// The below is fine, but it looks misleading or non intuitive
guess = Math.floor(Math.random() * 10);
while (true) {
	guess = Math.floor(Math.random() * 10);
	if (guess === target) break;
	console.log(`GUESS:${guess}. TARGET: ${target}`);
}
console.log('Congrats. You got it :)');

// For-of loops
console.log('Iterating over items');
let subreddits = [ 'soccer', 'popheads', 'crime', 'books' ];
for (const eachItem of subreddits) {
	console.log(`${eachItem}`);
}

for (let char of 'peekaboo') {
	console.log(` ${char.toUpperCase()}`);
}

// When for-of does help
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(i, sum);
}
// Cleaner and easier
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) sum += num;
	console.log(sum);
}

// When it doesnt help
const words1 = [ 'mail', 'milk', 'straw' ];
const words2 = [ 'box', 'shake', 'berry' ];
for (let eachWord1 of words1) {
	for (let eachWord2 of words2) {
		console.log(`${eachWord1}${eachWord2}`);
	}
}
console.log('Works now..');
for (let i = 0; i < words1.length; i++) {
	for (let j = 0; j < words2.length; j++) {
		if (i == j) console.log(`${words1[i]}${words2[j]}`);
	}
}

const movieReviews = {
	Arrival: 9.5,
	Alien: 8.9,
	Sally: 7.8,
	John: 6.7
};
console.log('using for-in...');
for (let name in movieReviews) {
	console.log(name, movieReviews[name]);
}
console.log('Using for-of with iterable...');
for (let name of Object.keys(movieReviews)) {
	console.log(name, movieReviews[name]);
}

const ratings = Object.values(movieReviews);
let avgRating = 0;
for (let r of ratings) {
	avgRating += r;
}
avgRating /= ratings.length;
console.log(`Average rating ${avgRating}`);

// for-in using array : Dont use it within array just because you can
for (let k in [ 88, 98, 67, 65 ]) {
	console.log(k);
}

// Functions
// 1) Define and 2) Run
// define the function
function funcName() {
	// function body
}
// Run the function
funcName();
// define the function
function grumpus() {
	console.log('ugh.. you there..');
	console.log('Why do you ping me all teh time');
	console.log('Go away!!');
}
// Run the function
grumpus();
grumpus();

grumpus; // you are not executing it

console.log(typeof grumpus);
console.log(typeof grumpus());
// defining function
function rollDie() {
	let roll = Math.ceil(Math.random() * 6);
	return roll;
}
rollDie();
// calling functions within functions
function throwDice() {
	console.log(rollDie());
	console.log(rollDie());
	console.log(rollDie());
	console.log(rollDie());
	console.log(rollDie());
	console.log(rollDie());
}
throwDice();

function greet(name) {
	console.log(`hi ${name}`);
}
greet('Tanya');
greet('Rakesh');
greet();

function sum(x, y) {
	console.log(x + y);
}
function divide(x, y) {
	console.log(x / y);
}

sum(1, 4);
divide(1, 4);
sum(2, 3, 4, 5); // Send more paramas -> ok
divide('1', '4'); // Send different type
divide(1); // b will be undefined -> ok

// return statements
function conatinsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') return true;
	}
	return false;
}

console.log(conatinsPurple([ 'purple', 'pink', 'violet' ]));

// atleast 8 chars, no space, cvant conatin username
function isValidPassword(password, username) {
	return password.length > 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1;
}

console.log(isValidPassword('abc', 'ananymous99'));
console.log(isValidPassword('abc def', 'ananymous99'));
console.log(isValidPassword('abcananymous99', 'ananymous99'));
console.log(isValidPassword('asjhdasjhdjksah', 'ananymous99'));
console.log(isValidPassword('', 'ananymous99'));

/* function isValidPasswordV2(password, userName){
	const isTooShort = password.length < 8
	const hasSpaces = password.indexOf(' ') === -1
	const hasUserName = password.indexOf(userName) === -1
	if(isTooShort || hasSpaces || hasUserName) return false
	return true
}
console.log(isValidPasswordV2('asjhdasjhdjksah', 'ananymous99')) */

function average(array) {
	if (array.length === 0) return 0;
	let sum = 0;
	for (let num of array) {
		sum += num;
	}
	return sum / array.length;
}

console.log(average([ 0, 50 ]));
console.log(average([]));
console.log(average([ 75, 76, 80, 95, 100 ]));

const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];
function pangram(sentence) {
	sentence = sentence.toLowerCase();

	for (const eachLetter of letters) {
		if (sentence.indexOf(eachLetter) === -1) return false;
	}
	return true;
}

console.log(pangram('The quick brown fox jumps over the lazy dog'));
console.log(pangram('Pack my box with five dozen liquor jugs'));

function pangramV2(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (const eachChar of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(eachChar)) return false;
	}
	return true;
}

console.log(pangramV2('The quick brown fox jumps over the lazy dog'));
console.log(pangramV2('Pack my box with five dozen liquor jugs'));

//
//
function getCards() {
	const cards = [];
	const cardValue = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q' ];
	const suit = [ 'clubs', 'spade', 'hearts', 'diamonds' ];
	for (const eachCardValue of cardValue) {
		for (const eachSuit of suit) {
			cards.push({
				value: eachCardValue,
				suit: eachSuit
			});
		}
	}
	return cards;
}
console.log(getCards());
const randomCardNum = Math.floor(Math.random() * 52);
console.log(getCards()[randomCardNum]);

// SCOPE : variable visibility
// 1) Function scope
function lol() {
	let person = 'Tom';
	const age = 45;
	var color = 'red';
	console.log(person, age, color);
}
lol();
// console.log(person, age, color) // NOT available

function changeColor() {
	let color = 'purple';
	const age = 10;
	console.log(age, color);
}
changeColor();

let bird = 'mandarin ducks';
function birdWatch() {
	let bird = 'peacock';
	console.log(bird);
}
birdWatch();
console.log(bird);

// 2) Block scope: Behaviour of var vs let, const

if (true) {
	let animal = 'eel';
	const bird = 'peacock';
	console.log(animal, bird);

	var reptile = 'Dragon lizard';
	console.log(reptile);
}
//console.log(animal) // Syntax Error
console.log(reptile);

let animals = [ 'grizzly bear', 'panda bear', 'spectacled bear' ];
var index = 1;
for (var index = 0; index < animals.length; index++) {
	const element = animals[index];
	console.log(element);
}
console.log(animals[index]); // not panda bear, its undefined

// OMG: you can do this withj var
var a = 1;
var a = 2;

// NOt with let or const
let b = 1;
// let b =2 ;

// You can access the let or const in the nested blocks
// NOTE: You have access AND you can change that within a nested block!!
console.log('let can be accessed and CHANGED within nested blocks!! HAVOC??');
let c = 1;
if (true) {
	c = 2;
	if (true) {
		c = 3;
		console.log('  ', c);
	}
	console.log(' ', c);
}
console.log(c);

console.log('let can be redeclared within nested blocks and it behaves as a new variable');
let d = 1;
if (true) {
	let d = 2;
	if (true) {
		let d = 3;
		console.log('  ', d);
	}
	console.log(' ', d);
}
console.log(d);

console.log('const can be redeclared within nested blocks and it behaves as a new variable');
const e = 1;
if (true) {
	const e = 2;
	if (true) {
		const e = 3;
		console.log('  ', e);
	}
	console.log(' ', e);
}
console.log(e);

// With var, its the same variable and hence no block scope
console.log('var can be redeclared or reused but is of no USE!! Look at the HAVOC here');
var f = 1;
if (true) {
	f = 2;
	if (true) {
		var f = 3;
		console.log('  ', f);
	}
	console.log(' ', f);
}
console.log(f);

// 3) LEXICAL Scope: NESTED functions having access to variables from its parent function
// Inner functions are lexically bound to its outer function
// A function looks for a variable in its scope, else looks for one in its parent
// if it doesnt find in its parent it goes to its parent's parent and so on.
function outer() {
	let movie = 'Amadeus';
	function inner() {
		let actor = 'Brendon';
		//let movie = "The Shining"
		console.log(movie.toUpperCase());
		function extraInner() {
			console.log(actor, movie);
		}
		extraInner();
	}
	//console.log(actor)
	inner();
}
outer();

// FUNCTION EXPRESSION: In JS a function is an Object
// A function can be stored in a variable
const s = 1 + 2;
console.log(`An expression is s = a + b using the equals operator : ${s}`);
const emp = {};
console.log(`here you are assigning an object to ${emp} using the = operator`);

function add(x, y) {
	return x + y;
}
console.log(`This is a typical function definintion and invocation: ${add(4, 5)}`);

const sumMe = function(x, y) {
	return x + y;
};
console.log(`Here you define a fn and assign it to variable. use the variable to call the fn : ${sumMe(4, 5)}`);

console.dir(sumMe);

const product = function multiply(a, b) {
	return a * b;
};
console.log(product(4, 5));
//console.log(multiply(4,5)) // Uncaught ReferenceError: multiply is not defined

// IIFE: Immediately invoked function expression
(function() {
	console.log('IIFE:: The fn is invoked');
})();

// FUNCTIONS are OBJECTS !!
// Add functions within an array and then loop over and execute them!!
function add1(a, b) {
	return a + b;
}
function sub1(a, b) {
	return a - b;
}
function mul1(a, b) {
	return a * b;
}
const ops = [ add1, sub1, mul1 ];
const results = ops.map((fn) => fn(2, 3));
console.log(results);

const thing = {
	doSomething: add1
};
console.log(thing.doSomething(2, 3));
thing.doSomething = mul1;
console.log(thing.doSomething(2, 3));
thing.doSomething = sub1;
console.log(thing.doSomething(2, 3));

// HIGHER ORDER FUNCTIONS
// 1) Take one or more functions and call it
function laugh() {
	console.log('Laugh............');
}
function cry() {
	console.log('Cry :((((((((((((');
}
function callNTimes(n, fn) {
	for (let i = 0; i < n; i++) fn();
}
callNTimes(5, laugh);
callNTimes(2, cry);

//
function pickOne(fn1, fn2) {
	const rand = Math.floor(Math.random() * 10);
	if (rand < 5) {
		fn1();
	} else fn2();
}
pickOne(laugh, cry);

// 2) Return a different function
// Creates a function : Factory for fucntion creation
function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

let triple = multiplyBy(3); // Fun to mult by 3
console.log(triple(2));
console.log(triple(4));
console.log(triple(12));
console.log(triple(-45));

let double = multiplyBy(2); // fun to mul by 2
console.log(double(6));
console.log(double(16));

let halved = multiplyBy(0.5); // fn to mul by 0.5
console.log(halved(78));
console.log(halved(90));

function makeBetweenFunc(x, y) {
	return function(num) {
		return num > x && num < y;
	};
}

let isValidMonth = makeBetweenFunc(0, 12);
let seniorCitizen = makeBetweenFunc(65, 80);
const isNiceWeather = makeBetweenFunc(20, 35);
console.log(isValidMonth(7));
console.log(isValidMonth(25));

console.log(seniorCitizen(7));
console.log(seniorCitizen(25));
console.log(seniorCitizen(67));

console.log(isNiceWeather(-2));
console.log(isNiceWeather(25));

function isGreatorThan(num) {
	return function(x) {
		return x > num;
	};
}
const isAdult = isGreatorThan(18);
console.log(isAdult(25));
console.log(isAdult(17));

const violatingSpeedLimit = isGreatorThan(60);
console.log(violatingSpeedLimit(56));
console.log(violatingSpeedLimit(100));

// Without a HOC, this is how you would implement it !!
function checkBasedOnType(type, num, threshold) {
	if (type === 'isAdult') return num > threshold;
	if (type === 'speedLimit') return num > threshold;
}

console.log(checkBasedOnType('isAdult', 7, 18));
console.log(checkBasedOnType('isAdult', 25, 18));
console.log(checkBasedOnType('speedLimit', 56, 60));
console.log(checkBasedOnType('speedLimit', 100, 60));

// Callbacks: function is sent to another function and its called within another fn, its a callback
setTimeout(function() {
	console.log('its time to call me');
}, 10000);

setTimeout(grumpus, 5000);

const cb = grumpus;
document.getElementById('btn').addEventListener('click', cb);
document.getElementById('btn').addEventListener('click', function() {
	alert('WHY DID YOU CLICK ME!!');
});

// HOISTING
var animal1 = 'bear';
console.log(animal1);
console.log(animal2); // undefined. NO ERROR!!
var animal2 = 'tiger';
//console.log(animal3) // Uncaught ReferenceError: animal3 is not defined
// Solution: declare first and then use it with var

// LET is not hoisted
//console.log(bird2) // Uncaught ReferenceError: Cannot access 'bird2' before initialization
let bird2 = 'peahen';

// Functions are HOISETD: Similar to moving all function declarations to top of file
howl();
function howl() {
	console.log('Hooooo');
}

// With function expression, functions are NOT HOISTED
//hoot() // main.js:1067 Uncaught TypeError: hoot is not a function
var hoot = function() {
	console.log('oooooooo');
};
hoot();

//waa() // Uncaught ReferenceError: Cannot access 'waa' before initialization
let waa = function() {
	console.log('aaaa');
};
waa();

// ARRAY CALLBACKS
console.log('forEach: get the index and run some code for each element');
const myNewNums = [ 20, 65, 24, 67 ];
console.log(
	myNewNums.forEach((e, i) => {
		console.log(i, e > 60);
	})
);

// for-of , foreach , for loop -> all equivalents
const tripler = myNewNums.map(e=> e*3)
console.log(tripler)

const oddEvenNums = myNewNums.map(value => {
	return {
		type: value % 2 === 0 ? 'even': 'odd',
		value
	}
})
console.log(oddEvenNums)

const texts = ['rofl', 'lol', 'omg', 'rsvp']
const upperTexts = texts.map(t => t.toUpperCase().split('').join('.'))
console.log(upperTexts)

// ARROW FUNCTIONS : NOT IN IE ONLY
const employee = {
	name: 'Rakesh',
	display: function() {
		console.log(`${this.name} is a web developer`)
	}
}

function addParams(e) {
	e.salary = '$130000'
}

addParams(employee)
console.log(employee.salary)

addDesignation = e => e.designation = 'Sr sft engineer'
addDesignation(employee)
console.log(employee.designation)

const nums = [1,2,3,4,5,6,7,8,9]
const doubles = nums.map(n => n*2)
console.log(doubles)

const parityList = nums.map(n => n%2 === 0 ? 'even': 'odd')
console.log(parityList)

// Array find
let movies = [
	'The phantom',
	'Mummy',
	'Mummy returns'
]

console.log(movies.find(m => m.startsWith('Mummy')))

// Filter: rteurns a new array with the filtered list
console.log(movies.filter(m => m.startsWith('Mummy')))
console.log(nums.filter(n => n%2===0))

const books = [
	{
		author: 'Shakespere',
		rating: 4.3,
		title: 'Hello',
		genre: 'fantasy'
	},
	{
		author: 'blah',
		rating:2.3,
		title: 'gone with wind',
		genre: 'fantasy'
	},
	{
		author: 'Jones',
		rating: 9.8,
		title: 'blah blah',
		genre: 'fiction'
	}
]
const highratedBooks = books.filter(b=> b.rating>5)
console.log(highratedBooks)

const fantasyBooks = books.filter(b => b.genre === 'fantasy')
console.log(fantasyBooks)

// Some and Every: Boolean
// Every: checks for all elements
// Some: returns when the first elemnt match the check
const words = ['dog', 'cat', 'bat']
let allWordsHave3letters = words.every(w => w.length === 3)
console.log(allWordsHave3letters)

words.push('elephant')
const atleastOneWordHasMoreThan3letters = words.some(w => w.length>3)
console.log(atleastOneWordHasMoreThan3letters)

allWordsHave3letters = words.every(w => w.length === 3)
console.log(allWordsHave3letters)

// Sort: mutates original array
// with a,b if a -b is -ve ; no change
// with a-b being +ve, the values is swapped
nums.sort((a,b) => b-a)
console.log(nums) // descending

books.sort((a,b) => b.rating - a.rating)
console.log(books)

const prices = [8.9, 6.78, 67.99, 45.99]
const ascPrices = prices.slice().sort((a,b) => a-b); console.log(ascPrices)
const descPrices = prices.slice().sort((a,b) => b-a); console.log(descPrices)

// reduce: Takes multiple to one value
// Examnple: sum all values in array into one total
const numsR = [3,5,7,9,11]
const total = numsR.reduce((sum, eachVal) => { return sum + eachVal}, 10) 
console.log(total)
// 3, 5 => 8
// 8, 7 => 15
// 15, 9 => 24
// 24, 11 => 35

let grades = [89,96, 58, 78, 90]
// finding the max value
const maxGrade = grades.reduce((max, el) => max > el? max: el)
console.log(maxGrade)
const minGrade = grades.reduce((max, el) => max < el? max: el)
console.log(minGrade)

const maxGrade1 = grades.reduce((max, el) => Math.max(max, el))
console.log(maxGrade)
const minGrade1 = grades.reduce((max, el) => Math.min(max, el))
console.log(minGrade)

// 3rd arg can be the initial value.
// Ex: for summing all values you can start with initial valueof 10
