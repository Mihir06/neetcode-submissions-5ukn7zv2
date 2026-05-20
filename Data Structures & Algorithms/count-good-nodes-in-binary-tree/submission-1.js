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
    goodNodes(root) {
        let count = 0;
        // Basically, for a node to be considered a good node, none of it's parents upto the root should be greater or equal to it.
        // So, essentially, I should do a dfs for each branch, and at any point if the parent node is less or equal to the child nodes, we reject that branch
        let nodeVal;
        function dfs(node, parentValue){
            if(!node){
                return 0;
            }
            if(node.val >= parentValue){
                count++;
            }
            dfs(node.left, Math.max(node.val, parentValue))
            dfs(node.right, Math.max(node.val, parentValue))
        }
        dfs(root, root.val)
        return count;

    }
}
