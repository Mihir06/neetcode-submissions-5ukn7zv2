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
     * @return {void}
     */
    reorderList(head) {
        // Step 1: Find the middle of the list using fast and slow pointers
        // Step 2: Reverse the second half of the list
        // Step 3: Update the list 1 by comparing the 1st and the 2nd nodes.

        // Step 1:
        let slow = head
        let fast = head.next

        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        // Now slow is at the middle of the list, can proceed to step 2

        // Step 2:
        let prev = null
        let curr = slow.next
        // Set slow's next value to null , so that we essentially have 2 separate lists, to prevent loops
        slow.next = null

        while(curr){

            let nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
        }
        // console.log('slow now', slow)
        // console.log('fast now', fast)
        // console.log('curr now', curr)
        // console.log('prev now', prev)

        // Step 3:
        let firstHalf = head
        let secondHalf = prev
        while(secondHalf !== null){
            
            let firstNext = firstHalf.next
            let secondNext = secondHalf.next

            firstHalf.next = secondHalf
            secondHalf.next = firstNext
            
            firstHalf = firstNext
            secondHalf = secondNext

        }
    }
}
