/**
 * Selection  sort algorithm (default: asc)
 * @param {*} array array of numbers to sort
 * @param {*} sortType 0: asc; 1 : desc 
 */
const selectionSort = (array, sortType = 0) => {
    let n = array.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let shouldSwap = sortType === 0 ? array[i] > array[j] : array[i] < array[j]
            if (shouldSwap) {
                [array[j], array[i]] = [array[i], array[j]]
            } 
        }
    }

    return array
}

const array = [345, 340, 45, 12, 10, 15, 0]
const sortedArray = selectionSort(array, 1)
console.log(sortedArray)