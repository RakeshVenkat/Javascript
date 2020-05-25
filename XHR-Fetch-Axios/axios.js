// Axios is an external library
console.log(`RAW RESULT::`);
axios.get('https://swapi.dev/api/vehicles').then((res) => console.log(res.data)).catch((err) => console.error(err));

// Chaining multiple requests

printResults = (data) => {
	console.log('FIRST/NEXT 10 RESULTS:::::');
	data.results.forEach((element, i) => {
		console.log(`${i}:: ${element.name}`);
	});
    //return data.next;     //Works as well
    return Promise.resolve(data.next) // Not sure why this is needed
};

const fetchResource = (url) => axios.get(url)

const handleError = (err) => {
	console.error(`ERROR!! ${err}`);
};

fetchResource('https://swapi.dev/api/vehicles')
    .then(({ data }) => printResults(data))
    .then(url => fetchResource(url))
    .then(({ data }) => printResults(data))
    .then(url => fetchResource(url))
    .then(({ data }) => printResults(data))
    .then(url => fetchResource(url))
    .then(({ data }) => printResults(data))
    .catch(handleError);
