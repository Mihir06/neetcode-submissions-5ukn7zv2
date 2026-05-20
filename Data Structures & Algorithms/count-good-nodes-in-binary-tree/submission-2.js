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
        if (!root) return false;
        let goodCount = 0;
        function findGood(node, max){
            if(node.val >= max){
                goodCount++;
            }
            max = Math.max(max, node.val);
            if(node.left){
                findGood(node.left, max)        
            }
            if(node.right){
                findGood(node.right, max)        
            }
        }
        findGood(root, root.val)
        return goodCount;
    }
}
