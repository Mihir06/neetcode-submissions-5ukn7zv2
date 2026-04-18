class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = null;
        let start = 0;
        let end = nums.length - 1
        while( start <= end && end < nums.length){
            let mid = Math.floor((start+ end) /2);
            (min === null? min = nums[mid]: min = Math.min(min, nums[mid]))
            if(nums[mid] > nums[end]){
                // Means that smaller number should be in second half
                start = mid + 1;
            } else {
                // number will be in the first half
                end = mid - 1
            }
        }
        return min;
    }
}
