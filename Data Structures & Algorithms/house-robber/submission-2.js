class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map();
        function findMax(currIndex){
            if(currIndex >= nums.length) return 0;
            if(cache.has(currIndex)) return cache.get(currIndex);
            const stealCurrent = nums[currIndex] + findMax(currIndex + 2);
            const skipCurrent = findMax(currIndex + 1);
            let maxVal = Math.max(stealCurrent, skipCurrent);
            cache.set(currIndex, maxVal);
            return maxVal;
        }
        return findMax(0);
    }
}
