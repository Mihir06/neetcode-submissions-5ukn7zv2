class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0
        let rob2 = 0
        for(const num of nums){
            // Need max value from the options
            // Options: 
            // A: Choose current and then then move to i+2th house
            // B: Skip current and move to i+1th house 
            // temp will return the max value
            let temp = Math.max(num + rob1, rob2);
            rob1 = rob2
            rob2 = temp
        }
        return rob2;
    }
}
