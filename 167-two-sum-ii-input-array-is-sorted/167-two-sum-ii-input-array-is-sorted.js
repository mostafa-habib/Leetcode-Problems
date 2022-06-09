/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
    let middle;
    while (start <= end) {
         middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return middle;
}

let s = binarySearch(numbers, target);
for(let i = s + 1 ; i >= 0; i--) {
        for(let y = i - 1; y >= 0; y--) {
            if(numbers[i] + numbers[y] === target) {
             return [y + 1, i + 1];
            }
        }
    }
    
};