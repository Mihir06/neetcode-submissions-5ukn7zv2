class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // let ways = 0;
        if( n < 2) return n;
        let w1 = 1
        let w2 = 2;
        let temp;
        for(let i = 2; i < n; i++){
           temp = w1 + w2;
           w1 = w2
           w2 = temp;
        }
        return w2
    }
}
