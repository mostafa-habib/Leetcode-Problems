/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const first = nums.findIndex((e) => e == target);    
    const last = nums.findLastIndex((e) => e == target);
    
    return [first, last];

};