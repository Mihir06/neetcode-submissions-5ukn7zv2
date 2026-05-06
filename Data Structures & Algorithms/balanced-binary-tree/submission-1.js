/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        // Dfs on left anmd right
        // If difference is more than 1, we return false
        // Default case returns true
        function dfs(node){
            if(node === null){
                return 0;
            }
            const left = dfs(node.left)
            const right = dfs(node.right)
            if (left === false || right === false) return false;

            let diff = Math.abs(left - right);
            if(diff > 1){
                return false;
            }
            return 1 + Math.max(left, right)
        }
        return dfs(root) !== false;

    }
}
