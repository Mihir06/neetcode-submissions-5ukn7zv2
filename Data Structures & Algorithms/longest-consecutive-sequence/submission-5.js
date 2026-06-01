class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let items = new Set(nums);
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            // Existing sequence, no nothing
            if(items.has(nums[i] - 1)){
                continue;
            } else {
                // Start of a new sequence
                let len = 1
                while(items.has(nums[i] + len)){
                    len++
                }
                count = Math.max(count, len)
            }
        }
        return count;
    }
}
