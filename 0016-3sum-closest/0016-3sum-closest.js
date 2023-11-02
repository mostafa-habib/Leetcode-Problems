/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let sum = 0;
  let arr = [];
  if (nums.length === 3) return nums[0] + nums[1] + nums[2];

  let closestElement = nums[0] + nums[1] + nums[2];
  let minDifference = Math.abs(target - closestElement);
  for (let i = 0; i <= nums.length - 3; i++) {
    for (let x = i + 1; x < nums.length - 1; x++) {
      for (let y = x + 1; y < nums.length; y++) {
        // i = 0 0 0 1
        // x = 1 1 2 2
        // y = 2 3 3 3
        sum = nums[i] + nums[x] + nums[y];
        const currentDifference = Math.abs(target - sum);
        if (currentDifference < minDifference) {
          closestElement = sum;
          minDifference = currentDifference;
        }
      }
    }
  }
  return closestElement;
}