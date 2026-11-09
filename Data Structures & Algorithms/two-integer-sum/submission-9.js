class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let items = new Map();
        for(let i = 0; i < nums.length; i++){
            let rem = target - nums[i];
            if(items.has(rem)){
                return [items.get(rem), i]
            }
            items.set(nums[i], i);
        }
    }
}
