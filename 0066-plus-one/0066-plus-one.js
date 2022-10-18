/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let str = digits.join("");
    let num = BigInt(str)+ BigInt(1);
    num = num.toString().split('').map((num) => parseInt(num));
    return num;
};