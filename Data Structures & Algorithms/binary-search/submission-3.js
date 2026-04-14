class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        while(start <= end){
            let mid = Math.floor((end + start)/2);
            // console.log('mid', mid);
            if(nums[mid] == target){
                return mid;
            } else if(nums[mid] > target){
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return -1;
    }
}
