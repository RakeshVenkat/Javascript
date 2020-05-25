// call stack: An array like datastructure that is being used to pile up the functions being invoked
// Last thing that goes in comes out first
// LIFO pattern

// CallStack: getSentence() -> getWords() -> getPunctuation()

const getPunctuation = () => {
	return `!!!`;
};

const getWords = () => {
	return `The Hello World`;
};

const getSentence = () => {
	return `${getWords() + getPunctuation()}`;
};

const getRepeatedSentence = (n) => {
	let repeatedSentence = '';
	for (let i = 0; i < n; i++) {
		repeatedSentence += ' ' +getSentence();
    }
    return repeatedSentence
};

const divEl = document.querySelector('div');
divEl.innerHTML = getRepeatedSentence(10);
