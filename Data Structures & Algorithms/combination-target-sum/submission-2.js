class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // Need to sum up to target
        // same number can be used again
        let ans = []
        function backtrack(start, curr, rem){
            // Base condition
            // Below 0, remove
            if(rem < 0){
                return;
            }
            // solution found, push to ans
            if(rem === 0){
                ans.push([...curr])
                return;
            }
            // Recursive condition
            for(let i = start; i < nums.length; i++){
                curr.push(nums[i])
                backtrack(i, curr, (rem - nums[i]))
                curr.pop();
            }
        }
        
        backtrack(0, [], target)
        return ans;
    }
}
