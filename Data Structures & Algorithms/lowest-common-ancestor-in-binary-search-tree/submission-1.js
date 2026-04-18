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
        // Will traverse the tree via a depth first search

        // For each iteration, compare the value of the current node with p and q
        /**
         * IF the value of both p and q is greater than the value of the node, it means, ancestor is in right subtree
         * IF the value s less, ancestor is in left subtree
         * IF p is less and q is more, it means current node is the ancestor
         */
        function dfs(node){
            // console.log('this is the node here', node);
            // console.log('this is p', p);
            // console.log('this is q', q);
            if(((p.val < node.val && q.val < node.val) || q.val < node.val && p.val < node.val ) && node.left){
                // Explore the left subtree here
                // console.log('in if');
                return dfs(node.left)
            } else if(((p.val > node.val && q.val > node.val) || q.val > node.val && p.val > node.val) && node.right){
                // Explore the right subtree here
                // console.log('in else if');
                return dfs(node.right)
            } else if((p.val <= node.val && q.val >= node.val) || q.val <= node.val && p.val >= node.val){
                // We are the ancestor
                // console.log('in else, node is this: ', node);
                return node;
            }
        }
        return dfs(root);

    }
}
