class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = [];
        const visited = new Array(nums.length).fill(false);
        // Need to send currentIndex to the function so that we can ensure that does not get added to ans again
        function backtrack(curr) {
            if (curr.length === nums.length) {
                ans.push([...curr]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                // If element already been visited, skip it
                if(visited[i]){
                    continue;
                }
                visited[i] = true
                curr.push(nums[i]);
                backtrack(curr);
                curr.pop();
                visited[i] = false
            }
        }
        backtrack([]);
        return ans;
    }
}
