class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
        let l = 0;
        let r = 1;
        let max = 0;

        while(l < r && r < prices.length ){
            if(prices[l] > prices[r]){
                l = r;
            } else {
                let profit = prices[r] - prices[l];
                max = Math.max(profit, max);
            }
            r++;
        }
        return max;
    }
}
