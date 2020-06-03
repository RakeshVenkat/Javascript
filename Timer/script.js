// DOM SELECTORS
const inpTimerEl = document.getElementById('inp--timer');
const playBtn = document.getElementById('btn--play');
const pauseBtn = document.getElementById('btn--pause');
const circleEl = document.querySelector('.svg--timer-animated circle');

const radius = circleEl.getAttribute('r');
const circumference = radius * 2 * Math.PI;

let dashArray = circumference;

class Timer {
	constructor(timerInput, playButton, pauseButton, callbacks) {
		this.timerInput = timerInput;
		this.playButton = playButton;
		this.pauseButton = pauseButton;
		this.noOfTicks = this.timerInput.value;

		this.playButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
		this.timerInput.addEventListener('blur', this.resetTicks);

		if (callbacks) {
			this.onTick = callbacks.onTick;
		}
	}

	resetTicks = () => {
		this.noOfTicks = this.timerInput.value;
	};

	start = () => {
		this.timeRemaining = parseFloat(this.timerInput.value);

		this.interval = setInterval(() => {
			this.timeRemaining = this.timeRemaining - 0.1;
			if (this.timeRemaining >= 0) {
				this.tick(this.timeRemaining);
			} else {
				this.pause();
			}
		}, 100);
	};
	pause = () => {
		clearInterval(this.interval);
	};
	tick = (time) => {
		this.timerInput.value = time.toFixed(2);
		if(this.onTick){
			this.onTick(this.noOfTicks)
		}
	};
}

new Timer(inpTimerEl, playBtn, pauseBtn, {
	onTick: (noOfTicks) => {
		dashArray -= circumference / (noOfTicks * 10);
		circleEl.setAttribute('stroke-dashoffset', circumference - dashArray);
		circleEl.setAttribute('stroke-dasharray', circumference);
	}
});
