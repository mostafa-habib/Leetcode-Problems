/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix (strs) {
    if (!strs.length) return "";
    let max = '';
    for(let i = 0; i < strs[0].length; i++) {//flower fkow
        for(let y = 1; y < strs.length; y++) {

            if(strs[y][i] != strs[0][i])
              return max;
        }

            max += strs[0][i];

    }
    return max;

};