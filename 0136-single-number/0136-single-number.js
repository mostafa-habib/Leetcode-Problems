/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let arr = nums.sort();
        
        if(arr[i] !== arr[i+1]) {
            return arr[i];
            i++;
        }
        i++;
    }
};