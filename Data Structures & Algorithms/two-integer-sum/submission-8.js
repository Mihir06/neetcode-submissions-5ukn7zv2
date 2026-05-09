class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map();
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(numMap.has(diff)){
                return [numMap.get(diff), i];
            }
            numMap.set(nums[i], i);
        }
    }
}
