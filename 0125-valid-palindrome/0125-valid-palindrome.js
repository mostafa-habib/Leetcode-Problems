/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let out = "";
    for(let i=0; i < s.length; i++) {
        
        let x = s.charCodeAt(i);
        if((x >= 97 && x <= 122) || (x >= 48 && x <= 57) ) {
            out += s[i];
        }
        
    }
    
    if(out === out.split("").reverse().join("")) {
        return true;
    }
    else 
        return false
    
    
};