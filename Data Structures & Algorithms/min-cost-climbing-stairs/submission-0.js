class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // Top-down approach -> we start from last and move to first
        // As first 2 are already considered
        for(let i = cost.length - 3; i >=0; i--){
            cost[i] += Math.min(cost[i+1], cost[i+2]);
        }
        return Math.min(cost[0], cost[1])
        
    }
}
