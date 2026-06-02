/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let sum = 1000000000;
    
    for(let i = 0; i < landStartTime.length; i++) {
        for(let y = 0; y < waterStartTime.length; y++) {
            
            let endLand = landStartTime[i] + landDuration[i];
            let sum1 = Math.max(endLand, waterStartTime[y]) + waterDuration[y];
            
            let endWater = waterStartTime[y] + waterDuration[y];
            let sum2 = Math.max(endWater, landStartTime[i]) + landDuration[i];
            
            let bestForTheseTwo = Math.min(sum1, sum2);
            
            if (bestForTheseTwo < sum) {
                sum = bestForTheseTwo;
            }
        }
    }
    return sum;
};