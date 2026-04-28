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
     * @return {ListNode}
     */
    reverseList(head) {
        
        // Need one variable to store the next pointer, one to store the value and one to move the iteration forward
        let curr = head
        let prev = null
        while(curr){
            
            let temp = curr.next
            curr.next = prev
            prev = curr;
            curr = temp
          
        }
        return prev
    }
}
