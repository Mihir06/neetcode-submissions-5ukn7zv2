class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Binary search
        let start = 0;
        let end = nums.length -1
        while(start <= end && end < nums.length){
            let mid = Math.floor((start + end) /2);
            console.log('mid', mid);
            console.log('nums[start]', nums[start]);
            console.log('nums[mid]', nums[mid]);
            console.log('nums[end]', nums[end]);
            if(nums[mid] === target){
                return mid;
            } else {
                // This side is not rotated
                if (nums[start] <= nums[mid]) {
                    // Left half [start...mid] is sorted
                    if (target >= nums[start] && target < nums[mid]) {
                        end = mid - 1;   // target is inside the sorted left half
                    } else {
                        start = mid + 1; // target must be in the right half
                    }
                } else {
                    // Right half [mid...end] is sorted
                    if (target > nums[mid] && target <= nums[end]) {
                        start = mid + 1; // target is inside the sorted right half
                    } else {
                        end = mid - 1;   // target must be in the left half
                    }
                }
            }
        }
        return -1
    }
}
