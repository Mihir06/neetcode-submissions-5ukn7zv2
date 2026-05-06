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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        // To find the diameter, I will have to dfs the left and the right nodes and then add that to the current length1
        
        function dfs(node, len){
            if(node === null){
                return 0;
            }
            const left = dfs(node.left, len)
            const right = dfs(node.right, len)
            max = Math.max(max, left + right);
            return 1 + Math.max(left, right);
        }

        let max = 0
        dfs(root, 0)
        return max;
    }
}
