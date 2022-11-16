/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    var mask = 1;
    for (i=0; i<32; i++) {
        if ((mask & n) != 0 ) {            
            count++;
        }
        mask <<= 1;
    }
    return count;
};
