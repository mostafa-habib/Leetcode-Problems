/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let obj = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  
  let arr = [];
  
    for(let i = 0; i < s.length; i++) {
        if(s[i]=='(' || s[i]=='{' || s[i]=='[') {
          arr.push(s[i]);
        } else {
          if(arr.pop() !== obj[s[i]] || i == 0)
            return false;
        }
        
    }
  if(arr.length >= 1 || s.length <= 1 )
    return false;
  else
    return true;
};
  