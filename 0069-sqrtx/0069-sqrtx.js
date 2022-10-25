/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let num = 1;
    let out = 1;
    while(out <= x) {
      num++;
      out = num * num;
    }
    
    return num -1;
    
};