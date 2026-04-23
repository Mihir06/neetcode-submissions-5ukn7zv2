class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let ans = [];
        // Also will need to track the start value for our for loop, so that it can move to the next element
        function backtrack(start, curr, remaining){
            // Recursive function, so need to figure out exit strategy
            if(remaining === 0){
                ans.push([...curr]);
                return;
            }
            if(remaining < 0){
                // We have overshot, so need to reject this case now
                return;
            }
            for(let i = start; i < nums.length; i++){
                curr.push(nums[i]);
                backtrack(i, curr, remaining - nums[i]);
                curr.pop();
            }
        }   
        backtrack(0, [], target)
        return ans;
    }
}
