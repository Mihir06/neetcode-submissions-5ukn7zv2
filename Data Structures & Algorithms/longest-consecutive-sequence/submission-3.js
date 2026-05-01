class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;
        for(let num of nums){
            // We are part of a new sequence
            if(!numSet.has(num-1)){
                let len = 1;
                // if num = 5 and len = 2
                // will check if numSet has 7 or not.
                while(numSet.has(num + len)){
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}
