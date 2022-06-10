/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
let out = [];
let i = 0, count = 0; 
let num = numRows - 2;
while(i < s.length) {
    for(let y = 0; y < numRows ; y++) {
        if(i > s.length - 1) {
            break;
        }
        if(out[y] === undefined ) {
            out[y] = '';
        }
        if(count % 2 === 0) {
            out[y] += s[i];
            i++;
        }
        else {
            if(y !== 0 && y !== (numRows - 1)) {
                out[num] +=s[i];
                i++; 
                num--;
            }
        }
    }
    count++;
    num = numRows - 2;
}
    return out.join('');
};