console.log('--------------USING FETCH-----------------');

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('https://swapi.dev/api/planets')
// 	.then((response) => {
//         if(!response.ok) throw new Error(response.status)
// 		return response.json();
// 	})
// 	.then((data) => {
//         console.log('FIRST/NEXT 10 RESULTS:::::')
//         data.results.forEach((element, i) => {
//             console.log(`${i}:: ${element.name}`)
//         });
//        return fetch(data.next)
//     })
// 	.then((response) => {
//         if(!response.ok) throw new Error(response.status)
// 		return response.json();
// 	})
// 	.then((data) => {
//         console.log('FIRST/NEXT 10 RESULTS:::::')
//         data.results.forEach((element, i) => {
//             console.log(`${i}:: ${element.name}`)
//         });
//     })
// 	.catch((err) => {
//         console.error(`ERROR:: ${err}`)
//     });

// REFACTORED FETCH WITH CHAINING
getResponse = (response) => {
	if (!response.ok) throw new Error(response.status);
	return response.json();
};

printResults = (data) => {
	console.log('FIRST/NEXT 10 RESULTS:::::');
	data.results.forEach((element, i) => {
		console.log(`${i}:: ${element.name}`);
	});
	return data.next;
};

getNextResults = (url) => fetch(url);

handleError = err => console.error(`ERROR:: ${err}`)

getNextResults('https://swapi.dev/api/planets')
	.then((res) => getResponse(res))
	.then((data) => printResults(data))
	.then((url) => getNextResults(url))
	.then((res) => getResponse(res))
	.then((data) => printResults(data))
	.then((url) => getNextResults(url))
	.then((res) => getResponse(res))
	.then((data) => printResults(data))
	.catch((err) => handleError(err));
