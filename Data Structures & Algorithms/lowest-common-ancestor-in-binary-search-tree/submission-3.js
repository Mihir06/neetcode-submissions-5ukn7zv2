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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // Key to remembering:
        // Keep walking in the direction both p and q agree on. The moment they disagree (or one of them equals the current node), you've found the LCA.
        function dfs(node){

            if(p.val < node.val && q.val < node.val && node.left){
                return dfs(node.left)
            } else if(p.val > node.val && q.val > node.val && node.right){
                return dfs(node.right)
            } else if (p.val <= node.val && q.val >= node.val || q.val <= node.val && p.val >= node.val) {
                return node;
            }

        }

        return dfs(root)
    }
}
