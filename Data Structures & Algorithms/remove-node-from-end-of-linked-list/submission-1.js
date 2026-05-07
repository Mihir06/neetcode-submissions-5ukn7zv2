/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let nextVal = null;
        const dummy  = new ListNode(0, head);
        function recurse(node){
            // Recursive case, will go upto end of the list
            if(node.next){
                recurse(node.next)
            }
            // Now the end cases of recurison
            // console.log('n', n);
            // console.log('node.val', node.val);
            if(n === 1){
                nextVal = node.next;
            }
            if(n === 0){
                node.next = nextVal;
            }
            n--;
        }
        recurse(dummy)
        return dummy.next;
    }
}
