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
     * @return {number[]}
     */
    rightSideView(root) {
        // Let's do a level order traversal and then only push the right most value of each level to the answer
        let ans = []
        let queue = [root]
        while(queue[0]){
            let qLen = queue.length;
            let level = []
            for(let i = 0; i < qLen; i++){
                let node = queue.shift();
                if(node.left){
                    queue.push(node.left)
                }
                if(node.right){
                    queue.push(node.right)
                }
                level.push(node.val)
            }
            console.log('level', level)
            let last = level.pop();
            ans.push(last)
        }
        return ans;
    }
}
