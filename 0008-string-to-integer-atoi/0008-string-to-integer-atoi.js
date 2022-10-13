/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
   s = s.trim().split('');

for(let i = 0; i < s.length; i++) {
  if(s[0] == '+') {
    s.shift()
      if(s[0] === '+' || s[0] === '-' || s[0] === ' ') {
        return 0;
      }
  }
  
  if( isNaN (s[i]) && s[i] !== '-'){
    s.splice(i,s.length)
    break;
  }
  
}
let out = parseInt(s.join('').trim());
if(out < -2147483648)
  return -2147483648;
if(out > 2147483647)
  return 2147483647;
if(isNaN(out)) 
  return 0;
else
  return out;


};