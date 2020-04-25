/**
 * Bubble sort algorithm (default: asc)
 * @param {*} array array of numbers to sort
 * @param {*} sortType 0: asc; 1 : desc 
 */
const bubblesort = (array, sortType = 0) => {
    let n = array.length
    for (let i = 0; i < array.length - 1; i++) {
        for (let index = 0; index < n; index++) {
            let nextIndex = index + 1
            let shouldSwap = sortType === 0 ? array[index] > array[nextIndex] : array[index] < array[nextIndex]
            if (shouldSwap) {
                /*  let temp = array[index]
                    array[index] = array[nextIndex]
                    array[nextIndex] = temp 
                */
                [array[index], array[nextIndex]] = [array[nextIndex], array[index]] // USING DESRTUCTURING !!
            }
        }
        n = n - 1
    }
    return array
}

let array = [700, 456, 678, 12, 545, 123]
const sortedArray = bubblesort(array, 1)
console.log(sortedArray)

