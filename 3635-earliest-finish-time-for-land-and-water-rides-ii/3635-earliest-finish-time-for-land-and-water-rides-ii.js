/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    // أبكر وقت تنتهي فيه أي رحلة برية / مائية
    let minLand = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        minLand = Math.min(minLand, landStartTime[i] + landDuration[i]);
    }

    let minWater = Infinity;
    for (let j = 0; j < waterStartTime.length; j++) {
        minWater = Math.min(minWater, waterStartTime[j] + waterDuration[j]);
    }

    let ans = Infinity;

    // الترتيب 1: برية ثم مائية
    for (let j = 0; j < waterStartTime.length; j++) {
        ans = Math.min(ans, Math.max(minLand, waterStartTime[j]) + waterDuration[j]);
    }

    // الترتيب 2: مائية ثم برية
    for (let i = 0; i < landStartTime.length; i++) {
        ans = Math.min(ans, Math.max(minWater, landStartTime[i]) + landDuration[i]);
    }

    return ans;
};