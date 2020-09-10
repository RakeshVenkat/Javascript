function* generator() {
	yield 10;
	yield 20;
	return;
}

const plainGen = generator();
console.log(plainGen.next()); // {value: 10, done: false}
console.log(plainGen.next()); // {value: 20, done: false}
console.log(plainGen.next()); // {value: undefined, done: true}
console.log(plainGen.next()); // {value: undefined, done: true}
// Properties and methods available by default
console.log(plainGen.toString()); // [object Generator]
console.log(plainGen.valueOf()); // generator {<closed>}
console.log(plainGen.toLocaleString()); // [object Generator]
console.log(generator.length); // 0
console.log(generator.name); // generator

// The iterator returned by the generator needs to be used to iteration!!
console.log(generator().next()); // {value: 10, done: false}
console.log(generator().next()); // {value: 10, done: false}

function* generatorWithArg(i) {
	for (let c = 0; c < 5; c++) {
		console.log('1.The value of i:', i);
	}
	yield i++;
	for (let c = 0; c < 5; c++) {
		console.log('2.The value of i:', i);
	}
	yield i + 10;
	for (let c = 0; c < 5; c++) {
		console.log('3.The value of i:', i);
	}
	yield i + 20;
	return;
}

const genArg = generatorWithArg(0);
console.log(genArg.next());
console.log(genArg.next());
console.log(genArg.next());
console.log();

// Generator defined in an expression
const myCoffeeDailyConsumption = function* () {
    yield '1 cup @ 11 am'
    yield '1 cup @ 3 pm'
    yield '1 cup probably @ 5 pm'
}
const coffeeIter = myCoffeeDailyConsumption()
console.log(coffeeIter.next()) // {value: "1 cup @ 11 am", done: false}
console.log(coffeeIter.next()) // {value: "1 cup @ 3 pm", done: false}
console.log(coffeeIter.next()) // {value: "1 cup probably @ 5 pm", done: false}

// Generator as an object method
const someObj = {
	customerId: 8776876,
	name: 'Rakesh Venkat',
	address: '1 cayman circuit, Lyndhurst, VIC 3975',
	status: 'Disconnected',
	modifiedDate: '6th July 2020',
	getStatus: function*() {
		yield `Connection has been ${this.status}`;
		setTimeout(() => {
			console.log('Called now, but!!');
			// yield `Change in status on ${this.modifiedDate}`;
			// Uncaught ReferenceError: yield is not defined
		}, 1000);
		yield `Change in status on ${this.modifiedDate}`;
	},
	*getCustomerDetails() {
		yield `Customer Id is: ${this.customerId}`;
		yield `Customer Name is: ${this.name}`;
	}
};

const statusIter = someObj.getStatus();
console.log(statusIter.next());
console.log(statusIter.next());

const customerIter = someObj.getCustomerDetails();
console.log(customerIter.next()); // {value: "Customer Id is: 8776876", done: false}
console.log(customerIter.next()); // {value: "Customer Name is: Rakesh Venkat", done: false}

// Usage within a class
class Cereals{
    *getStock() {
        yield '6 boxes of Corn Flakes'
        yield '4 boxes of Uncle Toby\'s'
        yield '5 packets of Rolled Oats'
    }
}

const myHomeStockInJuly = new Cereals()
const stockIter = myHomeStockInJuly.getStock()
console.log(stockIter.next())
console.log(stockIter.next())
console.log(stockIter.next())

// Generator as a computed property: Class
class Groceries {
    *[Symbol.iterator] () {
        yield `2 large packs of Popcorn`
        yield `1 pack of Hemp seeds`
    }
}
const groceriesJuly = new Groceries()
// console.log(groceriesJuly.next()) // Uncaught TypeError: groceriesJuly.next is not a function
// Array.from(iterator)
console.log(Array.from(groceriesJuly)) // (2) ["2 large packs of Popcorn", "1 pack of Hemp seeds"]

//// Generator as a computed property: Object
const Utilities = {
    *[Symbol.iterator] () {
        yield `24 pack tissue rolls`
        yield `2 packs of kitche tissue rolls`
    }
}
console.log(Array.from(Utilities)) // (2) ["24 pack tissue rolls", "2 packs of kitche tissue rolls"]

// Generators are not constructable
function normalShrubs(color) {
    this.color = color
}
const normalFunctionConstructor = new normalShrubs('green')
console.log(normalFunctionConstructor.color)

function *shrubs(color) {
    this.color = color
}
//const cannotCreateInstanceOfGen = new shrubs('green')
// main.js:113 Uncaught TypeError: shrubs is not a constructor
