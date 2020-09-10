class BreakDown {
	constructor(components) {
		this.filterKey= '';
		//this.selectorKey = selectorKey;
		this.components = components;
		//this.aggregatedResult = {};
        this.breakdown = {};
        this.breakdownType = {};
	}
/* 
	aggregate = (key) => {
		let aggregatedResult = {};
		this.components.forEach((el) => {
			if (!aggregatedResult[el[key]]) {
				aggregatedResult[el[key]] = el[this.selectorKey];
			} else {
				aggregatedResult[el[key]] += el[this.selectorKey];
			}
		});
		return aggregatedResult;
	};

	sort = (obj) => {
		return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).map((key) => {
			return { [key]: obj[key] };
		});
	};

	breakdown = (key) => {
		//keys.length === 1 ? this.aggregate(keys[0]) : this.aggregate()
		const aggregatedResult = this.sort(this.aggregate(key));
		console.log(aggregatedResult);

				let transformedObject = {};
		transformedObject['breakdownType'] = key;

        let breakdown = [];
        aggregatedResult.map(el => {
            for (const key in el) {
                if (el.hasOwnProperty(key)) {
                    breakdown.push({ [this.selectorKey]: el[key], key });
                }
            }
        }
		
		transformedObject['breakdown'] = breakdown;
		return transformedObject; 
	}; */

	reduce = (components, filter) => {
        this.filterKey = filter
		this.breakdown = components.reduce((p, c) => {
			let found = p.find((el) => {
				return el.key === c[filter];
			});
			if (found === undefined) {
				p.push({
					key: c[filter],
					percentage: c.percentage
				});
			} else {
				found.percentage += c.percentage;
			}
			return p;
		}, []);
		return this;
	};

	//console.log(reduced)

	sortDescending = () => {
        this.breakdown.sort((a, b) => b['percentage'] - a['percentage']);
        return this
    };
    
    get breakDownType () {
        this.breakdownType = {
            breakdownType: this.filterKey,
            breakdown: this.breakdown
        }
        return this
    }
}

// FOllowing comes from the API: hardcoded
const components = [
	{
		percentage: 5.0,
		year: 2011,
		variety: 'Pinot Noir',
		region: 'Mornington'
	},
	{
		percentage: 80.0,
		year: 2011,
		variety: 'Chardonnay',
		region: 'Yarra Valley'
	},
	{
		percentage: 5.0,
		year: 2010,
		variety: 'Pinot Noir',
		region: 'Macedon'
	},
	{
		percentage: 10.0,
		year: 2010,
		variety: 'Chardonnay',
		region: 'Macedon'
	}
];

const keys = { PERCENTAGE: 'percentage', YEAR: 'year', REGION: 'region', VARIETY: 'variety' };
const breakdown1 = new BreakDown(components);
const yearBreakdown = breakdown1.reduce(components, keys.YEAR).sortDescending(); 
console.log(yearBreakdown.breakdown)

const regionBreakdown = breakdown1.reduce(components, keys.REGION).sortDescending().breakdownType;
console.log(regionBreakdown);
//const varietyBreakdown = breakdown.breakdown(keys.VARIETY); console.log(varietyBreakdown)
