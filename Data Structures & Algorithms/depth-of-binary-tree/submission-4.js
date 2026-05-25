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
    maxDepth(root) {
        // Just do a level order traversal and return the number of total levels
        if(!root) return 0
        let q = [root]
        let levels = 0;
        while(q[0]){
            let qLen = q.length;
            for(let i = 0; i < qLen; i++){
                let element = q.shift();
                if(element.left){
                    q.push(element.left)
                }
                if(element.right){
                    q.push(element.right)
                }
            }
            levels++;
        }
        return levels;
    }
}
