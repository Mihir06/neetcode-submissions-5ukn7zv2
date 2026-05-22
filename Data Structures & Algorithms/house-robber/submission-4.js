class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // rob current = rob i+ 2th or rob i+1th
        let rob1 = 0;
        let rob2 = 0
        for(const num of nums){
            const temp = Math.max(num + rob1, rob2);
            rob1 = rob2
            rob2 = temp
        }
        return rob2;
        
    }
}
