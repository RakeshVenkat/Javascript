// marking a function as async: returns a promise
async function add(x, y) {
	if (isNaN(x) || isNaN(y)) throw 'Send a valid number';
	return x + y;
}

const sum = add(2, 3);
console.log(sum); // Promise {<resolved>: 5}

const sum1 = add('a', 3);
console.log(sum1); // Promise {<rejected>: "Send a valid number"}

const greet = async (name) => {
	return `Hi!! ${name}`;
};
const message = greet('Mr. Trump');
console.log(message); // Promise {<resolved>: "Hi!! Mr. Trump"}

// calling async functions need not be wrapped in an async function. that creates a chain otherwise?
// Unless you want to use the await keyword !!!
const callAsyncFunc = () => {
	add(2,3).then(val => console.log(val))
	greet('Mr. Universe!!').then(val => console.log(val))
}
callAsyncFunc()

// How do you handle these? use: .then() and .catch()
sum.then((val) => console.log(val)).catch((err) => console.error(err));
sum1.then((val) => console.log(val)).catch((err) => console.error(err));
message.then((val) => console.log(val)).catch((err) => console.error(err));

// Why is await needed? The rest of the code is not fired till the first await is complete.
const bodyEl = document.body;
function changeBackground(el, color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			el.style.backgroundColor = color;
			resolve(); // resolve the promise after the delay
		}, delay);
	});
}

// ??!! You donot see the colors: pink, red, violet, green. 
 changeBackground(bodyEl, 'pink', 2000)
 changeBackground(bodyEl, 'red', 2000)
 changeBackground(bodyEl, 'violet', 2000)
 changeBackground(bodyEl, 'green', 2000)
 changeBackground(bodyEl, 'purple', 2000)

const lightShow = async () => {
	await changeBackground(bodyEl, 'pink', 5000);
	await changeBackground(bodyEl, 'red', 5000);
	await changeBackground(bodyEl, 'violet', 5000);
	await changeBackground(bodyEl, 'green', 5000);
	await changeBackground(bodyEl, 'purple', 5000);
};

// ??!! All colors are seen. One after another
lightShow();

//////////// AXIOS returns a promise: Need internet to run below!!
axios
	.get('http://swapi.dev/api/planets')
	.then((res) => {
		console.log('----------Success in getting planets via Promise');
		res.data.results.forEach((element) => {
			console.log(element.name);
		});
	})
	.catch((err) => {
		console.error('ERROR!!', err);
	});
// using Await you get a synchronous code pattern
const getResource = async (url) => {
	try {
		const res = await axios.get(url);
		console.log('----------Success in getting planets via Async - Await');
		return res.data
	//	 res.data.results.forEach((element) => {
	//		console.log(element.name);
	//	}); 
	} catch (err) {
		console.error('ERROR!!', err);
	}
};

let results = []
const response = getResource('http://swapi.dev/api/starships')
	.then(res => {results = res})
	.catch(err => err);
console.log(':::',results)


async function getPokemonSequentially() {
	console.log('-----------get pokemon data sequentially using await -----------');
	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
	console.log('Done1');
	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
	console.log('Done2');
	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log('Done3');
	console.log('Pokemon data  1', poke1.data.name);
	console.log('Pokemon data  2', poke2.data.name);
	console.log('Pokemon data  3', poke3.data.name);
}
getPokemonSequentially();

///////////////////// await promise
// Note: all the three network requests were fired in parallel
async function getPokemonAbilityInParallel() {
	console.log('-----------get pokemon ability data sequentially using await -----------');
	const prom1 = axios.get('https://pokeapi.co/api/v2/ability/1');
	console.log(prom1);
	const prom2 = axios.get('https://pokeapi.co/api/v2/ability/2');
	console.log(prom2);
	const prom3 = axios.get('https://pokeapi.co/api/v2/ability/3');
	console.log(prom3);
	const ability1 = await prom1;
	const ability2 = await prom2;
	const ability3 = await prom3;

	console.log('ability1::', ability1.data.name);
	console.log('ability2::', ability2.data.name);
	console.log('ability3::', ability3.data.name);
}
getPokemonAbilityInParallel();

//////////////// Promise.all()
// Note: all the three network requests were fired in parallel
const getPokemonTypesInParallel = async () => {
	const prom1 = axios.get('https://pokeapi.co/api/v2/type/1')
	const prom2 = axios.get('https://pokeapi.co/api/v2/type/2')
	const prom3 = axios.get('https://pokeapi.co/api/v2/type/3')

	const [type1, type2, type3] = await Promise.all([prom1, prom2, prom3])

	console.log('Type info  1::', type1.data.name)
	console.log('Type info  2::', type2.data.name)
	console.log('Type info  3::', type3.data.name)
}

getPokemonTypesInParallel()