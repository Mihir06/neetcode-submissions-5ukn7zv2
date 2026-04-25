class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Will apply sliding window technique
        // Will add items to hash
        let items = new Set(nums);
        let longest = 0;

        for(let num of nums){
            // If we are not part of an existing sequence, it means we're at a new sequence now
            if(!items.has(num - 1)){
                let length = 1;
                while(items.has(num + length)){
                    length++
                }
                longest = Math.max(longest, length)
            }
        }
        return longest;
    }
}
