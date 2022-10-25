/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let sum = 1;
    let out = 1;
    while(n >= 2) {
      sum +=out;
      out = sum - out;
      n--;
    }
    
    return sum;
};