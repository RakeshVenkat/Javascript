const btnCbHell = document.querySelector('.btn--callbackHell');
//btn.style.transform='translateX(100px)'
/*
setTimeout(() => {
	btnCbHell.style.transform = 'translateX(100px)';
	setTimeout(() => {
		btnCbHell.style.transform = 'translateX(200px)';
		setTimeout(() => {
			btnCbHell.style.transform = 'translateX(300px)';
			setTimeout(() => {
				btnCbHell.style.transform = 'translateX(400px)';
				setTimeout(() => {
					btnCbHell.style.transform = 'translateX(500px)';
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);

const btnMinorCbHell = document.querySelector('.btn--minor-cb-hell');

moveX = (btn, position, delay, callback) => {
	setTimeout(() => {
		btn.style.transform = `translateX(${position}px)`;
		if (callback) callback();
	}, delay);
};

moveX(btnMinorCbHell, 100, 1000, () => {
	moveX(btnMinorCbHell, 200, 1000, () => {
		moveX(btnMinorCbHell, 300, 1000, () => {
			moveX(btnMinorCbHell, 400, 1000, () => {
				moveX(btnMinorCbHell, 500, 1000);
			});
		});
	});
});
*/
const bodyEl = document.body;
const btnMajorCbHell = document.querySelector('.btn--major-cb-hell');
moveXV1 = (btnMajorCbHell, position, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		let btnClientRect = btnMajorCbHell.getBoundingClientRect();
		if (Math.round(btnClientRect.right) + position < bodyEl.clientWidth) {
			btnMajorCbHell.style.transform = `translateX(${Math.round(btnClientRect.left) + position}px)`;
			btnClientRect = btnMajorCbHell.getBoundingClientRect();

			if (onSuccess) onSuccess();
		} else {
			if (onFailure) onFailure();
		}
	}, delay);
};
// Major callback hell!!
moveXV1(
	btnMajorCbHell,
	100,
	1000,
	() => {
		// Success
		console.log('Moved');
		moveXV1(
			btnMajorCbHell,
			100,
			1000,
			() => {
				// Success
				console.log('Moved');
				moveXV1(
					btnMajorCbHell,
					100,
					1000,
					() => {
						// Success
						console.log('Moved');
						moveXV1(
							btnMajorCbHell,
							100,
							1000,
							() => {
								// Success
								console.log('Moved');
							},
							() => {
								//failure
								alert('Cannot move anymore!!');
							}
						);
					},
					() => {
						//failure
						alert('Cannot move anymore!!');
					}
				);
			},
			() => {
				//failure
				alert('Cannot move anymore!!');
			}
		);
	},
	() => {
		//failure
		alert('Cannot move anymore!!');
	}
);

// Syntax of a simple promise
const willBuyAHome = () => new Promise((resolve, reject) => {});
console.log(willBuyAHome()); // Promise {<pending>}
console.log(
	willBuyAHome()
		.then(() => {
			console.log('when its resolved');
		})
		.catch(() => {
			console.log('when its rejected');
		})
); // Promise {<pending>}

// Simulation of promise responses using a Math.random() operation
randomPromise = () =>
	new Promise((resolve, reject) => {
		const randomNum = Math.random();
		if (randomNum > 0.5) {
			resolve(randomNum + Date.now());
		} else {
			reject(randomNum + Date.now());
		}
	});

for (let i = 0; i < 10; i++) {
	console.log(randomPromise());
}

const pages = [ '/about', '/faq' ];

const request = (url) =>
	new Promise((resolve, reject) => {
		if (pages.includes(url)) {
			setTimeout(() => {
				resolve({ status: 200, data: { pagesCount: 10 } });
			}, 2000);
		} else {
			setTimeout(() => {
				reject({ status: 404, data: 'Page not found' }), 500;
			});
		}
	});

request('/about')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
request('/contactus')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
/////////////// PROMSISE PATTERN
// Using a promise, now you can resolve or reject
// use a then and catch to handle the success / error cases
moveXV2 = (btnMajorCbHell, position, delay) => {
	return new Promise((onSuccess, onFailure) => {
		setTimeout(() => {
			let btnClientRect = btnMajorCbHell.getBoundingClientRect();
			if (Math.round(btnClientRect.right) + position < bodyEl.clientWidth) {
				btnMajorCbHell.style.transform = `translateX(${Math.round(btnClientRect.left) + position}px)`;
				btnClientRect = btnMajorCbHell.getBoundingClientRect();
				onSuccess();
			} else {
				onFailure();
			}
		}, delay);
	});
};

// The triangular callback hell patern is flattened out now
// use a .then() and return the promise within .then()
//NOTE: using the return in all steps is not needed, but in the last one
// otherwise you cannot catch the error!!
const btnPromise = document.querySelector('.btn--major-cb-hell-solved-promises');
moveXV2(btnPromise, 100, 200)
	.then(() => {
		console.log('Moved');
		return moveXV2(btnPromise, 100, 200);
	})
	.then(() => {
		console.log('Moved');
		return moveXV2(btnPromise, 100, 200);
	})
	.then(() => {
		console.log('Moved');
		return moveXV2(btnPromise, 100, 200);
	})
	.then(() => {
		console.log('Moved');
		return moveXV2(btnPromise, 100, 200);
	})
	.then(() => {
		console.log('Moved');
		return moveXV2(btnPromise, 100, 200);
	})
	.catch(() => {
		alert('Cannot move anymore!!');
	});
