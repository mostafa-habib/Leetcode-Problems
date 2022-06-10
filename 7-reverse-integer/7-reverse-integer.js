/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
let arr = x.toString().split('');
let out = [], num = 0;
if(arr[0] === '-') {
    out[0] = arr[0];
    num++;
}
for(let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === '-' || (+arr[i] === 0 && +arr[i + 1] === 0 && +arr[i - 1] === 0) ) {
        continue;
    }
    out[num] = arr[i];
    num++;
    
}

if(+out.join('') > (2**31) - 1 || +out.join('') < -(2**31) - 1) {
    return 0;
} else {
    return +out.join('');
}
};