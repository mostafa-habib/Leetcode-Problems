/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let start = 0;
    let end = nums.length - 1;
  let mid = 0;
  while(start <= end) {
  
     mid = Math.floor((start + end) / 2);
    if(nums[mid] === target) 
         return mid;
    else if(nums[mid] < target )
      start = mid + 1;
    else 
      end = mid - 1 ;
    
  }
    return start
};

