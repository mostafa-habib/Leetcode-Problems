/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
let l = 0;
for(let i = 0; i < nums.length; i++) {
  if(nums[i] != val) {
    nums[l] = nums[i];
    l++;
  }
  
}
nums.length = l
    
    return nums.length
};