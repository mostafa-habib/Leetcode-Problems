/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let arr = s.split('');
    let count  = 0;

for(let i = 0; i < arr.length; i++) {
    let out = [];
    out.push(arr[i]);
    for(let y = i+1; y < arr.length; y++) {
        if(out.includes(arr[y])) {
            break;
        }
        else {
            out.push(arr[y]);
        }
        
    }
    if(out.length > count){
                count = out.length;
            }
}
    return count;

};