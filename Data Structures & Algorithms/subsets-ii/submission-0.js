class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        // Sort the nums in ascending order
        let ans = []
        nums.sort((a,b) => a - b)
        function backtrack(start, curr){
            // For each element, either add or do not add
            // Will check curr, if the last element in curr is same as nums[i], will continue
            ans.push([...curr])
            for(let i = start; i < nums.length; i++){
                // If latest item added to the curr array is not same as current item
                if( i > start && nums[i] === nums[i - 1]){
                    continue
                }
                curr.push(nums[i])
                backtrack(i+1, curr)
                curr.pop()
            }
        }
        backtrack(0, [])
        return ans;
        /**
        1. curr = [], ans = [[]]
        2. curr = [1], ans = [[], [1]]
        3. curr = [1,2], ans = [[], [1], [1,2]]
        4. curr = [1,2,1] , ans = [[], [1], [1,2], [1,2,1]]]
        5. Pop, curr = [1,2]

         */
    }
}
