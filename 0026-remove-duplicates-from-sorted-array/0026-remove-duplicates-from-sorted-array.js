/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let l = 0;
for(let i = 0; i < nums.length; i++) {
  if(nums[i] != nums[i+1]) {
    nums[l] = nums[i];
    l++;
  }
  
}
nums.length = l
    
    return nums.length
};