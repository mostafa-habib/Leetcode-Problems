/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let minLand = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        minLand = Math.min(minLand, landStartTime[i] + landDuration[i]);
    }

    let minWater = Infinity;
    for (let j = 0; j < waterStartTime.length; j++) {
        minWater = Math.min(minWater, waterStartTime[j] + waterDuration[j]);
    }

    let ans = Infinity;

    for (let j = 0; j < waterStartTime.length; j++) {
        ans = Math.min(ans, Math.max(minLand, waterStartTime[j]) + waterDuration[j]);
    }

    for (let i = 0; i < landStartTime.length; i++) {
        ans = Math.min(ans, Math.max(minWater, landStartTime[i]) + landDuration[i]);
    }

    return ans;
};