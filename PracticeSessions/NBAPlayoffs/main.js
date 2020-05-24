const warriorsGames = [
	{
		awayTeam: {
			team: 'Golden State',
			points: 119,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 106,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 105,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 127,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 126,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 85,
			isWinner: false
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 92,
			isWinner: false
		},
		awayTeam: {
			team: 'Houston',
			points: 95,
			isWinner: true
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 94,
			isWinner: false
		},
		homeTeam: {
			team: 'Houston',
			points: 98,
			isWinner: true
		}
	},
	{
		homeTeam: {
			team: 'Golden State',
			points: 115,
			isWinner: true
		},
		awayTeam: {
			team: 'Houston',
			points: 86,
			isWinner: false
		}
	},
	{
		awayTeam: {
			team: 'Golden State',
			points: 101,
			isWinner: true
		},
		homeTeam: {
			team: 'Houston',
			points: 92,
			isWinner: false
		}
	}
];

// DOM initializations
const resultsContainer = document.getElementById('results--container');
const childUl = document.createElement('ul');
resultsContainer.appendChild(childUl);
const optionsEl = document.querySelector('.team-options');

let chosenTeam = optionsEl.value;
const getAwayTeam = (chosenTeam) => (chosenTeam === 'awayTeam' ? 'homeTeam' : 'awayTeam');
let awayTeam = getAwayTeam(chosenTeam);

const setResult = (listItems) => {
	childUl.innerText = '';
	listItems.forEach((element) => {
		childUl.appendChild(element);
	});
};

const fetchListItems = (chosenTeam, awayTeam) => {
	return warriorsGames.map((gameResult) => {
		let className = gameResult[chosenTeam].isWinner ? 'green' : 'red';
		const li = document.createElement('li');
		li.setAttribute('class', className);
		li.innerText = `${gameResult[chosenTeam].team}: ${gameResult[chosenTeam]
			.points} :: ${gameResult[awayTeam].team} : ${gameResult[awayTeam].points}`;
		return li;
	});
};

setResult(fetchListItems(chosenTeam, awayTeam));

optionsEl.addEventListener('change', (e) => {
	setResult(fetchListItems(e.target.value, getAwayTeam(e.target.value)));
});
