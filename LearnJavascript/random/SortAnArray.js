// Create an Ascending sort and return
let sortedAscArray = [ 'hello', 'world', 'hi', 'now' ].sort((a, b) => a.length - b.length);
console.log(sortedAscArray); // Sorted array
console.log(sortedAscArray.shift()); //smallest element in array

// Create an Descending sort and return
let sortedDescArray = [ 'hello', 'world', 'hi', 'now' ].sort((a, b) => b.length - a.length);
console.log(sortedDescArray); // Sorted array
console.log(sortedDescArray.shift());

let arrayOfNumbers = [ 10.0, 12.05, -89.0, 89 ];
arrayOfNumbers.sort((a, b) => b - a);
console.log(arrayOfNumbers);

const total = arrayOfNumbers.reduce((prevVal, currVal) => prevVal + currVal, 0);
console.log(total);

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

const result = {
    breakdownType: 'year',
    breakdown: [
        {
            percentage: 85,
            key: '2011'
        },
        {
            percentage: 15,
            key: '2010'
        }
    ],
}


const reduced = components.reduce((p, c) => {
    let found = p.find(el => {
        return el.key === c['year']
    })
    if(found === undefined) {
        p.push({
            key: c['year'],
            percentage: c.percentage
        })
    } else {
       found.percentage += c.percentage
    }
    return p
}, [])

console.log(reduced)

const sortDescending = arr => {
    return arr.sort((a,b) => b['percentage'] - a['percentage'])
}

const sortedBreakdown = sortDescending(reduced);
console.log(sortedBreakdown)


// year/ region/ variety
const selectorKey = 'percentage';
const filterKey = 'variety';
const keys = {PERCENTAGE: 'percentage', YEAR: 'year', REGION: 'region', VARIETY: 'variety'};
const aggregate = (arr, filterKey, selectorKey) => {
	let aggregatedResult = {};
	arr.forEach((el) => {
		if (!aggregatedResult[el[filterKey]]) {
			aggregatedResult[el[filterKey]] = el[selectorKey];
		} else {
			aggregatedResult[el[filterKey]] += el[selectorKey];
		}
	});
	return aggregatedResult;
};

console.log(aggregate(components, keys.REGION, keys.PERCENTAGE));
console.log(aggregate(components, keys.YEAR, keys.PERCENTAGE));
console.log(aggregate(components, keys.VARIETY, keys.PERCENTAGE));

const transform = (filterKey, selectorKey, object) => {
    let transformedObject = {}
    transformedObject['breakdownType'] = filterKey

    let breakdown = []
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            breakdown.push({[selectorKey]: object[key], key})
        }
    }
    transformedObject['breakdown']=breakdown
    return transformedObject
}
let finalResult = transform(keys.REGION, keys.PERCENTAGE, aggregate(components, keys.REGION, keys.PERCENTAGE))
console.log(finalResult)

finalResult = transform(keys.YEAR, keys.PERCENTAGE, aggregate(components, keys.YEAR, keys.PERCENTAGE))
console.log(finalResult)