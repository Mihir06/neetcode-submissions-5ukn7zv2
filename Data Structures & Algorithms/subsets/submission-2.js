class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = [];
        function backtrack(start, curr){
            // Base condition
            ans.push([...curr]);

            for ( let i = start; i < nums.length; i++){
                // Recursive condition
                curr.push(nums[i])
                backtrack(i+1, curr)
                curr.pop();
            }
        }

        backtrack(0, [])
        return ans;
    }
}
