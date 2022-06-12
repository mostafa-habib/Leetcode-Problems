/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let right = 0;
    let sum = 0;
    let max = 0;
    while(right < nums.length) {
        while(seen.has(nums[right])) {
            sum -= nums[left];
            seen.delete(nums[left]);
            left++;
        }
        sum += nums[right];
        seen.add(nums[right]);
        right++;
        max = Math.max(max, sum);
        //console.log(seen, sum, max);
    }
    return max;
};
