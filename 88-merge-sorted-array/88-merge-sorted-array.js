/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let x = m;
  for(let i = 0; i < n; i++) {
    nums1[x] = nums2[i];
    x++;  
   }
   nums1 = nums1.sort(function(a, b) {
  return a - b;
});
    
    
}