class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // let ways = 0;
        let dp = [1, 2];
        for(let i = 2; i < n; i++){
           dp[i] = dp[i - 1] + dp[i - 2]; 
        }
        return dp[n-1]
    }
}
