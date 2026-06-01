/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    const arr = cost.sort((a, b) => a - b);
    let i = arr.length -1;
    let sum = 0;
    while(i >= 0) {
        if(arr[i - 1])
            sum += arr[i] + arr[i - 1];
        else 
        sum += arr[i];
        i -=3;
    }
    return sum;
};