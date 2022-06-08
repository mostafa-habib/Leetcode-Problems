/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i++] !== s[j--]) {
            return 2;
        }
    }

    return 1;
};