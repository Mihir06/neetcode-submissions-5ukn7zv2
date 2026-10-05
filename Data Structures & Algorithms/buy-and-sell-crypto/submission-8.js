class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let buy = 0;
        let sell = 1;
        while( buy < sell && sell <= prices.length){
            if(prices[buy] < prices[sell]){
                let diff = prices[sell] - prices[buy];
                max = Math.max(max, diff);
            } else {
                buy = sell;
            }
            sell++;
        }
        return max;
    }
}
