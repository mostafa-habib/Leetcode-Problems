/**
 * @param {number[]} cost
 * @return {number}
 */

var minimumCost = function(cost) {
    cost.sort((a, b) => b - a);
    
    let totalCost = 0;
    
    for (let i = 0; i < cost.length; i++) {
        if ((i + 1) % 3 === 0) continue; 
        totalCost += cost[i];
    }
    
    return totalCost;
};