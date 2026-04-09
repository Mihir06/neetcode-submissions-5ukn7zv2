class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // New HashMap -> Key Value 
        let map = new Map();
        for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        // If the difference is found in the map, we return the index of diff and current
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i);
      }     
    }
}
