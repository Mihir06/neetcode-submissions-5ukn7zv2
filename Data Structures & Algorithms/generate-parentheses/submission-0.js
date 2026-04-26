class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        function backtrack(leftCount, rightCount, curr){
            // Base condition
            if(leftCount === rightCount && leftCount === n){
                ans.push(curr)
                return;
            }
            // Recursive condition
            if(leftCount < n){
                backtrack(leftCount + 1, rightCount, curr + "(")
            }
            if(rightCount < leftCount){
                backtrack(leftCount, rightCount + 1, curr + ")")
            }
        }
        let ans = []
        backtrack(0, 0, "");
        return ans;
    }
}
