// DOM Selectors
const playBtn = document.querySelector('.btn--play');
const pauseBtn = document.querySelector('.btn--pause');
//const divEl = document.querySelector('.result');
const inpTimerEl = document.querySelector('.inp__timer');

// Variables
let interval = '';
let counter = 60;

// Counter logic
const stopWatch = (counter = 60) => {
	return setInterval(() => {
		counter > 0 ? counter-- : clearInterval(interval);
		inpTimerEl.value = counter;
	}, 1000);
};

// Event hanlders
playBtn.addEventListener('click', (event) => {
	if (inpTimerEl.value < 600) {
		interval = stopWatch(inpTimerEl.value);
	} else {
		interval = stopWatch(600);
	}
});

pauseBtn.addEventListener('click', (event) => {
	clearInterval(interval);
});

inpTimerEl.addEventListener('focusin', () => {
	clearInterval(interval);
});

inpTimerEl.addEventListener('focusout', () => {
	interval = stopWatch(inpTimerEl.value);
});
