/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = 0;    
    let min ;
    let value = 0;
    for(let i = 0; i < nums.length; i++) {
        min = 0;
        for(let y = i; y < nums.length; y++) {
            if(nums[i] == nums[y]) {
                min +=1;
                if(min > max){
                    max +=1;
                    value = nums[i];
                }
                
            }
        }
    }
    
    return value;
    
};