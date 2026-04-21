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
     * @return {number[][]}
     */
    levelOrder(root) {
        let ans = []
        // Pushing the root of the tree in the queue
        let queue = [root]
        // While queue is not empty
        while(queue[0]){
            // Take the length of the queue to iterate that many times
            let qLen = queue.length;
            let levels = [];
            for(let i = 0; i < qLen; i++){
                // Remove the first element from the queue
                let node = queue.shift();
                if(node.left){
                    queue.push(node.left)
                }
                if(node.right){
                    queue.push(node.right)
                }
                levels.push(node.val);
            }
            ans.push(levels)
        }
        return ans;
    }
}
