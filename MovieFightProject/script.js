const MOVIE_BASEURL = 'http://www.omdbapi.com';

// DOM SELECTORS
const movieInput = document.querySelectorAll('.form-movie input[type="search"]');
const movieResults = document.querySelector('.div-movies');
const title = document.querySelector('.listitem-title-result');
const actors = document.querySelector('.listitem-actors-result');
const awards = document.querySelector('.listitem-awards-result');
const rating = document.querySelector('.listitem-rating-result');
const votes = document.querySelector('.listitem-votes-result');
const poster = document.querySelector('.listItem-poster');

// DOM EVENT HANDLERS
let timeoutId;
const onInput = (event) => {
	const { value } = event.target;
	const filters = [ { key: 't', value } ];

	// CODE TO HANDLE MULTIPLE API CALLS ::
	if (timeoutId) {
		clearTimeout(timeoutId);
	}
	timeoutId = setTimeout(async () => {
		try {
			const response = await getMovie(filters);
			const movie = response.data;
			//movieResults.innerHTML=JSON.stringify(movie)
			console.log(movie);
			if (movie) title.innerHTML = movie.Title;
			actors.innerHTML = movie.Actors;
			awards.innerHTML = movie.Awards;
			rating.innerHTML = movie.imdbRating;
			votes.innerHTML = movie.imdbVotes;
			poster.setAttribute('src', movie.Poster);
		} catch (error) {
			console.log(error);
		}
	}, 1000);
}

movieInput.forEach(() => {
	document.addEventListener('input', onInput)
});

const requestHandler = async (fn, url) => {
	try {
		return await fn(url);
	} catch (error) {
		// reference: https://github.com/axios/axios#handling-errors
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log(error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
		}
		console.log(error.config);
		throw error;
	}
};

const constructQueryParams = (queryParamsMap) => {
	let paramClause = '';
	let separator = '?';
	queryParamsMap.forEach((value, key) => {
		paramClause = paramClause.concat(separator, key, '=', value);
		separator = '&';
	});
	return paramClause;
};

const getMovie = (filters) => {
	const queryParams = new Map();
	queryParams.set('apiKey', 'a08655f6');
	filters.forEach((filter) => {
		queryParams.set(filter.key, filter.value);
	});

	const url = `${MOVIE_BASEURL}/${constructQueryParams(queryParams)}`;

	return requestHandler(axios.get, url);
};

//const filters = [ { key: 't', value: 'Mission' } ];
/* const movie = getMovie(filters)
	.then((res) => {
		const movie = res.data? JSON.parse(res.data): {}
		console.log(movie);
	//	movieResults.innerHTML=JSON.parse(movie);
	})
	.catch((error) => console.log(error)); // return error)
 */
// {result: success, error: null, data: {}}
// {result: error, error: {message: '', statusCode: xxx}, data: null}}
// {Response: "False", Error: "Something went wrong."}

// Re Usable Debounce helper
const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args)
		}, delay);
	};
};

// debounce(onInput)
