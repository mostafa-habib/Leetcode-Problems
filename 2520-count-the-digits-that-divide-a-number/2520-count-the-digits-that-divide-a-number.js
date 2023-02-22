/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  	let count = 0;
  	let str = num.toString();
    for(let i = 0; i < str.length; i++) {
      if(num % +str.toString()[i] === 0) {
        count++;
      }
    }
  return count;
};