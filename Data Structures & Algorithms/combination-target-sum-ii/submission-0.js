class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        // Sort the array, then apply combination sum but with index increasing (like subsets)
        candidates.sort((a,b) => a - b);
        console.log('candidates', candidates);
        let ans = []
        function backtrack(start, curr, remaining){
            // Base condition
            if(remaining === 0){
                // Path leads to Solution
                ans.push([...curr])
            }
            if(remaining < 0){
                return
            }
            // Recursive condition
            for(let i = start; i < candidates.length; i++){ 
                if(i > start && candidates[i] === candidates[i - 1]){
                    continue;
                }
                curr.push(candidates[i]);
                // We increment because each candidate can be considered only once...
                backtrack(i+1, curr, remaining - candidates[i]);
                curr.pop()
            }
        }
        backtrack(0, [], target);
        return ans;

    }
}
